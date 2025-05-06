import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Menu, HelpCircle } from "lucide-react"
import { siteConfig } from "@/constants/config"
import Link from "next/link"
import { useState } from "react"

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#202124] sticky top-0 z-50">
      <div className="container px-4 pt-2">
        <div className="flex items-center gap-4">
          <Link href={siteConfig.redirectUrl} className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 w-full h-full">
              <svg class="kOqhQd" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"> <path fill="none" d="M0,0h40v40H0V0z"></path> <g> <path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path> <path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path> <path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path> <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path> </g></svg>
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

          <a className="block" href={siteConfig.redirectUrl}>
            <Button variant="ghost" size="icon" className="md:hidden text-[#9AA0A5]">
              <Menu className="h-5 w-5" />
            </Button>
          </a>
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
