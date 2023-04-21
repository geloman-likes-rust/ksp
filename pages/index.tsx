import Home from '@/components/pages/home'
import getMenu from '@/utils/api-call/getMenu'
import Head from 'next/head'

type Props = {
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}

export default function HomePage({menu}: Props) {
  return (
    <>
      <Head>
        <title>k-ep-si</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotdog.svg" />
      </Head>
      <Home menu={menu} />
    </>
  )
}

export async function getStaticProps() {
  const menu = await getMenu()
  return {
    props: {
      menu
    }
  }
}
