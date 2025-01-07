import dotenv from "dotenv";
import { ChatCohere } from "@langchain/cohere";
import express, { Request, Response } from "express";
import { runAIWorkFlow as OverallFlow } from "./workflows/combined-workflow";
import { runAIWorkFlow as InstagramFlow } from "./workflows/instagram-workflow";
import { runAIWorkFlow as TwitterFlow } from "./workflows/twitter-workflow";
import { runAIWorkFlow as LinkedinFlow } from "./workflows/linkedin-workflow";
import { runAIWorkFlow as YoutubeFlow } from "./workflows/youtube-workflow";

dotenv.config();

const model = new ChatCohere({
  apiKey: process.env.COHERE_API_KEY,
  model: "command-nightly",
});

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/run", async (req: Request, res: Response) => {
  const query = req.query.query as string;

  const platformType = await model.invoke(
    `
    For the query: '${query}', which collection should I use to answer the question from my following 5 collections: instagram_data, twitter_data, linkedin_data, youtube_data, and combined_data?
    Please respond with the name of the collection in lowercase.

    For example: "Which platform drives the highest engagement for reels?"
    Answer: "combined_data"
    Reason: "Because no specific platform is mentioned in the query."

    If no specific collection is required, respond with 'combined_data', otherwise respond with the name of the collection.
    Answer in one word only i.e. collection name.
    `
  );

  console.log(platformType.content);

  let response: any;
  try {
    switch (platformType.content) {
      case "instagram_data":
        response = await InstagramFlow(query);
        break;
      case "twitter_data":
        response = await TwitterFlow(query);
        break;
      case "linkedin_data":
        response = await LinkedinFlow(query);
        break;
      case "youtube_data":
        response = await YoutubeFlow(query);
        break;
      default:
        response = await OverallFlow(query);
        break;
    }

    res.status(200).json({ response });

    // const response = await axios.post(
    //   "https://api.langflow.astra.datastax.com/lf/4da5b57b-aecc-4712-b25e-032ef45a3d45/api/v1/run/835a0777-d5c2-4fc8-b556-fa710956c9f4?stream=false",
    //   {
    //     query,
    //     output_type: "chat",
    //     input_type: "chat",
    //     tweaks: {
    //       "ParseData-bU2Lk": {},
    //       "SplitText-s45X9": {},
    //       "OpenAIModel-Bunci": {},
    //       "ChatOutput-8sI0F": {},
    //       "AstraDB-66x6b": {},
    //       "File-j3YRd": {},
    //       "ChatInput-iAwEu": {},
    //       "CombineText-1kBZ6": {},
    //       "TextInput-upHmt": {},
    //     },
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.COMBINED_APPLICATION_TOKEN}`,
    //     },
    //   }
    // );
    // const message = response.data.outputs[0].outputs[0].results.message.text;
    // res.status(200).json({ response: message });
  } catch (error) {
    console.log(error);
    response = "Sorry, I couldn't find an answer to your query.";
    res.status(500).json({ response });
  }
});

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
