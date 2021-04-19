/**
 *
 * @api {GET} /photos/recentlyUpdated getRecentlyUpdated
 * @apiDescription Return a list of your photos that have been recently created or which have been recently modified.
 * @apiGroup photos
 * @apiVersion  0.1.0
 *
 *
 * @apiParam  {Date} [minDate] The date after which the modification occurred
 *
 * @apiSuccess (Success 200) {Number} statusCode The status code of the request
 * @apiSuccess (Success 200) {Object[]} photos The photos that have been recently modified
 * @apiError (Error 404) {String} error There are no photos found
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     "minDate" : "1-1-2020"
 * }
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *     "statusCode" : 200,
 *      "photos":[{
 *              "title":"Waterfall",
 *              "uploadDate":"1-2-2020",
 *              "imagePath":"www.example.com/doasf",
 *              "isPublic":true,
 *              "description" :"This is the description",
 *              "views":123,
 *              "captureDate":"1-1-2020",
 *              "secret":"dfjio324",
 *              "photoId":"dsphnfio2"
 *              },{...},...]
 * }
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PhotosNotFound",
 *        "statusCode":404
 *     }
 *
 */
