import {
  html,
  render
} from 'lit-html';

(function reviewsList($, Drupal) {
  Drupal.behaviors.reviewsList = {
    attach(context, settings) {
      $(context).find('#reviews-list').once('reviewsList').each(() => {
        const groupOfReviews = [...settings.reviews, ...settings.reviews, ...settings.reviews, ...settings.reviews];

        const twisted = groupOfReviews.map(x => {
          return Object.assign({}, x, {
            title: 'fuck'
          });
        });
       
        const pagedReviews = [groupOfReviews, twisted, groupOfReviews, twisted];
        
        const paginationControls = {
          currPage: 0, 
          pages: pagedReviews
        }
        const nextPage = {
            handleEvent(e) { 
              if (paginationControls.currPage < paginationControls.pages.length - 1) {
                paginationControls.currPage++;
                renderPaginatedReviews();
              }
              else {
                console.log('you have hit the end');
              }
            },
        };
        const prevPage = {
            handleEvent(e) {
              if (paginationControls.currPage > 0) {
                paginationControls.currPage--;
                renderPaginatedReviews();
              }
              else {
                console.log('youre back at 0');
              }
            }
        }

        function renderPaginatedReviews() {
          render(cardList(paginationControls.pages[paginationControls.currPage]), document.getElementById('reviews-list'));
        }
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

          const cardList = (list) => html`
            ${list.map(item => html`${cardItem(item)}`)}
            <button @click=${prevPage}>-</button>
            <button @click=${nextPage}>+</button>
          `;
          renderPaginatedReviews();
      });
    },
  };
}(jQuery, Drupal));
