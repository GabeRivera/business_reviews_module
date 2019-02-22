import { LitElement, html } from 'lit-element';
import './PageItem.js';

class PaginationContainer extends LitElement {
    static get properties() {
      return { 
        currPage: { type: Number },
        pages: { type: Array },
      };
    }
    

    render(){
      return html`
        <page-item contents=${JSON.stringify(this.pages)}></page-item>
      `;
    }
}
customElements.define('pagination-container', PaginationContainer);