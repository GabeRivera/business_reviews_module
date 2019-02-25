import { LitElement, html } from 'lit-element';
import './PageItem.js';
import './PagerList.js';

class PaginationContainer extends LitElement {
    static get properties() {
      return { 
        currPage: { type: Number },
        pages: { type: Array },
      };
    }
    // In the "light dom"
    createRenderRoot() { return this; }
    
    nextPage(e) {
      if (this.currPage < this.pages.length - 1) {
        this.currPage++;
        console.log(this.pages[this.currPage]);
      }
      else {
        console.log('you have hit the end');
      }
    }

    prevPage(e) {
      if (this.currPage > 0) {
        this.currPage--;
      }
      else {
        console.log('youre back at 0');
      }
      
    }

    render(){
      return html`
        <page-item class="row" .contents=${this.pages[this.currPage]}></page-item>
        <button @click="${this.prevPage}">-</button>
        <button @click="${this.nextPage}">+</button>
        <pager-list .number=${this.pages.length}></pager-list>
      `;
    }
}
customElements.define('pagination-container', PaginationContainer);