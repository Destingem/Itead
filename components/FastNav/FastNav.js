import Link from "next/link"

import styles from "./FastNav.module.css"

export default function FastNav(){

    return(
        <div className={styles.FastNav}>
        <ul>
            <li><Link href="/pojisteni">Pojistění</Link></li>
            <li><Link href="/o-nas">O nás</Link></li>
            <li><Link href="/aktuality">Aktuality</Link></li>
            <li><Link href="/spoluprace">Spolupráce</Link></li>
            <li><Link href="/zakonne-informace">Zákonné informace</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
        </div>
    )
}