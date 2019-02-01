<?php 

namespace Drupal\business_reviews\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure business_reviews settings for this site.
 */
class SettingsForm extends ConfigFormBase {
    /** @var string Config settings */
  const SETTINGS = 'business_reviews.settings';

  /** 
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'business_reviews_admin_settings';
  }

  /** 
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      static::SETTINGS,
    ];
  }

  /** 
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config(static::SETTINGS);

    $form['business_reviews_thing'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Things'),
      '#default_value' => $config->get('business_reviews_thing'),
    );  

    $form['other_things'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Other things'),
      '#default_value' => $config->get('other_things'),
    );  

    return parent::buildForm($form, $form_state);
  }

  /** 
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
      // Retrieve the configuration
       $this->configFactory->getEditable(static::SETTINGS)
      // Set the submitted configuration setting
      ->set('business_reviews_thing', $form_state->getValue('business_reviews_thing'))
      // You can set multiple configurations at once by making
      // multiple calls to set()
      ->set('other_things', $form_state->getValue('other_things'))
      ->save();

    parent::submitForm($form, $form_state);
  }
}