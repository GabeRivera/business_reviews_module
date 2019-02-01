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

    $form['api_key'] = [
      '#type' => 'key_select',
      '#title' => $this->t('API Key'),
    ];
    

    return parent::buildForm($form, $form_state);
  }

  /** 
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
      // Retrieve the configuration
       $this->configFactory->getEditable(static::SETTINGS)
      // Set the submitted configuration setting
      ->set('api_key', $form_state->getValue('api_key'))
      ->save();

    parent::submitForm($form, $form_state);
  }
}