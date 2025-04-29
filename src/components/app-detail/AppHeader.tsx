import { Button } from "@/components/ui/button";
import { Star, Share2, BookmarkPlus, Info, MonitorSmartphone } from "lucide-react";
import { Product } from "@/types/product";

interface AppHeaderProps {
  product: Product;
}

export const AppHeader = ({ product }: AppHeaderProps) => (
  <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16 mb-10 mt-10">
    <div className="flex-1 min-w-0">
      <h1 className="text-[56px] md:text-[64px] font-extrabold font-sans mb-5 leading-none">{product.name}</h1>
      <div className="text-[#00A172] text-lg mb-1 font-sans">{product.category}</div>
      <div className="text-[#9AA0A5] text-sm mb-8 font-sans">Free App</div>
      <div className="flex items-center gap-2 mb-10">
        <div className="flex flex-col items-center px-2 gap-2">
          <div className="flex items-center gap-1">
            <span className="text-md !font-avenir">{product.rating}</span>
            <Star className="!h-3 !w-3 text-[#E7EAED] fill-white" />
          </div>
          <span className="text-[#9AA0A5] text-xs font-sans">{product.reviews.toLocaleString()} reviews</span>
        </div>

        <div className="h-7 w-px bg-gray-700 mx-2" />

        <div className="flex flex-col items-center px-2 gap-2">
          <span className="text-md font-sans">{product.downloads}</span>
          <span className="text-[#9AA0A5] text-xs font-sans">Downloads</span>
        </div>

        <div className="h-7 w-px bg-gray-700 mx-2" />

        <div className="flex flex-col items-center px-2 gap-2">
          <span className="text-gray-900 bg-white text-sm text-bold font-sans !p-0">{product.age}+</span>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 text-xs font-sans">{product.age}+</span>
            <Info className="h-3 w-3 text-[#9AA0A5]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-center gap-2 mb-6">
        <Button className="bg-[#00A172]/90 text-[#202124] text-md px-16 py-3 rounded-lg hover:bg-[#00A172] font-sans w-full md:w-[200px]">Install</Button>
        <Button variant="ghost" className="hover:bg-[#20252D] px-2">
          <Share2 className="!h-6 !w-5 text-[#00A172]" />
          <span className="font-sans text-[#00A172]">Share</span>
        </Button>
        <Button variant="ghost" className="hover:bg-[#20252D] px-2 flex items-center gap-2">
          <BookmarkPlus className="!h-6 !w-5 text-[#5F6367]" size={20} />
          <span className="font-sans text-[#00A172]">Add to wishlist</span>
        </Button>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <MonitorSmartphone className="h-5 w-5 text-gray-400" />
        <span className="text-[#9AA0A5] text-sm text-base font-sans">This app is available for all of your devices</span>
      </div>
    </div>
    <div className="w-60 h-60 shadow-2xl rounded-2xl overflow-hidden flex-shrink-0 bg-black flex self-baseline justify-center">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
    </div>
  </section>
); 