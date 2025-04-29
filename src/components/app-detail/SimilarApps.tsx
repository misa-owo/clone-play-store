import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { siteConfig } from "@/constants/config";

export interface App {
    id: string;
    name: string;
    image: string;
    rating: number
    developer: string
}
interface SimilarAppsProps {
  apps: App[]
}

export const SimilarApps = ({ apps }: SimilarAppsProps) => {
  

  return (
    <div className="rounded-xl p-4">
      <div className="flex items-center gap-5 p-4">
        <h3 className="text-xl font-medium">{siteConfig.similarApps.title}</h3>
        <ArrowRight className="h-5 w-5 text-[#9FA5AA]" />
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <ProductCard
            {...app}
            key={app.id}
          />
        ))}
      </div>
    </div>
  );
};
