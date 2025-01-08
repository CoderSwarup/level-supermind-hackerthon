"use client";

import { useState } from "react";
import TestimonialImg01 from "/images/testimonial-01.jpg";
import TestimonialImg02 from "/images/testimonial-02.jpg";
import TestimonialImg03 from "/images/testimonial-03.jpg";
import TestimonialImg04 from "/images/testimonial-04.jpg";
import TestimonialImg05 from "/images/testimonial-05.jpg";
import TestimonialImg06 from "/images/testimonial-06.jpg";
import TestimonialImg07 from "/images/testimonial-07.jpg";
import TestimonialImg08 from "/images/testimonial-08.jpg";
import TestimonialImg09 from "/images/testimonial-09.jpg";
import ClientImg01 from "/images/client-logo-01.svg";
import ClientImg02 from "/images/client-logo-02.svg";
import ClientImg03 from "/images/client-logo-03.svg";
import ClientImg04 from "/images/client-logo-04.svg";
import ClientImg05 from "/images/client-logo-05.svg";
import ClientImg06 from "/images/client-logo-06.svg";
import ClientImg07 from "/images/client-logo-07.svg";
import ClientImg08 from "/images/client-logo-08.svg";
import ClientImg09 from "/images/client-logo-09.svg";
import useMasonry from "@/utils/useMasonry";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "MaKayla P.",
    company: "Disney",
    content:
      "As a content creator, I was always on the lookout for a tool that could help me keep up with the demand. The AI-driven content tool has been a game-changer. It generates high-quality content in a fraction of the time it used to take me.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Andrew K.",
    company: "Samsung",
    content:
      "I've tried several content generation tools, but this AI-driven tool is by far the best. It understands my brand's voice and consistently produces content that resonates with my audience!",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Lucy D.",
    company: "Rio",
    content:
      "Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Pavel M.",
    company: "Canon",
    content:
      "The quality of the content generated by this AI tool is outstanding. It has taken our content marketing to new heights, allowing us to publish more frequently without compromising on quality. Highly recommended for anyone.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Miriam E.",
    company: "Cadbury",
    content:
      "The AI-driven content tool has been a lifesaver for my marketing agency. We can now produce high-quality content for multiple clients quickly and efficiently. It's an invaluable asset to our team.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg06,
    clientImg: ClientImg06,
    name: "Eloise V.",
    company: "Maffell",
    content:
      "I'm amazed at how well this AI-driven content tool performs. It's incredibly versatile and can generate content for blogs, social media, and even product descriptions effortlessly. It's fantastic!",
    categories: [1, 3],
  },
  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "Pierre-Gilles L.",
    company: "Binance",
    content:
      "I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking platform up and running, and my client could not believe it.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg08,
    clientImg: ClientImg08,
    name: "Danielle K.",
    company: "Forbes Inc.",
    content:
      "I've never been a fan of complicated website AI tools, which is why Open PRO is perfect for me. Its minimalist design and simple functionality make staying organized feel like second nature.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg09,
    clientImg: ClientImg09,
    name: "Mary P.",
    company: "Ray Ban",
    content:
      "I've never been one for coding, so finding an AI tool that doesn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new stuff to friends.",
    categories: [1, 2],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState(1);

  // Filter testimonials based on selected category
  const filteredTestimonials = testimonials.filter((testimonial) =>
    testimonial.categories.includes(category)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === 1
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <span>View All</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === 2
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <span>Web Apps</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === 3
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <span>Mobile Apps</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === 4
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <span>AI Tools</span>
              </button>
              {/* Button #5 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === 5
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === 5}
                onClick={() => setCategory(5)}
              >
                <span>Product Design</span>
              </button>
            </div>
          </div>
          <div ref={masonryContainer}>
            {/* Testimonial items */}
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col-span-1 rounded-lg border border-gray-200 bg-white p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.clientImg}
                    alt={testimonial.company}
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
