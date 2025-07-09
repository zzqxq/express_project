const express = require('express'); // 引入 express 库
const sequelize = require('./src/models/index'); // 引入数据库实例
const model = require('./src/models/model'); // 引入所有模型, 以便同步数据库
const routes = require('./src/routes/index'); // 引入路由
const config = require('./config/index'); // 引入配置文件

const bodyParser = require('body-parser'); // 引入 body-parser 库  git 练习 模拟冲突 修改同一处代码22222


const app = express(); // 创建 express 实例
const port = config.app.port; // 设置端口号


// 中间件
app.use(bodyParser.json()); // 解析请求体
app.use(bodyParser.urlencoded({ extended: true })); // 解析请求体

// 使用路由
routes(app);

// 自定义错误处理器
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    // 捕获JWT认证错误，并返回自定义错误信息
    res.status(401).send({ code: 401, msg: '登陆信息失效，请重新登陆' });
  } else {
    // 其他错误交给下一个错误处理器
    next(err);
  }
});


// 同步数据库并启动服务器
sequelize.sync({ force: false }).then(() => { // 注意：'force: true' 会删除并重新创建表，请谨慎使用
  app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
  });
}).catch(err => {
  console.error('无法连接到数据库：', err);
});

