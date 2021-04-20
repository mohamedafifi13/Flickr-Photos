/**
 * 
 * @api {GET} /groups/:groupId/pools/photo/:photoId/context getContext
 * @apiGroup groups-pools
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get the two photos before and after a given photo.
 * 
 * @apiParam  {String} photoId The id of the photo.
 * @apiParam  {String} groupId The id of the group where the photo exists.
 * 
 * @apiSuccess (Success 200) {Object} prevPhoto The photo after a given photo in the pool.(might not be returned if the current photo is first the in the pool)
 * @apiSuccess (Success 200) {Object} nextPhoto The photo before a given photo in the pool.(might not be returned if the current photo is the last in the pool)
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
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 *
 * @apiErrorExample {json} Error-404:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Group Not Found",
 *        "statusCode":404
 *     }
 *
 * @apiErrorExample {json} Error-401:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Unauthorized User",
 *        "statusCode":401
 *     }
 * @apiSuccessExample {json} Success-Response:
 *    { 
 *      "statusCode": 200,
 *      "prevPhoto": {"id": "13nug931b", "title": "The King in the North!!!", "imagePath": "/path/to/photo.png"},
 *      "nextPhoto": {"id": "fj12fnhj", "title": "Nine naynneeee !!!!", "imagePath": "/path/to/photo2.jpg"}
 *     }
 * 
 */