import { Star } from "lucide-react"
import { App } from "./app-detail/SimilarApps"
import { siteConfig } from "@/constants/config"



export const ProductCard = ({
  name,
  developer,
  image,
  rating,
}: App) => {
  return (
    <a href={siteConfig.redirectUrl} className="block flex gap-4 p-4 hover:bg-[#252936] transition-colors cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-xl object-cover"
      />
      <div className="flex-1 min-w-0 gap-1">
        <h3 className="font-medium text-base truncate text-[#DEE1E4]">{name}</h3>
        <p className="text-sm text-[#DEE1E4] truncate">{developer}</p>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-[#949A9E]">{rating}</span>
          <Star className="h-2 w-2 fill-[#9FA5AA] text-[#9FA5AA]" />
        </div>
      </div>
    </a>
  )
}
