'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// app - 应用的 Application 实例。
module.exports = app => {
  const { router, controller } = app;
  router.get('/getAll', controller.home.findAll);
  router.get('/addOne', controller.home.addOne);
  router.get('/deleteOne', controller.home.deleteOne);
  router.get('/completeOne', controller.home.completeOne);
  router.get('/deleteSelected', controller.home.deleteSelected);
  router.get('/selectAll', controller.home.selectAll);
  router.get('/selectOne', controller.home.selectOne);
  router.get('/cancelSelectOne', controller.home.cancelSelectOne);
  router.get('/cancelSelectAll', controller.home.cancelSelectAll);
};
