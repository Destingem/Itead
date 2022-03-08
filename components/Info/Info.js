import { Typography } from "@mui/material";
import styles from "./Info.module.css";
import { IoBusiness } from "react-icons/io5";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import useCopyClipboard from "react-use-clipboard";
export default function Info() {
  const [clipboardA, setClipboardA] = useCopyClipboard(
    "Masarykovo nám. 1484, 530 02 Pardubice I",
    {
      successDuration: 1000,
    }
  );
  const [clipboardB, setClipboardB] = useCopyClipboard("+420 466 513 112", {
    successDuration: 1000,
  });
  const [clipboardC, setClipboardC] = useCopyClipboard("itead@itead.cz", {
    successDuration: 1000,
  });
  const [clipboardD, setClipboardD] = useCopyClipboard("00485829", {
    successDuration: 1000,
  });
  function clickHandler(props) {
    console.log(props);
    console.log(props);
    switch (props) {
      case "1":
        setClipboardA();
        break;
      case "2":
        setClipboardB("+420 466 513 112");
        break;
      case "3":
        setClipboardC("itead@itead.cz");
        break;
      case "4":
        setClipboardD("00485829");
        break;
      default:
        console.log("šulnul");
        break;
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles}>
        <Typography variant="h3">ITEAD a.s.</Typography>
      </div>
      <div className={styles.cardInfo}>
        <div
          onClick={() => {
            clickHandler("1");
          }}
          id={1}
          className={styles.cardIcon}
        >
          {!clipboardA ? <IoBusiness /> :  <AiOutlineCheck />}
        </div>
        <Typography variant="h5">
          Masarykovo nám. 1484, 530 02 Pardubice I
        </Typography>
      </div>
      <div className={styles.cardInfo}>
        <div
          onClick={() => {
            clickHandler("2");
          }}
          id={2}
          className={styles.cardIcon}
        >
         {!clipboardB ?  <BsFillTelephonePlusFill />:  <AiOutlineCheck />}
         
        </div>
        <Typography variant="h5"> +420 466 513 112</Typography>
      </div>
      <div className={styles.cardInfo}>
        <div
          onClick={() => {
            clickHandler("3");
          }}
          id={3}
          className={styles.cardIcon}
        >
         {!clipboardC ?    <MdEmail />:  <AiOutlineCheck />}
        </div>
        <Typography variant="h5"> itead@itead.cz</Typography>
      </div>
      <div className={styles.cardInfo}>
        <div
          onClick={() => {
            clickHandler("4");
          }}
          id={4}
          className={styles.cardIcon}
        >
          {!clipboardD ?   "IČ":  <AiOutlineCheck />}
        </div>
        <Typography variant="h5">00485829</Typography>
      </div>
    </div>
  );
}
