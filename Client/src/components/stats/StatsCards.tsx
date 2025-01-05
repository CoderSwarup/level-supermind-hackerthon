import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialMediaData } from "@/data/sampleData";
import { BarChart3, Heart, MessageCircle, Share2 } from "lucide-react";

interface StatsCardsProps {
  data: SocialMediaData[];
}

export function StatsCards({ data }: StatsCardsProps) {
  const totalLikes = data.reduce((sum, item) => sum + item.LIKES, 0);
  const totalShares = data.reduce((sum, item) => sum + item.SHARE, 0);
  const totalComments = data.reduce((sum, item) => sum + item.COMMENTS, 0);
  const totalEngagement = data.reduce((sum, item) => sum + item.ENGAGEMENT, 0);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
          <Heart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalLikes.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Shares</CardTitle>
          <Share2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalShares.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
          <MessageCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalComments.toLocaleString()}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Engagement
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalEngagement.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
