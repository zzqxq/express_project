const ProductController = require('../controllers/productController')

//引入jwt中间件
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (router) => {
  // 添加商品
  router.post('/product/addProduct',jwtMiddleware, ProductController.addProduct) //需要登录才能添加商品
  // 获取所有商品
  router.get('/product/getAllProducts', ProductController.getAllProducts)
}