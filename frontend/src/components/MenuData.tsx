import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGear,
  faImage,
  faDownload,
  faLink,
  faComment,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const menuData = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
    dropdown: [], 
  },
  {
    title: "Services",
    icon: <FontAwesomeIcon icon={faGear} />,
    dropdown: [], 
  },
  {
    title: "Gallery",
    icon: <FontAwesomeIcon icon={faImage} />,
    dropdown: [], 
  },
  {
    title: "Downloads",
    icon: <FontAwesomeIcon icon={faDownload} />,
    dropdown: [], 
  },
  {
    title: "Other Links",
    icon: <FontAwesomeIcon icon={faLink} />,
    dropdown: [], 
  },
  {
    title: "Grievance",
    icon: <FontAwesomeIcon icon={faComment} />,
    dropdown: [], 
  },
  {
    title: "Meeseva Centers",
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    dropdown: [], 
  },
  {
    title: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} />,
    dropdown: [], 
  },
];

export default menuData;
