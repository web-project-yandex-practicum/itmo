class ActiveItem {
  constructor({ selectorList, activeClass }) {
    this._list = document.querySelector(selectorList);
    this.children = Array.from(this._list.children);
    this._activeClass = activeClass;
  }

  _removeActive() {
    this.children.forEach((item) => item.classList.remove(this._activeClass));
  }

  setEvent() {
    this.children.forEach((item) =>
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this._removeActive();
        item.classList.add(this._activeClass);
      })
    );
  }
}

export default ActiveItem;
