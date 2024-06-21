const Product = require('../models/model').Product;


class ProductController {
  // 新增商品
  async addProduct(req, res) {
    try {
      const { name, price } = req.body;
      const product = await Product.create({
        name,
        price
      });

      res.send({ code: 200, data: product, msg: '新增商品成功' });
    } catch (error) {
      res.send({ code: 500, msg: error });
    }
  }

  // 获取所有商品
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.send({ code: 200, data: products, msg: '获取所有商品成功' });
    } catch (error) {
      res.send({ code: 500, msg: '服务器错误' });
    }
  }
}

module.exports = new ProductController();