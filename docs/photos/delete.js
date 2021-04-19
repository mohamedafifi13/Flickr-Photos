/**
 *
 * @api {DELETE} /photos/:photoId deletePhoto
 * @apiDescription Delete a photo from flickr.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {String} photoId The id of the photo to be deleted
 *
 * @apiExample Example usage:
 * curl -i http://localhost/photos/314
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * @apiError (Error 404) {String} error The photo isn't found
 * @apiError (Error 404) {Number} statusCode The status code
 * @apiError (Error 401) {String} error The user doesn't have persmission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "photoId" : "dfhioart23"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 Gone
 * {
 *      "statusCode":200
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotoNotFound",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 *
 *
 */
