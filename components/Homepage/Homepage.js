import AnimatedPoster from "./AnimatedPoster";
import Facts from "../Facts/Facts";
import ScrollIndicator from "../Scroller/Scroller";
import { NoSsr } from "@mui/material";
import Maps from "../Map/Map";
export default function HomePage() {
  return (
    <>
      <AnimatedPoster />
      <Facts />
      <ScrollIndicator />

      <Maps />
    </>
  );
}
