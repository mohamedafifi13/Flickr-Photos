/**
 * 
 * @api {GET} /groups/:groupId/members getList
 * @apiGroup groups-members
 * @apiVersion  0.1.0
 * 
 * @apiDescription Get a list of the members of a group.
 * 
 *  
 * @apiParam  {String} groupId The group that we want to get the members of.
 * @apiParam  {Number} [memberTypes] Comma separated list of member types. 1: member, 2: moderator, 3:admin.
 * @apiParam  {Number} [perPage=100] Number of members per page.
 * @apiParam  {Number} [page=1] The page of results to return.
 * 
 * 
 * 
 * @apiSuccess (Success 200) {Number} statusCode all the member of the group mentioned
 * @apiSuccess (Success 200) {Object[]} memberList all the member of the group mentioned
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 *@apiError (Error 400) {Number} statusCode The status code
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
 *       "error": "groupNotFound",
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
 * @apiSuccessExample {json} Success-200:
 *    {
 *  "page": "1",
 *  "pages": "1",
 *  "perpage": "100",
 *  "total": "33",
 *  "member": [
 *     {
 *        "nsid": "123456@N01",
 *        "username": "foo",
 *        "membertype": "2"
 *     },
 *     {
 *        "nsid": "118210@N07",
 *        "username": "kewlchops666",
 *        "membertype": "1"
 *     },
 *     {
 *        "nsid": "119377@N07",
 *        "username": "Alpha Shanan",
 *        "membertype": "2"
 *     },
 *     {
 *        "nsid": "67783977@N00",
 *        "username": "fakedunstanp1",
 *        "membertype": "3"
 *     }
 *  ]
 * }
 */