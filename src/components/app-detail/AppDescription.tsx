import { Product } from "@/types/product"

interface AppDescriptionProps {
  product: Product
}

export const AppDescription = ({ product }: AppDescriptionProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-medium mb-4">About this app</h2>
      <div className="prose prose-invert max-w-none">
        {product.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
} 