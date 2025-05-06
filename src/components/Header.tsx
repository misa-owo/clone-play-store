import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Menu, HelpCircle } from "lucide-react"
import { siteConfig } from "@/constants/config"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#202124] sticky top-0 z-50">
      <div className="container px-4 pt-2">
        <div className="flex items-center gap-4">
          <Link href={siteConfig.redirectUrl} className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 w-full h-full">
                <Image src={"/favicon.svg" } height={200} width={200} alt="icon"/>
              </div>
            </div>
            <span className="text-xl font-medium text-[#9AA0A5]">Google Play</span>
          </Link>

          <nav className="hidden md:flex items-center ml-4 gap-8">
            {siteConfig.headerLinks.map((link) => (
              <Link
                key={link.href}
                href={siteConfig.redirectUrl}
                className={`text-sm ${link.active
                  ? "text-[#00A172] border-b-2 border-[#00A172] pb-2"
                  : "text-[#636363] hover:text-[#E7EAED]"
                  } font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          
          <div className="flex-1 max-w-3xl ml-auto mr-4" />
          <a className="block" href={siteConfig.redirectUrl}>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#9AA0A5]"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="!h-5 !w-5" />
            </Button>
          </a>
          <a className="block" href={siteConfig.redirectUrl}>
            <Button variant="ghost" size="icon" className="text-[#9AA0A5]">
              <HelpCircle className="!h-5 !w-5" />
            </Button>
          </a>
        </div>
      </div>
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center">
          <div className="bg-[#252936] w-full max-w-2xl mt-10 rounded-lg shadow-lg p-4 flex items-center relative">
            <Input
              autoFocus
              placeholder={siteConfig.searchPlaceholder}
              className="w-full pl-10 bg-[#252936] border-none text-[#E7EAED] text-lg"
            />
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Button
              variant="ghost"
              size="icon"
              className="text-[#E7EAED] absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
