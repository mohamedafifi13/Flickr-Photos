/**
 * 
  * @api {get} /places/:placeId/resolvePlaceId resolvePlaceId
 * 
 * @apiGroup places
 * @apiVersion  0.1.0
 * 
 * @apiDescription Find Flickr Places information by Place ID.
This method has been deprecated. It won't be removed but you should use flickr.places.getInfo instead.
 * 
 * @apiParam  {String} placeId A Flickr Places ID
 * 
 *@apiSuccess (Success 200) {Object} placesInfo Places information
 *@apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * @apiError (Error 400) {Number} statusCode The status code
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *
 *
 * @apiError (Error 401) {String} error The client must authenticate itself to get the requested response.( client unknown to server)
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 408) {String} error RequestTimeout the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.
 * @apiError (Error 408) {Number} statusCode The status code
 * 
 * @apiError (Error 411) {String} error Length required the server refuses to accept the request without a defined Content-Length header.
 * @apiError (Error 411) {Number} statusCode The status code 
 * 
 * @apiError (Error 417) {String} error Expectation Failed the expectation given in the request's Expect header could not be met.
 * @apiError (Error 417) {Number} statusCode The status code
 * 
 * @apiError (Error 429) {String} error Too Many Requests he user has sent too many requests in a given amount of time ("rate limiting").
 * @apiError (Error 429) {Number} statusCode The status code
 * 
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code

 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "placeNotFound",
*        "statusCode":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 
 * 
 * 
 * 
   *@apiSuccessExample {json} Success-Response: 
*   {
*   "placeId": "kH8dLOubBZRvX_YZ",
*   "latitude": "37.779",
*   "longitude": "-122.420",
*   "placeUrl": "/United+States/California/San+Francisco",
*   "placeType": "locality",
*   "locality": {
*      "placeId": "kH8dLOubBZRvX_YZ",
*      "latitude": "37.779",
*      "longitude": "-122.420",
*      "placeUrl": "/United+States/California/San+Francisco",
*      "text": "San Francisco"
*   },
*   "county": {
*      "placeId": "hCca8XSYA5nn0X1Sfw",
*      "latitude": "37.759",
*      "longitude": "-122.435",
*      "placeUrl": "/hCca8XSYA5nn0X1Sfw",
*      "text": "San Francisco"
*   },
*   "region": {
*      "placeId": "SVrAMtCbAphCLAtP",

*      "latitude": "37.271",
*      "longitude": "-119.270",
*      "placeUrl": "/United+States/California",
*      "text": "California"
*   },
*   "country": {
*      "placeId": "4KO02SibApitvSBieQ",
*      "latitude": "48.890",
*      "longitude": "-116.982",
*      "placeUrl": "/United+States",
*      "text": "United States"
*   }
*}
 * 
 * 
 * 
 */