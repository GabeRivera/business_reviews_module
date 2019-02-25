import { LitElement, html } from 'lit-element';

class PagerItem extends LitElement {
    static get properties() {
      return { 
        number: { type: Number },
        currPage: { type: Number }
      };
    }
    createRenderRoot() { return this; }

    pageSelected(){
        const event = new CustomEvent('page-selected',{ 
            detail: { number: this.number - 1},
            bubbles: true, 
            composed: true });
        this.dispatchEvent(event);
    }
    render(){
      return html`
        ${this.currPage === this.number - 1 ? 
          html`<li class="pager-item item-current" @click="${this.pageSelected}"><span>${this.number}</span></li>`:
          html`<li class="pager-item" @click="${this.pageSelected}"><span>${this.number}</span></li>`}
        `;
    }
  }
customElements.define('pager-item', PagerItem);