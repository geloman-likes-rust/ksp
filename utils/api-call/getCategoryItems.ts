type CategoryItems = {
  id: number
  img: string
  label: string
  price: string
}[]
export default async function getCategoryItems(category: string): Promise<CategoryItems> {
  const response = await fetch(`https://api-kfc-menu.vercel.app/menu/${category}`)
  const { data } = await response.json()
  return data
}
