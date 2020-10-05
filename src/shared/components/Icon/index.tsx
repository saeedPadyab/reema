import {
  BsClock,
  BsGraphUp,
  BsLayoutWtf,
  BsChatSquareQuote,
  BsX,
} from "react-icons/bs";

const icons: { [key in string]: any } = {
  time: <BsClock />,
  financial: <BsGraphUp />,
  legal: <BsLayoutWtf />,
  numbers: <BsChatSquareQuote />,
  close: <BsX />,
};
const Icon = ({ name = "" }) => {
  return icons[name.toLowerCase()] ? icons[name.toLowerCase()] : "";
};

export default Icon;
