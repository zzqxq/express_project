const userRoutes = require('./userRoutes'); // 引入 userRoutes
const productRoutes = require('./productRoutes'); // 引入 productRoutes

module.exports = (app) => {
  userRoutes(app);
  productRoutes(app);
};