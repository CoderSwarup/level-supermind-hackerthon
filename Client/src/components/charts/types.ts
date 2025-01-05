import { SocialMediaData } from '@/data/sampleData';

export interface ChartDataPoint {
  date: string;
  [key: string]: number | string;
}

export interface ComparisonDataPoint {
  platform: string;
  likes: number;
  shares: number;
  comments: number;
  engagement: number;
}

export interface ChartProps {
  data: SocialMediaData[];
}