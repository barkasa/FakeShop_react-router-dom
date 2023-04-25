import s from "./homePage.module.css";

import { useState } from "react";
const HomePage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={s.home_section}>
      <img
        onClick={handleClick}
        className={`${s.home_image} ${isFlipped ? s.home_image_flipped : ""}`}
        width={1000}
        src="https://s.0619.com.ua/section/promonewsintext/upload/images/promo/intext/000/026/499/reklama5a67c67f0c637.jpeg"
        alt="baner"
      />
    </div>
  );
};
export default HomePage;
