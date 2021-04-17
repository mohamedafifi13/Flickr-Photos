/**
 * 
 * @api {GET} /groups/:groupId/pools/photos getPhotos
 * @apiGroup groups-pools
 * @apiVersion  1.0.0
 * 
 * @apiDescription Get a list of pool photos for a given group.
 * 
 * @apiParam  {String} userId This filters the photos to only return photos by that user.
 * @apiParam  {String} [tag] A tag to filter the pool with.(maximum 1 tag)
 * @apiParam  {Number} [page=1] The page of results to return.
 * @apiParam  {Number} [perPage=100] The number of groups per page that can be returned.
 * 
 * @apiSuccess (Success 200) {Object[]} photoList A list containing the photos from a given group.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 *
 * @apiError (Error 401) {String} error The user doesn't have permission to do this action
 * @apiError (Error 401) {Number} statusCode The status code
 *
 *
 * @apiError (Error 404) {String} error Informs the caller of the missing object.
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Group Not Found",
 *        "status_code":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "status_code":401
 *     }
 * 
 */