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

function removeActiveCard() {
  cardsList.forEach((card) => {
    if (card.classList.contains("projects__card_active")) {
      toggleCard(card);
    }
  });
}

function toggleCard(card) {
  card.classList.toggle("projects__card_active");
  const text = card.querySelector(".projects__card-text");
  const logo = card.querySelector(".projects__logo-path");
  const moreInfo = card.querySelector(".projects__more-info");
  const button = card.querySelector(".projects__button");
  text.classList.toggle("projects__card-text_show");
  logo.classList.toggle("projects__logo_active");
  moreInfo.classList.toggle("projects__more-info_active");
  button.classList.toggle("projects__button_active");
}

cardsList.forEach((card) => {
  const button = card.querySelector(".projects__button");
  console.log(button);
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("projects__button_active")) {
      removeActiveCard();
      return;
    }
    removeActiveCard();
    toggleCard(card);
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
