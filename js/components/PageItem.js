import { LitElement, html } from 'lit-element';
import './CardItem.js';

class PageItem extends LitElement {
    static get properties() {
      return { 
        contents: { type: Array }
      };
    }

    render(){
      return html`
        ${this.contents.map(i => {
          return html`<card-item item=${JSON.stringify(i)}></card-item>`})}
      `;
    }
}
customElements.define('page-item', PageItem);