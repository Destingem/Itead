
import styles from "./HorizontalCard.module.css"

export default function HorizontalCard(props){
    return(
        <div className={styles.card}>
            {props.children}
        </div>
    )
}