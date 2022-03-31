class Pagination {
  constructor(totalPages, page = 1, listSelector) {}

  getPage() {
    return this._page;
  }

  createPagination() {
    this._render();
  }
}

export default Pagination;
