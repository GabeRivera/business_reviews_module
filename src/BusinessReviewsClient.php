<?php

namespace Drupal\business_reviews;

use Drupal\Component\Serialization\Json;

class BusinessReviewsClient {

  /**
   * @var \GuzzleHttp\Client
   */
  protected $client;

  /**
   * BusinessReviewsClient constructor.
   *
   * @param $http_client_factory \Drupal\Core\Http\ClientFactory
   */
  public function __construct($http_client_factory) {
    $this->client = $http_client_factory->fromOptions([
      'base_uri' => 'https://cat-fact.herokuapp.com/',
    ]);
  }

  /**
   * Get some random cat facts.
   *
   * @param int $amount
   *
   * @return array
   */
  public function random($amount = 1) {
    $response = $this->client->get('facts/random', [
      'query' => [
        'amount' => $amount
      ]
    ]);

    $data = Json::decode($response->getBody());

    if ($amount == 1) {
      $data = [$data];
    }

    return $data;
  }

}
