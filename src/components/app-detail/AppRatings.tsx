import { Star, ArrowRight, Info, MoreVertical, Smartphone, Tablet, Watch, Laptop, Monitor, Car, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/config";
import { useState } from "react";

const deviceIconMap: Record<string, React.ElementType> = {
  Smartphone,
  Tablet,
  Watch,
  Laptop,
  Monitor,
  Car,
};

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  helpfulCount: number;
  device: string;
}

interface AppRatingsProps {
  reviews: Review[];
  ratingDistribution: {
    rating: number;
    percentage: number;
  }[];
}

export const AppRatings = ({ reviews, ratingDistribution }: AppRatingsProps) => {
  const [activeDevice] = useState(siteConfig.ratings.deviceFilters[0].value);

  const filteredReviews = reviews.filter(review => review.device === activeDevice);

  const deviceReviews = {
    totalCount: filteredReviews.length,
    averageRating: filteredReviews.length > 0
      ? (filteredReviews.reduce((acc, rev) => acc + rev.rating, 0) / filteredReviews.length).toFixed(1)
      : "0.0"
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5 mb-2">
          <h2 className="text-2xl text-[#E7EAED]">{siteConfig.ratings.title}</h2>
          <a className="block" href={siteConfig.redirectUrl}>
            <ArrowRight className="h-5 w-5 text-[#9FA5AA]" />
          </a>
        </div>
        <Button variant="ghost" className="flex items-center gap-2 text-[#636364] text-sm hover:bg-[#232427]">
          {siteConfig.ratings.verifiedText}
          <Info className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {siteConfig.ratings.deviceFilters.map((filter) => {
            const Icon = deviceIconMap[filter.icon] || Smartphone;
            return (

               
                  <a className="block" href={siteConfig.redirectUrl}    key={filter.value}>
                <Button
                  variant={activeDevice === filter.value ? "default" : "outline"}
                  className={`rounded-full px-6 py-1 text-sm font-medium flex items-center gap-2 ${activeDevice === filter.value
                    ? "bg-[#194A3A] text-[#2CB688]"
                    : "bg-transparent hover:bg-[#2F3033] hover:text-[#9FA5AA] border-gray-600 text-[#9FA5AA]"
                    }`}
                >
                  <Icon className={`h-4 w-4 ${activeDevice === filter.value ? "text-[#2CB688]" : "text-[#9FA5AA]"
                    }`} />
                  <span>{filter.label}</span>
                </Button>
              </a>
            );
          })}
        </div>
        <Button variant="ghost" size="icon" className="bg-white text-gray-700 rounded-full !p-2">
          <ChevronRight className="!h-9 !w-9 !p-1" />
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/6 flex flex-col items-start">
          <div className="text-6xl font-bold text-[#E7EAED]">{deviceReviews.averageRating}</div>
          <div className="flex mt-2 !gap-1">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#00A172] text-[#00A172]" />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-1">{deviceReviews.totalCount} reviews</p>
        </div>
        <div className="md:w-5/6 flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            {ratingDistribution.map((item) => (
              <div key={item.rating} className="flex items-center gap-1 !mt-0">
                <span className="w-3 text-sm text-gray-300">{item.rating}</span>
                <div className="flex-1 h-3 bg-[#3C4043] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00A172]"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 space-y-10">
        {filteredReviews.map((review) => (
          <div key={review.id} className="pb-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-[#E7EAED] font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="font-medium text-[#E7EAED] text-base">{review.name}</div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#00A172] font-bold text-xs">{'★'.repeat(review.rating)}</span>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
              </div>
              <div className="ml-auto !mt-0">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="text-[#9AA0A5] text-sm text-base mb-4">{review.comment}</div>
            <div className="text-[#9AA0A5] text-xs mb-2">
              {review.helpfulCount} {siteConfig.ratings.helpfulText}
            </div>
            <div className="flex items-center text-[#9AA0A5] text-xs gap-4 mb-2">
              <span>{siteConfig.ratings.helpfulQuestion}</span>
              <a className="block" href={siteConfig.redirectUrl}>
                <Button variant="outline" className="rounded-full px-6 !py-0 text-sm border-gray-600 bg-transparent hover:bg-gray-800">
                  {siteConfig.ratings.yesLabel}
                </Button>
              </a>
              <a className="block" href={siteConfig.redirectUrl}>

                <Button variant="outline" className="rounded-full px-6 !py-0 text-sm border-gray-600 bg-transparent hover:bg-gray-800">
                  {siteConfig.ratings.noLabel}
                </Button>
              </a>
            </div>
          </div>
        ))}
        <a className="block text-[#0C946A] font-semibold" href={siteConfig.redirectUrl}>
          See all reviews
        </a>
      </div>
    </div>
  );
}; 