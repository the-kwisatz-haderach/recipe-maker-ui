import { getIngredients } from '@/lib/api/getIngredients'
import Link from '@/components/Link/Link'

export default async function Home() {
  const ingredients = await getIngredients()
  return (
    <div>
      <nav className="flex">
        <Link href="/api/logout">Log out</Link>
      </nav>
      {ingredients.map((ingredient: any) => (
        <p key={ingredient.id}>{ingredient.name}</p>
      ))}
    </div>
  )
}
