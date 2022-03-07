import { Card, CardHeader, Link, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./AnimatedPoster.module.css";
export default function AnimatedPoster() {
  const router = useRouter()
  function handleClick(props){
    props.preventDefault()
    router.push("/pojisteni")
  }
  return (
    <Card sx={{ borderRadius: 3 }} className={styles.poster}>
      <div className={styles.poster_animation}></div>
      <div className={styles.header}>
        <Typography color="white" className={styles.header} fontSize="10vh">
          Rostete spolu s námi
        </Typography>
      </div>
      <button onClick={handleClick} href="/pojisteni">
      <Card sx={{ borderRadius: 3, minWidth: 275, marginLeft: 145}} className={styles.click}  >
      <Typography color="#036bb1"   variant="button" component="p" >Více o pojistění <AiOutlineArrowRight /></Typography>
      </Card>
      </button>
    </Card>
  );
}
