import Sidebar from "@/components/ui/sidebar"
import style from "./style.module.css"
import { Roboto } from "next/font/google"
import { useRouter } from "next/router"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "900"
})

type Props = {
  categoryItems: {
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

export default function Category({ menu, categoryItems }: Props) {
  const router = useRouter()
  const { category } = router.query
  return (
    <div className={`${style.page} ${roboto.className}`}>
      <div className={style.menu}>
        <div className={style.sidebar_wrapper}>
          <Sidebar activeLink={String(category)} menu={menu} />
        </div>
        <ul className={style.grid}>
          {
            categoryItems.map((item) => {
              return (
                <li key={`${item.id}__${item.label}`} className={style.card}>
                  <div className={style.image}>
                    <img draggable={false} src={item.img} alt={item.label} />
                  </div>
                  <div className={style.details}>
                    <div className={style.primary}>
                      <p className={style.label}>{item.label}</p>
                    </div>
                    <div className={style.secondary}>
                      <p className={style.price}>₱ {item.price}.00</p>
                      <span className={style.order_now}>order now</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
