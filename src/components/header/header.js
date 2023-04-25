import s from "./header.module.css";

import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.menu_wrapper}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
      </div>
    </div>
  );
};
export default Header;
