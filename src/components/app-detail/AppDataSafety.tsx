import { ArrowRight, Share, LockKeyhole, Share2, CloudUpload, Trash2 } from "lucide-react";
import { siteConfig } from "@/constants/config";

const iconMap: Record<string, React.ElementType> = {
  Share,
  Share2,
  CloudUpload,
  LockKeyhole,
  Trash2,
};

export const AppDataSafety = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-5 mb-6">
        <h2 className="text-2xl">Data safety</h2>
        <ArrowRight className="h-5 w-5 text-[#9FA5AA]" />
      </div>
      <p className="text-[#9AA0A5] mb-4 text-sm">{siteConfig.dataSafety.description}</p>
      <div className="border border-[#606366] rounded-2xl p-6 text-sm">
        {siteConfig.dataSafety.points.map((point, idx) => {
          const Icon = iconMap[point.icon] || Share;
          return (
            <div key={idx} className="flex items-start gap-4 mb-4 w-[50%] text-sm">
              <div className="flex justify-center w-[1.2rem] pt-0.5">
                <Icon className="text-[#636364]" />
              </div>
              <span className="text-[#9AA0A5]">{point.text}</span>
            </div>
          );
        })}
        <a href="#" className="text-[#00A172] font-medium mt-4 block">See details</a>
      </div>
    </div>
  );
}; 