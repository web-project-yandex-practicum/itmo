import "./index.css";
import { headerMenuButton, headerMenuList } from "../utils/constants";

import ActiveItem from "../components/ActiveItem";

headerMenuButton.addEventListener("click", (e) => {
  e.target.classList.toggle("header__menu-button_active");
  headerMenuList.classList.toggle("header__menu-list_active");
});

const setActiveHeaderMenuItems = new ActiveItem({
  selectorList: ".header__menu-list",
  activeClass: "header__menu-item_active",
});

setActiveHeaderMenuItems.setEvent();

const setActiveProjectsItem = new ActiveItem({
  selectorList: ".projects__list",
  activeClass: "projects__list-item_active",
});

setActiveProjectsItem.setEvent();
