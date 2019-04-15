import {
  html,
  render
} from 'lit-html';
import './components/PaginationContainer.js';
import { groupByAmount } from './util/groupByAmount';

(function reviewsList($, Drupal) {
  Drupal.behaviors.reviewsList = {
    attach(context, settings) {
      $(context).find('#reviews-list').once('reviewsList').each(() => {
        const cardList = (list) => html `<pagination-container .currPage=${0} .pages=${list}></pagination-container>`;

        const noresults = () => html `
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-align-center">No comments have been submitted</h3>
                <h5 class="text-align-center">Click above to submit a review!</h5>
            </div>
        </div>
        `;
        console.log(settings.reviews)
        if (settings.reviews.length < 1) {
          render(noresults(), document.getElementById('reviews-list'));
        }
        else {
          const pagedReviews = groupByAmount(settings.reviews, 8);
          render(cardList(pagedReviews), document.getElementById('reviews-list'));
        }
      });
    },
  };
}(jQuery, Drupal));

