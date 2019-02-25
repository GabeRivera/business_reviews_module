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
          return Object.assign({}, x, {
            title: 'test1'
          });
        });
        const twisted2 = groupOfReviews.map(x => {
          return Object.assign({}, x, {
            title: 'testaroooo'
          });
        });
        const twisted3 = groupOfReviews.map(x => {
          return Object.assign({}, x, {
            title: 'woopwoop'
          });
        });
       
        const pagedReviews = [groupOfReviews, twisted, twisted2, twisted3];
        
        // const paginationControls = {
        //   currPage: 0, 
        //   pages: pagedReviews
        // }

        // const nextPage = {
        //     handleEvent(e) { 
        //       if (paginationControls.currPage < paginationControls.pages.length - 1) {
        //         paginationControls.currPage++;
        //         renderPaginatedReviews();
        //       }
        //       else {
        //         console.log('you have hit the end');
        //       }
        //     },
        // };

        // const prevPage = {
        //     handleEvent(e) {
        //       if (paginationControls.currPage > 0) {
        //         paginationControls.currPage--;
        //         renderPaginatedReviews();
        //       }
        //       else {
        //         console.log('youre back at 0');
        //       }
        //     }
        // }

        // const renderFirst = {
        //   handleEvent(e) {
        //     paginationControls.currPage = 0;
        //     //render(cardList(paginationControls.pages[0]), document.getElementById('reviews-list'));
        //   }
        // }

        // const renderLast = {
        //   handleEvent(e) {
        //     paginationControls.currPage = paginationControls.pages.length - 1;
        //     //render(cardList(paginationControls.pages[paginationControls.pages.length - 1]), document.getElementById('reviews-list'));
        //   }
        // }

        // const renderSelf = {
        //   handleEvent(e) {
        //     const pageNum = parseInt(e.target.innerText) - 1;
        //     paginationControls.currPage = pageNum;
        //     //render(cardList(paginationControls.pages[pageNum]), document.getElementById('reviews-list'));

        //   }
        // }

        function renderPaginatedReviews() {
          render(cardList(pagedReviews), document.getElementById('reviews-list'));
        }

        // const cardItem = (item) => html`
        //     <div class="col-md-6">
        //         <div class="card t10-card">
        //           <div class="card-item card-title">
        //               <h3>${item.title}</h3>
        //               <span class="subtitle">
        //               by ${item.firstName} ${item.lastName} | ${item.dateSubmitted}
        //               </span>
        //           </div>
        //           <div class="card-item card-text">
        //               <p>${item.content}</p>
        //           </div>
        //         </div>
        //     </div>
        //   `;

        //   // <reviews-list .allListItems=${reviewItemsArray} .currPage=${currPage}></reviews-list>
        //   // <pager-component .currPage=${currPage} @on-page-click=${(clickedNumber) => {currPage = clickedNumber}}></pager-component>

          // const cardList = (list) => html`
          //   ${list.map(item => html`${cardItem(item)}`)}
          //   ${pagerItemList(pagerItemTemplates)}
          // `;

           const cardList = (list) => html`
            <pagination-container .currPage=${0} .pages=${list}></pagination-container>
          `;


          
        //   // function getPagerItemClasses(number) {
        //   //   return { 
        //   //     "pager-item": true,
        //   //     "item-current": paginationControls.currPage === number - 1,
        //   //   };
        //   // }
          
        //   const pagerItem = (number) => html`<li @click=${renderSelf} class="pager-item"><span>${number}</span></li>`;
        //   const pagerItemList = (pagerItemTemplates) => html`
        //       <div class="pager">
        //         <ul class="pager-items">
        //           <li @click=${renderFirst} class="pager-item item-first"><span>‹‹</span></li>
        //           <li @click=${prevPage} class="pager-item item-previous"><span>‹</span></li>
        //           ${pagerItemTemplates}
        //           <li @click=${nextPage} class="pager-item item-next"><span>›</span></li>
        //           <li @click=${renderLast} class="pager-item item-last"><span>››</span></li>
        //         </ul>
        //       </div>
        //     `;

        //   const pagerItemTemplates = [];
        //   for (let i = 0; i < paginationControls.pages.length; i++) {
        //     pagerItemTemplates.push(html`${pagerItem(JSON.stringify(i + 1))}`);
        //   }
          renderPaginatedReviews();

      });
    },
  };
}(jQuery, Drupal));