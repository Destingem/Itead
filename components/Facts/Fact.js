import { Paper, Typography } from "@mui/material";
import styles from "./Fact.module.css"

export default function Fact(props){

    return(
        <Paper elevation={3} className={styles.fact}>
        <p className={styles.icon}>{props.icon}</p>
        <Typography className={styles.counter}>{props.counter}</Typography>
        <Typography className={styles.text}>{props.text}</Typography>
        </Paper>
    )
}