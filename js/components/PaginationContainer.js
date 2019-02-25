import {
  LitElement,
  html
} from 'lit-element';
import './PageItem.js';
import './PagerList.js';

class PaginationContainer extends LitElement {
  static get properties() {
    return {
      currPage: {
        type: Number
      },
      pages: {
        type: Array
      },
    };
  }
  // In the "light dom"
  createRenderRoot() {
    return this;
  }

  firstPage(e) {
    this.currPage = 0;
  }

  lastPage(e) {
    this.currPage = this.pages.length - 1;
  }

  nextPage(e) {
    if (this.currPage < this.pages.length - 1) {
      this.currPage++;
    }
  }

  prevPage(event) {
    if (this.currPage > 0) {
      this.currPage--;
    }
  }


  pageItemClicked(event) {
    const clickedPageNumber = event.detail.number;
    this.currPage = clickedPageNumber;
  }


  render() {
    return html `
        <page-item class="row" .contents=${this.pages[this.currPage]}></page-item>
        <pager-list 
          @page-selected="${this.pageItemClicked}" 
          @goto-first="${this.firstPage}"
          @goto-previous="${this.prevPage}"
          @goto-next="${this.nextPage}"
          @goto-last="${this.lastPage}"
          .number=${this.pages.length}
          .currPage=${this.currPage}
        ></pager-list>
      `;
  }
}
customElements.define('pagination-container', PaginationContainer);
