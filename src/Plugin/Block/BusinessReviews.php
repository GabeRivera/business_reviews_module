<?php

namespace Drupal\business_reviews\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * 
 *
 * @Block(
 *   id = "business_reviews_block",
 *   admin_label = @Translation("Business Reviews")
 * )
 */
class BusinessReviews extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * @var \Drupal\business_reviews\BusinessReviewsClient
   */
  protected $businessReviewsClient;

  /**
   * BusinessReviews constructor.
   *
   * @param array $configuration
   * @param $plugin_id
   * @param $plugin_definition
   * @param $business_reviews_client \Drupal\business_reviews\BusinessReviewsClient
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, $business_reviews_client) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->businessReviewsClient = $business_reviews_client;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('business_reviews_client')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheMaxAge() {
    return 0;
  }

  /**
   * {@inheritdoc}
   */

  public function build() {
    $node = \Drupal::routeMatch()->getParameter('node');
    $api_id = $node->get('field_api_id')->getValue()[0]["value"];
    $business_reviews = $this->businessReviewsClient->getProductReviews($api_id);
    $reviews = [];

    foreach ($business_reviews as $review) {
      $shapedReview = new \StdClass();
      $shapedReview->title = $review['title'];
      $shapedReview->rating = $review['rating']['overall'];
      $shapedReview->dateSubmitted = $review['date_submitted'];
      $shapedReview->content = $review['content'];
      if (isset($review['user'])) {
        $shapedReview->firstName = $review['user']['fname'] || 'NOTHING IN';
        $shapedReview->lastName = $review['user']['lname'] || 'NOTHING IN';
      }
      $reviews[] = $shapedReview;
    }

    return [
      '#theme' => 'reviews_list',
      '#reviews' => $reviews,
      '#parent' => $node,
      '#api_id' => $api_id,
      '#attached' => array(
        'library' => array(
          'business_reviews/reviews_list',
        ),
        'drupalSettings' => array(
          'reviews' => $reviews,
        )
      ),
    ];
  }

}
