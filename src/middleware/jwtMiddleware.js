const { expressjwt: expressJwt } = require('express-jwt');


// 获取 JWT 密钥和过期时间
const { jwt:{secret} } = require('../../config/index');

// JWT 中间件
module.exports = expressJwt({
  secret,
  algorithms: ['HS256'],
  requestProperty: 'user' // 默认属性名为 'user'
})