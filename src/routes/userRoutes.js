const UserController = require('../controllers/userController');

//导出路由
module.exports = (router) => {
  // 创建用户
  router.post('/user/createUser', UserController.createUser);
  // 获取所有用户
  router.get('/user/getAllUsers', UserController.getAllUsers);
  // 登录
  router.post('/user/login', UserController.login);
}