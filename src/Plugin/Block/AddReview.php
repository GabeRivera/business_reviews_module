<?php
namespace Drupal\business_reviews\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormInterface;

class AddReviewBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $node = \Drupal::routeMatch()->getParameter('node');
    $api_id = $node->get('field_api_id')->getValue()[0]["value"];
    
    $form = \Drupal::formBuilder()->getForm('\Drupal\business_reviews\Form\AddReview');
    return $form;
   }

}