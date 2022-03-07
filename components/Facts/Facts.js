import Fact from "./Fact";
import styles from "./Facts.module.css";
import { MdBusinessCenter, MdBusiness } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import HorizontalCard from "../UI/HorizontalCard"
export default function Facts() {
  const factsArray = [
    { counter: 31, icon: <MdBusinessCenter />, text: "let zkušeností" },
    {
      counter: 1347,
      icon: <FaFileContract />,
      text: "uzavřených pojistných smluv",
    },
    { counter: 8, icon: <BsFillPersonCheckFill />, text: "vázaných zástupců" },
    { counter: 5, icon: <MdBusiness />, text: "Poboček" },
  ];
  return (
      
    
      <div className={styles.list}>
      {factsArray.map((fact) => {
        return (
          <Fact counter={fact.counter} icon={fact.icon} text={fact.text} />
        );
      })}
      </div>

  );
}
