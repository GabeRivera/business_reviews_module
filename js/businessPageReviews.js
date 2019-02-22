import {html, render} from 'lit-html';
import './components/PaginationContainer.js';

(function reviewsList($, Drupal) {
  Drupal.behaviors.reviewsList = {
    attach(context, settings) {
      $(context).find('#reviews-list').once('reviewsList').each(() => {

        const reviews = [...settings.reviews, ...settings.reviews, ...settings.reviews, ...settings.reviews];

        const cardItem = (item) => html`
            <div class="col-md-6">
                <div class="card t10-card">
                  <div class="card-item card-title">
                      <h3>${item.title}</h3>
                      <span class="subtitle">
                      by ${item.firstName} ${item.lastName} | ${item.dateSubmitted}
                      </span>
                  </div>
                  <div class="card-item card-text">
                      <p>${item.content}</p>
                  </div>
                </div>
            </div>
            `;
          const stringifiedReviews = JSON.stringify(reviews);
          const cardList = (list) => html`
            <pagination-container
              currPage="0"
              pages=${stringifiedReviews}
            ></pagination-container>
            ${list.map(item => html`${cardItem(item)}`)}
          `;

          render(cardList(reviews), document.getElementById('reviews-list'));
      });
    },
  };
}(jQuery, Drupal));