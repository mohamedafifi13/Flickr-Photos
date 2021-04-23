/**
 * 
 * @api {POST} /photos/:photoId/people/:userId addPerson
 * @apiGroup photos-people
 * @apiVersion  0.1.0
 * 
 * @apiDescription adds a person to a photo, possibly adding a box around him to include location of the individual in the image.
 * 
 * 
 *  
 * @apiParam  {String} photoId The id of the photo to add a person to.
 * @apiParam  {String} userId The id of the user to add to the photo
 * @apiParam  {Number} [personX] the left-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [personY] the top-most pixel co-ordinate of the box around the person
 * @apiParam  {Number} [boxWidth] the width (in pixel) of the box around the person
 * @apiParam  {Number} [boxHeight] the height (in pixel)of the box around the person
 * 
 * @apiSuccess (Success 200) {Number} statusCode The status code
 * 
 * 
 * @apiError (Error 400) {String} error The server could not understand the request due to invalid syntax.
 * @apiError (Error 400) {Number} statusCode The status code
 * 
 * @apiError (Error 403) {String} error The client does not have access rights to the content. (the client's identity is known to the server)
 * @apiError (Error 403) {Number} statusCode The status code.
 * 
 * @apiError (Error 404) {String} error The server can not find the requested resource. 
 * @apiError (Error 404) {Number} statusCode The status code
 *
 * @apiError (Error 500) {String} error The server has encountered a situation it doesn't know how to handle.
 * @apiError (Error 500) {Number} statusCode The status code
 */
