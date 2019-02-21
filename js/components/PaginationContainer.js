import { LitElement, html } from 'lit-element';

class PaginationContainer extends LitElement {
    static get properties() {
      return { 
        currPage: { type: Number },
        pages: { type: Array },
      };
    }

    render(){
      console.log(this);
      return html`
        <pre>${this.pages}</pre>
        <div>${this.currPage}</div>
      `;
    }
}
customElements.define('pagination-container', PaginationContainer);