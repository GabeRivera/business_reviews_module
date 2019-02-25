import { LitElement, html } from 'lit-element';
import './PagerItem.js';

class PagerList extends LitElement {
    static get properties() {
      return { 
        number: { type: Number }
      };
    }
    createRenderRoot() { return this; }

    pageItemClicked(){
        const event = new CustomEvent('page-item-clicked');
        this.dispatchEvent(event);
        console.log(event);
    }

    render(){
        const pagerItemTemplates = [];
        for (let i = 0; i < this.number; i++) {
         pagerItemTemplates.push(html`<pager-item @on-page-selected=${this.pageItemClicked} .number=${i + 1}></pager-item>`);
        }
      return html`
        <div class="pager">
            <ul class="pager-items">
            <li class="pager-item item-first"><span>‹‹</span></li>
            <li class="pager-item item-previous"><span>‹</span></li>
            ${pagerItemTemplates}
            <li class="pager-item item-next"><span>›</span></li>
            <li class="pager-item item-last"><span>››</span></li>
            </ul>
        </div>
      `;
    }
}
customElements.define('pager-list', PagerList);