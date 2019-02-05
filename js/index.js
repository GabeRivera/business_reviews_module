(function reviewsList($, Drupal) {
    Drupal.behaviors.reviewsList = {
      attach(context, settings) {
        $(context).find('#reviews-list').once('reviewsList').each(() => {
            const app = new Vue({
                el: '#reviews-list',
                template: `
                <div class="row">
                    <div v-for="review in reviews" class="col-md-6">
                        <div class="card t10-card">
                        <div class="card-item card-title">
                            <h3>{{ review.title }}</h3>
                            <span class="subtitle">
                            by {{ review.firstName }} {{ review.lastName }} | {{ review.dateSubmitted }}
                            </span>
                        </div>
                        <div class="card-item card-text">
                            <p>{{ review.content }}</p>
                        </div>
                        </div>
                    </div>
                </div>
                `,
                data: {
                  reviews: [...settings.reviews, ...settings.reviews, ...settings.reviews, ...settings.reviews],
                }
              });
        });
      },
    };
  }(jQuery, Drupal));
  