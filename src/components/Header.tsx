import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Menu, User, HelpCircle } from "lucide-react"
import { siteConfig } from "@/constants/config"
import Link from "next/link"
import { useState } from "react"

export const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-[#202124] sticky top-0 z-50">
      <div className="container mx-auto px-4 pt-2">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#EA4335" />
                  <path d="M104.6 13l280.8 161.2-60.1 60.1L104.6 13z" fill="#FBBC04" />
                  <path d="M473 102.8L325.3 234.3l-126.5-58.1L473 102.8z" fill="#4285F4" />
                  <path d="M47 384.2l85.1-157-21.2-89.8L47 384.2z" fill="#34A853" />
                  <path d="M325.3 495.9l-208.1-223 126.5-58.1 81.6 281.1z" fill="#EA4335" />
                  <path d="M104.6 499l218.7-283.3-81.6-106.4L104.6 499z" fill="#FBBC04" />
                  <path d="M325.3 495.9l-190.2-371.2L233.6 95l91.7 400.9z" fill="#4285F4" />
                  <path d="M135.1 124.8l208.1 223-126.5 58.1-81.6-281.1z" fill="#34A853" />
                </svg>
              </div>
            </div>
            <span className="text-xl font-medium text-[#9AA0A5]">Google Play</span>
          </Link>
          
          <nav className="hidden md:flex items-center ml-4 gap-8">
            {siteConfig.headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  link.active 
                    ? "text-[#00A172] border-b-2 border-[#00A172] pb-2"
                    : "text-[#636363] hover:text-[#E7EAED]"
                } font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden text-[#9AA0A5]">
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 max-w-3xl ml-auto mr-4" />

          <Button
            variant="ghost"
            size="icon"
            className="text-[#9AA0A5]"
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="!h-5 !w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-[#9AA0A5]">
            <HelpCircle className="!h-5 !w-5" />
          </Button>
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
