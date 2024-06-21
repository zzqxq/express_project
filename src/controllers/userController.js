const User = require('../models/User');
const JwtUtils = require('../utils/jwtUtils'); 
const passwordUtils = require('../utils/passwordUtils');


class UserController {
  // 创建用户
  async createUser(req, res) {
    try {
      const { email, password,name } = req.body;
      if (!email || !password || !name) {
        res.send({ code: 400, msg: '参数错误' });
        return;
      }
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.send({ code: 400, msg: '用户已存在' });
        return;
      }
      const encrypted = passwordUtils.encrypt(password);
      const newUser = { email, password: encrypted, name };
      const result = await User.create(newUser);

      res.send({ code: 200, data: result, msg: '创建用户成功' });
    } catch (error) {
      res.send({ code: 500, msg: '服务器错误555' });
    }
  }

  // 获取所有用户
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.send({ code: 200, data: users, msg: '获取所有用户成功' })
    } catch (error) {
      res.send({ code: 500, msg: '服务器错误' });
    }
  }

  // 登录
  async login(req,res){
    try{
      const {email,password} = req.body;
      if(!email || !password){
        res.send({code:400,msg:'参数错误'});
        return;
      }
      const user = await User.findOne({where:{email}});
      if(!user){
        res.send({code:400,msg:'用户不存在'});
        return;
      }
      const isValid = passwordUtils.validate(password,user.password);
      if(!isValid){
        res.send({code:400,msg:'密码错误'});
        return;
      }
      // 生成 token
      const token = JwtUtils.generateToken({id:user.id,email:user.email});
      res.send({code:200,data:{token},msg:'登录成功'});
    } catch (error) {
      res.send({ code: 500, msg: '服务器错误' });
    }
  }
}

module.exports = new UserController();