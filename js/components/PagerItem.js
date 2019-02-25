import { LitElement, html } from 'lit-element';

class PagerItem extends LitElement {
    static get properties() {
      return { 
        number: { type: Number }
      };
    }
    createRenderRoot() { return this; }

    pageSelected(){
        const event = new CustomEvent('page-selected',{ 
            detail: { message: 'a page was selected.' },
            bubbles: true, 
            composed: true });
        this.dispatchEvent(event);
        console.log(event);
    }
    render(){
      return html`
        <li class="pager-item" @click="${this.pageSelected}"><span>${this.number}</span></li>
      `;
    }
}
customElements.define('pager-item', PagerItem);