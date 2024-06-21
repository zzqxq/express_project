// config.js
require('dotenv').config(); // 加载 .env 文件中的环境变量

const config = {
    app: {
        port: process.env.PORT || 3000, // 如果没有配置端口号，则使用 3000 端口
        env: process.env.NODE_ENV || 'development', // 如果没有配置环境变量，则使用开发环境
    },
    db: {
        host: process.env.DB_HOST || 'localhost', // 如果没有配置数据库地址，则使用本地数据库
        port: process.env.DB_PORT || 3306, // 如果没有配置数据库端口号，则使用 3306 端口
        user: process.env.DB_USER || 'root',    // 如果没有配置数据库用户名，则使用 root 用户
        password: process.env.DB_PASSWORD || '',    // 如果没有配置数据库密码，则为空
        database: process.env.DB_NAME || 'test',    // 如果没有配置数据库名称，则使用 test 数据库
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'zzq',    // 如果没有配置 JWT 密钥，则使用默认值
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',  // 如果没有配置 JWT 过期时间，则默认为 1 小时
    },
    oss: {
        accessKeyId: process.env.OSS_ACCESS_KEY_ID || 'your accessKeyId',
        accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET || 'your access',
        bucket: process.env.OSS_BUCKET || 'your bucket',
        region: process.env.OSS_REGION || 'your region',
    },
    // 其他配置项
};

module.exports = config;
