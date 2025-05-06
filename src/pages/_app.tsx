import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { app } from "@/data/products";
import { AppHeader } from "@/components/app-detail/AppHeader";
import { AppScreenshots } from "@/components/app-detail/AppScreenshots";
import { AppDescription } from "@/components/app-detail/AppDescription";
import { AppDataSafety } from "@/components/app-detail/AppDataSafety";
import { AppRatings } from "@/components/app-detail/AppRatings";
import { App, SimilarApps } from "@/components/app-detail/SimilarApps";
import { siteConfig } from "@/constants/config";

const AppDetail = () => {
  return (
    <div className="min-h-screen bg-[#202124] text-[#E7EAED]">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <AppHeader product={app} />
        </div>
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
            <SimilarApps apps={app.similarApps as unknown as App[]} />
          </aside>
        </div>
      </main>

      <footer className="border-t border-gray-700 mt-12 py-8 text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-20">
            <div>
              <h3 className="text-[#E7EAED] text-lg mb-4">Play</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.nav.map((link, index) => (
                  <li key={index}>
                    <a href={siteConfig.redirectUrl} className="hover:text-[#E7EAED]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#E7EAED] text-lg mb-4">Kids & family</h3>
              <ul className="space-y-2">
                {siteConfig.footerLinks.kidsFamily.map((link, index) => (
                  <li key={index}>
                    <a href={siteConfig.redirectUrl} className="hover:text-[#E7EAED]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 px-[8%] mt-20">
          {siteConfig.footerLinks.about.map((link, index) => (
            <a key={index} href={siteConfig.redirectUrl} className="hover:text-[#E7EAED] text-sm">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default AppDetail;
