/**
 * 
 * @api {get} /urls/userphotos getUserPhotos
 * 
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * @apiDescription Returns the url to a user's photos.
 * 
 * @apiParam  {String} [groupId] The Id of the user to fetch the url for. If omitted, the calling user is assumed.
 * 
 * 
 * @apiSuccess (Success 200) {Object} userPhotosUrl the url to a user's photos.
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * @apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
* @apiError (Error 401) {String} error The user doesn't have permission to do this action
* @apiError (Error 401) {Number} statusCode The status code

 
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
* @apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "groupNotFound",
*        "statusCode":404
*     }
 
* @apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "statusCode":401
*     }

 * 
 * 
 
 * 
 * 
 */