const crypto = require('crypto');

class PasswordUtils {
  // 使用 sha256 加密密码，返回加密后的密码
  encrypt(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }

  // 验证密码是否正确
  validate(password, encrypted) {
    return this.encrypt(password) === encrypted;
  }

}


module.exports = new PasswordUtils();

