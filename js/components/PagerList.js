import {
  LitElement,
  html
} from 'lit-element';
import './PagerItem.js';

class PagerList extends LitElement {
  static get properties() {
    return {
      number: {
        type: Number
      },
      currPage: {
        type: Number
      }
    };
  }
  createRenderRoot() {
    return this;
  }

  goToFirstPage(event) {
    const event2 = new CustomEvent('goto-first', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event2);

  }

  goToLastPage() {
    const event = new CustomEvent('goto-last', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  goToNextPage() {
    const event = new CustomEvent('goto-next', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  goToPreviousPage() {
    const event = new CustomEvent('goto-previous', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    const pagerItemTemplates = [];
    for (let i = 0; i < this.number; i++) {
      pagerItemTemplates.push(html `<pager-item .currPage=${this.currPage} .number=${i + 1}></pager-item>`);
    }
    return html `
        <div class="pager">
            <ul class="pager-items">
            <li class="pager-item item-first" @click="${this.goToFirstPage}" ><span>‹‹</span></li>
            <li class="pager-item item-previous" @click="${this.goToPreviousPage}" ><span>‹</span></li>
            ${pagerItemTemplates}
            <li class="pager-item item-next" @click="${this.goToNextPage}" ><span>›</span></li>
            <li class="pager-item item-last" @click="${this.goToLastPage}"><span>››</span></li>
            </ul>
        </div>
      `;
  }
}
customElements.define('pager-list', PagerList);
