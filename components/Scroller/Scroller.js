import React, { useState, Fragment } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import styles from "./Scroller.module.css"
import { margin } from "@mui/system";
const ScrollIndicator = () => {
const [scroll, setScroll] = useState(0);

const onScroll = () => {
	const Scrolled = document.documentElement.scrollTop;
	const MaxHeight =
	document.documentElement.scrollHeight -
	document.documentElement.clientHeight;
	const ScrollPercent = (Scrolled / MaxHeight) * 100;
	setScroll(ScrollPercent);
    console.log(ScrollPercent);
};
React.useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

return (
    <div className={styles.scroller}>
    <LinearProgress  onScroll={onScroll} value={scroll} valueBuffer={scroll} sx={{minWidth: 50, marginBottom: 2, marginLeft: 30}} variant='buffer' />
    </div>
);
};

export default ScrollIndicator;
