type Menu = {
  id: number
  image: string
  category: string
  param: string
}[]

export default async function getMenu(): Promise<Menu> {
  const response = await fetch("https://api-kfc-menu.vercel.app/menu")
  const { data } = await response.json()
  return data
}
