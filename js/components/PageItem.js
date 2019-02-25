import {
  LitElement,
  html
} from 'lit-element';
import './CardItem.js';

class PageItem extends LitElement {
  static get properties() {
    return {
      contents: {
        type: Array
      }
    };
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html `
        ${this.contents.map(i => {
          return html`<card-item class="col-md-6" .item=${i}></card-item>`})
        };
      `;
  }
}
customElements.define('page-item', PageItem);
