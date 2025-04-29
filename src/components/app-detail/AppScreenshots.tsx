import { ChevronRight } from "lucide-react";
import { useRef } from "react";

interface AppScreenshotsProps {
  screenshots: string[];
}

export const AppScreenshots = ({ screenshots }: AppScreenshotsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-8 mb-8">
      <div
        ref={scrollRef}
        className="flex  overflow-x-auto pb-4 scrollbar-hide pr-16 pe-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {screenshots.map((s, i) => (
          <img
            key={i}
            src={s}
            alt={`Screenshot ${i + 1}`}
            className="rounded-2xl w-[220px] h-[390px] object-cover flex-shrink-0 border border-gray-700 bg-black"
          />
        ))}
      </div>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-1 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 text-gray-900 rounded-full shadow-lg w-12 h-12 flex items-center justify-center border border-gray-300"
        aria-label="Next screenshot"
        type="button"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
}; 