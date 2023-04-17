import Link from "next/link"
import style from "./style.module.css"

type Props = {
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[],
  activeLink: string
}

export default function Sidebar({menu, activeLink}: Props) {
  return (
    <ul className={style.sidebar}>
      {menu.map((item) => {
        return (
          <li key={item.param} className={`${style.item} ${item.param === activeLink ? style.active : ""}`}>
            <Link href={item.param}>
              <div className={style.image}>
                <img src={item.image} alt={item.category} />
              </div>
              <p className={style.category}>{item.category}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
