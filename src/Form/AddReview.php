<?php

namespace Drupal\business_reviews\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements an example form.
 */
class AddReview extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'add_review_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['first_name'] = array(
        '#type' => 'textfield',
        '#title' => t('first name'),
        '#required' => TRUE,
      );

    $form['last_name'] = array(
        '#type' => 'textfield',
        '#title' => t('last name'),
        '#required' => TRUE,
      );
    
    $form['email'] = array(
        '#type' => 'email',
        '#title' => t('email address'),
        '#required' => TRUE,
    );

    $form['state'] = array(
        '#type' => 'select',
        '#title' => t('state'),
        '#required' => TRUE,
        '#options' => [
            '1' => $this->t('Alabama'),
            '2' => $this->t('Alaska'),
            '3' => $this->t('American Samoa'),
            '4' => $this->t('Arizona'),
            '5' => $this->t('Arkansas'),
            '6' => $this->t('California'),
            '7' => $this->t('Colorado'),
            '8' => $this->t('Connecticut'),
            '9' => $this->t('Delaware'),
            '10' => $this->t('District of Columbia'),
            '11' => $this->t('Florida'),
            '12' => $this->t('Georgia'),
            '13' => $this->t('Guam'),
            '14' => $this->t('Hawaii'),
            '15' => $this->t('Idaho'),
            '16' => $this->t('Illinois'),
            '17' => $this->t('Indiana'),
            '18' => $this->t('Iowa'),
            '19' => $this->t('Kansas'),
            '20' => $this->t('Kentucky'),
            '21' => $this->t('Louisiana'),
            '22' => $this->t('Maine'),
            '23' => $this->t('Maryland'),
            '24' => $this->t('Massachusetts'),
            '25' => $this->t('Michigan'),
            '26' => $this->t('Minnesota'),
            '27' => $this->t('Mississippi'),
            '28' => $this->t('Missouri'),
            '29' => $this->t('Montana'),
            '30' => $this->t('Nebraska'),
            '31' => $this->t('Nevada'),
            '32' => $this->t('New Hampshire'),
            '33' => $this->t('New Jersey'),
            '34' => $this->t('New Mexico'),
            '35' => $this->t('New York'),
            '36' => $this->t('North Carolina'),
            '37' => $this->t('North Dakota'),
            '38' => $this->t('Northern Marianas Islands'),
            '39' => $this->t('Ohio'),
            '40' => $this->t('Oklahoma'),
            '41' => $this->t('Oregon'),
            '42' => $this->t('Pennsylvania'),
            '43' => $this->t('Puerto Rico'),
            '44' => $this->t('Rhode Island'),
            '45' => $this->t('South Carolina'),
            '46' => $this->t('South Dakota'),
            '47' => $this->t('Tennessee'),
            '48' => $this->t('Texas'),
            '49' => $this->t('Utah'),
            '50' => $this->t('Vermont'),
            '51' => $this->t('Virginia'),
            '52' => $this->t('Virgin Islands'),
            '53' => $this->t('Washington'),
            '54' => $this->t('West Virginia'),
            '55' => $this->t('Wisconsin'),
            '56' => $this->t('Wyoming'),
        ],
    );
    
    $form['zip_code'] = array(
        '#type' => 'textfield',
        '#title' => t('zip code'),
        '#required' => TRUE,
      );

    $form['title'] = array(
        '#type' => 'textfield',
        '#title' => t('review title'),
        '#required' => TRUE,
    );

    $form['content'] = array(
        '#type' => 'textarea',
        '#title' => t('description'),
        '#required' => TRUE,
    );

    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save'),
      '#button_type' => 'primary',
    ];

    return $form;

  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if (strlen($form_state->getValue('phone_number')) < 3) {
      $form_state->setErrorByName('phone_number', $this->t('The phone number is too short. Please enter a full phone number.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    drupal_set_message($this->t('Your phone number is @number', ['@number' => $form_state->getValue('phone_number')]));
  }

}