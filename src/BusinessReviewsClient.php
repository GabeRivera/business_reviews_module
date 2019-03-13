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
    $response = $this->client->get("reviews/product/{$id}?apiKey={$this->{'apikey'}}");
    $data = Json::decode($response->getBody());
    return $data;
  }

    /**
   * Get some reviews for product
   *
   * @param int $id
   *
   * @return array
   */
  public function getProductInfo($id) {
    $response = $this->client->get("product/{$id}?apiKey={$this->{'apikey'}}");
    $data = Json::decode($response->getBody());
    return $data;
  }


  /**
   * Submit Review for Producct
   *
   * @param int $id
   *
   * @return array
   */
  public function submitProductReview($id, $payload) {
    $request = $this->client->post("reviews/{$id}?apiKey={$this->{'apikey'}}");
    $response = Json::decode($response->getBody());
    return $response;
  }


}
