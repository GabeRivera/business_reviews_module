import { LitElement, html } from 'lit-element';
import './PageItem.js';

class PaginationContainer extends LitElement {
    static get properties() {
      return { 
        currPage: { type: Number },
        pages: { type: Array },
      };
    }
    
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
        console.log(this.pages[this.currPage]);
      }
      else {
        console.log('youre back at 0');
      }
      
    }

    render(){
      return html`
        <style>
          :host .card {
            padding: 24px;
            border-radius: 2px;
            background: #FFFFFF;
          }
        </style>
        <page-item contents=${JSON.stringify(this.pages[this.currPage])}></page-item>
        <button @click="${this.prevPage}">-</button>
        <button @click="${this.nextPage}">+</button>
      `;
    }
}
customElements.define('pagination-container', PaginationContainer);