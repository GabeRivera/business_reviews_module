<?php

namespace Drupal\business_reviews;

use Drupal\Component\Serialization\Json;

class BusinessReviewsClient {

  /**
   * @var \GuzzleHttp\Client
   */
  protected $client;

   /**
   * @var api key for reviews api
   */
  protected $apikey;

  /**
   * BusinessReviewsClient constructor.
   *
   * @param $http_client_factory \Drupal\Core\Http\ClientFactory
   */
  public function __construct($http_client_factory) {
    $this->client = $http_client_factory->fromOptions([
      'base_uri' => 'https://reviews.bluekeel.com/api/1.0.0/',
    ]);
    $this->apikey = \Drupal::service('key.repository')->getKey('test_api_key')->getKeyValue();
  }

  /**
   * Get some reviews for product
   *
   * @param int $amount
   *
   * @return array
   */
  public function getProductReviews($id) {
    // This Endpoint of preapproved doesn't work yet
    // $response = $this->client->get("reviews/approved/product/{$id}?apiKey={$this->{'apikey'}}");
    $response = $this->client->get("reviews/product/{$id}?apiKey={$this->{'apikey'}}");
    $data = Json::decode($response->getBody());

    return $data;
  }

    /**
   * Get some reviews for product
   *
   * @param int $amount
   *
   * @return array
   */
  public function getProductInfo($id) {
    $response = $this->client->get("product/{$id}?apiKey={$this->{'apikey'}}");
    $data = Json::decode($response->getBody());

    return $data;
  }

}
