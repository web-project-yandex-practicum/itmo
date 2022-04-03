import "./index.css";
import {
  headerMenuButton,
  headerMenuList,
  projectCards,
  paginationNumbersList,
} from "../utils/constants";

import ActiveItem from "../components/ActiveItem";
import Pagination from "../components/Pagination";

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

const cardsList = Array.from(projectCards.children);

function removeActiveCard(card) {
  cardsList.forEach((item) => {
    if (!(card == item)) item.classList.remove("projects__card_active");
  });
}

cardsList.forEach((card) => {
  const button = card.querySelector(".projects__button");
  button.addEventListener("click", () => {
    card.classList.toggle("projects__card_active");
    removeActiveCard(card);
  });
});

paginationNumbersList.forEach((number, i) => {
  const num = i + 1;
  number.textContent = num;
});

const pagination = new Pagination({
  paginationSelector: ".projects__pagination",
  arrowClass: "projects__pagination-arrow",
});
pagination.createPagination(30);
