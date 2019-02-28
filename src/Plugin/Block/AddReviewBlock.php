<?php

namespace Drupal\business_reviews\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'AddReviewBlock' block.
 *
 * @Block(
 *  id = "add_review_block",
 *  admin_label = @Translation("Add review block"),
 * )
 */
class AddReviewBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\business_reviews\BusinessReviewsClient definition.
   *
   * @var \Drupal\business_reviews\BusinessReviewsClient
   */
  protected $businessReviewsClient;
  /**
   * Constructs a new AddReviewBlock object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param string $plugin_definition
   *   The plugin implementation definition.
   */
  public function __construct(
    array $configuration,
    $plugin_id,
    $plugin_definition
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }
  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition
    );
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $form = \Drupal::formBuilder()->getForm('\Drupal\business_reviews\Form\AddReview');
    return $form;
    
  }

}
