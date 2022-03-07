import AnimatedPoster from "./AnimatedPoster";
import Facts from "../Facts/Facts";
import ScrollIndicator from "../Scroller/Scroller";
import { NoSsr } from "@mui/material";
import Maps from "../Map/Map";
import Info from "../Info/Info";
import FastNav from "../FastNav/FastNav";
import styles from "./Homepage.module.css"
export default function HomePage() {
  return (
    <>
      <AnimatedPoster />
      <Facts />
      <ScrollIndicator />
      <div className={styles.bottom}>
      <Info />
      <Maps />
      <FastNav />
      </div>
    </>
  );
}
