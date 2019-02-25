import { LitElement, html } from 'lit-element';
import './CardItem.js';

class PageItem extends LitElement {
    static get properties() {
      return { 
        contents: { type: Array }
      };
    }
    createRenderRoot() { return this; }
    render(){
      console.log(this.contents);
      return html`
        ${this.contents.map(i => {
          return html`<card-item .item=${i}></card-item>`})
        };
      `;
    }
}
customElements.define('page-item', PageItem);