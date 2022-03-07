
import { Typography } from "@mui/material"
import styles from "./Info.module.css"
export default function Info(){

    return(
        <div className={styles.card}>
        <Typography variant="h3"  >ITEAD a.s.</Typography>
        <Typography variant="h5"  >Masarykovo nám. 1484, 530 02 Pardubice I</Typography>
        <Typography variant="h5"  >+420 466 513 112</Typography>
        <Typography variant="h5"  >IČ: 00485829</Typography>
        <Typography variant="h5"  >itead@itead.cz</Typography>
        
        </div>
    )
}