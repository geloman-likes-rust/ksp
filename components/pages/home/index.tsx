import Link from "next/link"
import style from "./style.module.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: '900'
})

type Props = {
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}

export default function Home({ menu }: Props) {
  return (
    <div className={`${style.home} ${roboto.className}`}>
      <ul className={style.grid}>
        {menu.map((item) => {
          return (
            <li key={item.param} className={style.item}>
              <Link href={item.param}>
                <div className={style.card}>
                  <div className={style.image}>
                    <img src={item.image} alt={item.category} />
                  </div>
                  <div className={style.category}>
                    <p>{item.category}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
