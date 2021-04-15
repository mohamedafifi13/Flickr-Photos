/**
 * 
 * @api {DELETE} /favorites/:photo_id removeFavorite
 * 
 * @apiGroup favorites
 * @apiVersion  1.0.0
 * 
 * @apiDescription Removes a photo from a user's favorites list.
 * @apiParam  {String} api_key Your API application key
 * 
 * @apiParam {String} photo_id The id of the photo to remove from the user's favorites.
 * 
 * 
 *@apiSuccess (Success 410) {Number} statusCode The status code
 *@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "status_code":404
*     }
 
@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }
*
* 
* 
* 
* 
*/