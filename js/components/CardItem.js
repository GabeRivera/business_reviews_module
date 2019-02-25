import { LitElement, html } from 'lit-element';

class CardItem extends LitElement {
    static get properties() {
      return { 
        item: { type: Array }
      };
    }
    createRenderRoot() { return this; }
    render(){
      return html`
        <div class="col-md-6">
            <div class="card t10-card">
                <div class="card-item card-title">
                    <h3>${this.item.title}</h3>
                    <span class="subtitle">
                    by ${this.item.firstName} ${this.item.lastName} | ${this.item.dateSubmitted}
                    </span>
                </div>
                <div class="card-item card-text">
                    <p>${this.item.content}</p>
                </div>
            </div>
        </div>
      `;
    }
}
customElements.define('card-item', CardItem);