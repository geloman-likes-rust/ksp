import Category from "@/components/pages/category";
import getCategoryItems from "@/utils/api-call/getCategoryItems";
import getMenu from "@/utils/api-call/getMenu";
import Head from "next/head";

type Props = {
  category: {
    id: number
    img: string
    label: string
    price: number
  }[],
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}

export default function CategoryPage({ menu, category }: Props) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Category menu={menu} categoryItems={category} />
    </>
  )
}

export async function getStaticPaths() {
  const menu = await getMenu()
  return {
    paths: menu.map(({ param }) => ({ params: {category: param}})),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const [menu, category] = await Promise.all([
    getMenu(),
    getCategoryItems(params.category)
  ])
  return {
    props: {
      category,
      menu
    }
  }
}
