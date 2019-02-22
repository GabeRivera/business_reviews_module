import {
  html,
  render
} from 'lit-html';
import './components/PaginationContainer.js';

(function reviewsList($, Drupal) {
  Drupal.behaviors.reviewsList = {
    attach(context, settings) {
      $(context).find('#reviews-list').once('reviewsList').each(() => {
        
        const groupOfReviews = [...settings.reviews, ...settings.reviews, ...settings.reviews, ...settings.reviews];
        const reviewFucked = groupOfReviews.map(r => r.title = 'woop woop');
        const reviews = [groupOfReviews, groupOfReviews];
        const stringifiedReviews = JSON.stringify(reviews);
        const cardList = (list) => html `
            <pagination-container
              currPage="0"
              pages=${stringifiedReviews}
            ></pagination-container>
          `;
        render(cardList(reviews), document.getElementById('reviews-list'));
      });
    },
  };
}(jQuery, Drupal));
