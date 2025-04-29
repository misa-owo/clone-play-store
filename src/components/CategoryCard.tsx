import Link from "next/link"

interface CategoryCardProps {
  name: string
  image: string
  itemCount: number
  color: string
  active?: boolean
}

export const CategoryCard = ({
  name,
  itemCount,
  color,
  active = false
}: CategoryCardProps) => {
  return (
    <Link
      href={`/category/${name.toLowerCase()}`}
      className="block group rounded-xl overflow-hidden"
    >
      <div className={`${color} p-4 transition-transform group-hover:scale-105 ${active ? 'border-b-2 border-[#00A172]' : ''}`}>
        <div className="text-[#E7EAED]">
          <h3 className="font-medium text-lg">{name}</h3>
          <p className="text-sm opacity-90">{itemCount.toLocaleString()} items</p>
        </div>
      </div>
    </Link>
  )
}
