import { getIngredients } from '@/lib/api/getIngredients'

export default async function Home() {
  const ingredients = await getIngredients()
  return (
    <main>
      <a href="/api/logout">logout</a>
      {ingredients.map((ingredient: any) => (
        <p key={ingredient.id}>{ingredient.name}</p>
      ))}
    </main>
  )
}
