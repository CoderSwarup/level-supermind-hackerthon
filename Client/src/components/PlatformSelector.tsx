import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Platform } from "@/data/sampleData";

interface PlatformSelectorProps {
  value: Platform;
  onChange: (value: Platform) => void;
}

export function PlatformSelector({ value, onChange }: PlatformSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="YOUTUBE">YouTube</SelectItem>
        <SelectItem value="INSTAGRAM">Instagram</SelectItem>
        <SelectItem value="TWITTER">Twitter</SelectItem>
        <SelectItem value="LINKEDIN">LinkedIn</SelectItem>
      </SelectContent>
    </Select>
  );
}
