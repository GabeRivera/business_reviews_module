(function ($, Drupal) {
    Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {
            // Using once() with more complexity.
            $(context).once('myBehavior').each(function () {
                console.log(settings);
            });
        }
    };
})(jQuery, Drupal);