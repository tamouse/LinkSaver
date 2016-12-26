/**
 * Taken from https://frontendmasters.com/courses/api-design-nodejs/#v=j9jmkkdo58&p=1.0000
 *
 * By convention, each CRUD controller will implement the following methods:
 *
 * - index - to get all the items for this controller
 * - show - to get one item
 * - create - create a new item
 * - update - to update an existing item
 * - delete - to delete an existing itme
 *
 * In addition, the controller implements a `params` method that handles when
 * an ID is given in the url `/:id`.
 *
 * This will be called in the router definition for the module, such as:
 *
 * var router = require('express').Router;
 * var controller = require('./myController');
 * require('../../utils/createRoutes')(controller, router);
 * module.exports = router;
 */

module.exports = function (controller, router) {
  router.param('id', controller.params);

  router.route('/')
    .get(controller.index)
    .post(controller.create);

  router.route('/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.delete);
};

