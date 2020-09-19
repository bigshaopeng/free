// 是否是生产环境
const isProd = false;
// 生产环境地址
const prod = '';
// 开发环境地址（包括本地ip调试地址，测试环境地址）
const dev = '';
// 调用接口使用的地址
const serverUrl = isProd ? prod : dev;

export {serverUrl}
