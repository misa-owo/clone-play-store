
import { Header } from "@/components/Header"
import { CategoryCard } from "@/components/CategoryCard"
import { ProductCard } from "@/components/ProductCard"
import { categories } from "@/data/categories"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/constants/config"

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-[#E7EAED]">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Categories Section */}
        <section>
          <h2 className="text-xl font-medium mb-4 text-[#E7EAED]">Browse by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                image={category.image}
                itemCount={category.itemCount}
                color={category.color}
                active={category.active}
              />
            ))}
          </div>
        </section>

        {/* Top Apps Section */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-[#E7EAED]">Top Apps</h2>
            <Button variant="ghost" className="text-[#00A172] hover:text-green-400 p-0" size="sm">
              See more <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-gray-700">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                developer={product.developer}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                downloads={product.downloads}
                size={product.size}
              />
            ))}
          </div>
        </section>

        {/* Recommended Apps Section */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-[#E7EAED]">Recommended for you</h2>
            <Button variant="ghost" className="text-[#00A172] hover:text-green-400 p-0" size="sm">
              See more <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-gray-700">
            {products.slice().reverse().map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                developer={product.developer}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                downloads={product.downloads}
                size={product.size}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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

export default Index;
