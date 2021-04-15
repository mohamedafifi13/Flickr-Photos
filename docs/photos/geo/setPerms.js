/**
 * 
 * @api {POST} photos/geo/setPerms/is_public/:is_public/is_contact/:is_contact/is_friend/:is_friend/is_family/:is_family/photo_id/:photo_id setPerms
 * @apiName photos
 * @apiGroup photos.geo
 * @apiVersion  1.0.0
 * @apiDescription Set the permission for who may view the geo data associated with a photo.
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {Boolean} is_public 1 to set viewing permissions for the photo's location data to public, 0 to set it to private.
 * @apiParam  {Boolean} is_contact 1 to set viewing permissions for the photo's location data to contacts, 0 to set it to private.
 * @apiParam  {Boolean} is_friend 1 to set viewing permissions for the photo's location data to friends, 0 to set it to private.
 * @apiParam  {Boolean} is_family 1 to set viewing permissions for the photo's location data to family, 0 to set it to private.
 * @apiParam  {String} photo_id The id of the photo to get permissions for.
 * 
     * @apiSuccess (Success 200) {Number} statusCode The status code 
 * 
 * 
 * 
 * 
 *  
@apiError (Error 400) {Number} statusCode The status code
*@apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
@apiError (Error 404) {String} error Informs the caller of the missing object.
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



 * @apiParamExample  {type} Request-Example:
 * {
 *     property : value
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 * 
 * 
 */