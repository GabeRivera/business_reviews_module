(function reviewsList($, Drupal) {
  Drupal.behaviors.reviewsList = {
    attach(context, settings) {
      $(context).find('#edit-rating').once('reviewsList').each(() => {
          const ratingSelect = document.getElementById('edit-rating');
          const options = ratingSelect.querySelectorAll('option');

      });
    },
  };
}(jQuery, Drupal));

