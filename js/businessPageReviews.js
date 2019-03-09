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

        const twisted = groupOfReviews.map(x => {
          return Object.assign({}, x);
        });
        const twisted2 = groupOfReviews.map(x => {
          return Object.assign({}, x);
        });
        const twisted3 = groupOfReviews.map(x => {
          return Object.assign({}, x);
        });

        const pagedReviews = [groupOfReviews, twisted, twisted2, twisted3];



        const cardList = (list) => html `<pagination-container .currPage=${0} .pages=${list}></pagination-container>`;
        render(cardList(pagedReviews), document.getElementById('reviews-list'));


      });
    },
  };
}(jQuery, Drupal));
