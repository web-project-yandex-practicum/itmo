class Pagination {
  constructor({ paginationSelector, arrowClass }) {
    this.pagination = document.querySelector(paginationSelector);
    this._pagesList = [];
    [this._arrowLeft, this._arrowRight] = this._createArrows(arrowClass);
  }

  _createArrows(arrowClass) {
    const arrowLeft = document.createElement("li");
    arrowLeft.classList.add(arrowClass);
    const arrowRight = document.createElement("li");
    arrowRight.classList.add(arrowClass);
    return [arrowLeft, arrowRight];
  }

  _createPages(range) {
    this._pagesList = Array.from({ length: range }, (_, index) => {
      const page = document.createElement("li");
      page.classList.add("projects__pagination-number");
      page.textContent = index + 1;
      return page;
    });
    this._currentPage = this._pagesList[0];
    this._createCurrentRange();
  }

  _createCurrentRange(page = 1) {
    const currentPage = +page;
    this._currentRange = [
      this._arrowLeft,
      ...this._pagesList.slice(currentPage - 1, currentPage + 3),
      this._checkDots(),
      this._pagesList.at(-1),
      this._arrowRight,
    ];
  }

  _checkDots() {
    const dots = document.createElement("li");
    dots.textContent = "...";
    dots.classList.add("projects__pagination-dots");
    return +this._currentPage.textContent + 5 >= this._pagesList.length
      ? this._pagesList.at(-2)
      : dots;
  }

  _removeActive() {
    this._pagesList.forEach((page) =>
      page.classList.remove("projects__pagination-number_active")
    );
  }

  _addListenerToPage() {
    this._pagesList.forEach((page) => {
      page.addEventListener("click", () => {
        this._currentPage = page;
        if (page === this._pagesList.at(-1)) {
          this._createCurrentRange(this._pagesList.length - 5);
        }
        this._render();
      });
    });
  }

  _handleClickArrowLeft = () => {
    const currentPage = +this._currentPage.textContent;
    if (this._currentPage !== this._pagesList[0]) {
      this._currentPage = this._pagesList[currentPage - 2];
    }
    this._render();
  };

  _handleClickArrowRight = () => {
    const currentPage = +this._currentPage.textContent;
    if (this._currentPage in this._currentRange) {
      this._createCurrentRange(this._currentPage.textContent);
    }
    if (this._currentPage !== this._pagesList.at(-1)) {
      this._currentPage = this._pagesList[currentPage];
    }
    this._render();
  };

  _render() {
    if (this._currentRange.indexOf(this._currentPage) === -1) {
      this._createCurrentRange(this._currentPage.textContent);
    }
    this._removeActive();
    this._currentPage.classList.add("projects__pagination-number_active");
    Array.from(this.pagination.children).forEach((item) => item.remove());
    this.pagination.append(...this._currentRange);
  }

  createPagination(range) {
    this._arrowLeft.addEventListener("click", this._handleClickArrowLeft);
    this._arrowRight.addEventListener("click", this._handleClickArrowRight);
    this._createPages(range);
    this._addListenerToPage();
    this._render();
  }

  getCurrentPage() {
    return this._currentPage;
  }
}

export default Pagination;
