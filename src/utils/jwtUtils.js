const jwt = require('jsonwebtoken');
// 获取 JWT 密钥和过期时间
const { jwt:{secret,expiresIn} } = require('../../config/index');


class JwtUtils {
  // 生成 JWT
  static generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn });
  }

  // 验证 JWT
  static verifyToken(token) {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return null; // 验证失败返回 null
    }
  }
}

module.exports = JwtUtils;
