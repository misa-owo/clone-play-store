import "@/styles/globals.css";
import { Header } from "@/components/Header"
import { app,  } from "@/data/products"
import { useRouter } from "next/router"
import { AppHeader } from "@/components/app-detail/AppHeader"
import { AppScreenshots } from "@/components/app-detail/AppScreenshots"
import { AppDescription } from "@/components/app-detail/AppDescription"
import { AppDataSafety } from "@/components/app-detail/AppDataSafety"
import { AppRatings } from "@/components/app-detail/AppRatings"
import { App, SimilarApps } from "@/components/app-detail/SimilarApps"
import { siteConfig } from "@/constants/config"
const AppDetail = () => {

  return (
    <div className="min-h-screen bg-[#202124] text-[#E7EAED]">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <AppHeader product={app} />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <AppScreenshots screenshots={app.carouselImages} />
            <AppDescription product={app} />
            <AppDataSafety />
            <AppRatings 
              reviews={siteConfig.reviews}
              ratingDistribution={siteConfig.ratingDistribution}
            />
          </div>
          {/* Sidebar */}
          <aside className="w-full lg:w-[340px] flex-shrink-0">
            <SimilarApps apps={app.similarApps as any as  App[]} />
          </aside>
        </div>
      </main>

      <footer className="border-t border-gray-700 mt-12 py-8 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#E7EAED] text-lg mb-4">Google Play</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.googlePlay.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-[#E7EAED]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#E7EAED] text-lg mb-4">Kids & family</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.kidsFamily.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-[#E7EAED]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {siteConfig.footerLinks.about.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-[#E7EAED] text-sm">
                  {link.label}
                </a>
              ))}
              
              <div className="mt-4 flex items-center">
                <span className="flex items-center ml-auto">
                  <div className="w-6 h-6 mr-2 flex items-center justify-center rounded overflow-hidden border border-gray-400">
                    <div className="w-full h-full bg-blue-500"></div>
                  </div>
                  United States (English)
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppDetail 