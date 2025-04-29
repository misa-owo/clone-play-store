import { ArrowRight } from "lucide-react";

interface AppAboutProps {
  shortDescription: string;
  description: string[];
  lastUpdated: string;
}

export const AppAbout = ({ shortDescription, description, lastUpdated }: AppAboutProps) => (
  <div className="mt-10">
    <div className="flex items-center gap-5 mb-6">
      <h2 className="text-2xl">About this game</h2>
      <ArrowRight className="h-5 w-5 text-[#9FA5AA]" />
    </div>
    <div className="text-[#9AA0A5] text-sm">{shortDescription}</div>
    {description.map((p, i) => (
      <p key={i} className="text-[#9AA0A5] text-sm mb-2">{p}</p>
    ))}
    <div className="flex flex-col items-start gap-1 mt-6">
      <div className="text-gray-200 text-sm">Updated on</div>
      <div className="text-[#9AA0A5] text-sm">{lastUpdated}</div>
    </div>
  </div>
);
