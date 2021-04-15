/**
 * 
 * @api {get} /urls/getGroup/:group_id getGroup
 * @apiName urls
 * @apiGroup urls
 * @apiVersion  1.0.0
 * 
 * 
 * 
 * @apiParam  {String} api_key Your API application key
 * @apiParam  {String} group_id The NSID of the group to fetch the url for.
 * 
 * 
 * @apiSuccess (Success 200) {Object} memberList all the member of the group mentioned
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * 
 * @apiError (Error 400) {Number} statusCode The status code
* @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 
 
*@apiError (Error 401) {String} error The user doesn't have permission to do this action
*@apiError (Error 401) {Number} statusCode The status code

 
*@apiError (Error 404) {String} error Informs the caller of the missing object.
*@apiError (Error 404) {Number} statusCode The status code
 
*@apiErrorExample {json} Error-404
*     HTTP/1.1 404 Not Found
*     {
*       "error": "photoNotFound",
*        "status_code":404
*     }
 
*@apiErrorExample {json} Error-401
*     HTTP/1.1 401 Unauthorized
*     {
*       "error": "Unauthorized User",
*        "status_code":401
*     }

 * 
 * 
 * @apiParamExample  {type} Request-Example:
 * {
 *     group_id : "12"
 * }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
 * {
 *     property : value
 * }
 * 
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */