import "./index.css";
import { headerMenuButton, headerMenuList } from "../utils/constants";

headerMenuButton.addEventListener("click", (e) => {
  e.target.classList.toggle("header__menu-button_active");
  headerMenuList.classList.toggle("header__menu-list_active");
});
