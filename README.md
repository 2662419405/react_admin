# TS + Hooks 后台管理系统

> 开始制作的时间是从 2020-4-28

自己也发布过几个小型的demo,虽然没人看๑•ૅૄ•๑), 但还是喜欢与大家共同学习进步

<p align="center" style="margin:50px 0;">
    <img src="https://img.shields.io/badge/language-TS%20%7C%20hooks-blue" />
    <img src="https://www.travis-ci.org/2662419405/react_admin.svg?branch=master">
    <img src="https://img.shields.io/badge/version-v1.0-informational" />
    <img src="https://img.shields.io/badge/codecov-25-red" />
    <img src="https://img.shields.io/badge/platform-android%20%20%7C%20PC%20%7C%20ipad-inactive"  />
    <img src="https://img.shields.io/badge/weibo-%40SH-blueviolet"  />
</p>

## 快速预览

[线上](http://hooks.shtodream.cn/)

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgs/tu/20200430112812.jpg"/>

## 项目介绍

使用最新的技术栈制作React后台管理系统: 针对react16的新特性做了练习,里面包含数组可视化,笔记整理等模块,还会不断完善中...

## 快速使用

```yaml
npm install    #安装依赖

npm run start  #启动项目

npm run build  #打包文件
```

## 目录结构

```js
// 项目结构
├─build                               // 打包文件
├─public                              // 默认模板文件
├─src
│  ├─api                              // 请求api文件
│  ├─aassets                          // 静态资源
│      ├─img                          // 公共图片
│      └─styles                       // 公共样式
│  ├─components                       // 组件
│  ├─config                           // 配置自定义图标库,axios的BaseURL等
│  ├─constants                        // 全局变量
│  ├─hooks                            // 自定义hooks
│  ├─layout                           // 布局组件
│  ├─router                           // 路由文件
│  ├─services                         // 接受请求处理文件
│  ├─store                            // 数据中心
│      ├─action                       // 派发的action合集
│      ├─reducer                      // 处理action和state
│      └─constants                    // store的局部变量
│  ├─types                            // 全局类型
│  ├─utils                            // 封装的常用方法
│  ├─views                            // 页面
|  ├─index.tsx                        // 入口文件
|  ├─setupProxy                       // 全局代理
|  └─setupTests                       // 测试文件入口
```

## 核心技术栈

```json
"antd": "^4.1.4",
"axios": "^0.19.2",
"http-proxy-middleware": "^1.0.3",
"node-sass": "^4.14.0",
"react": "^16.13.1",
"react-app-rewired": "^2.1.5",
"react-redux": "^7.2.0",
"react-router-dom": "^5.1.2",
"react-scripts": "3.4.1",
"redux": "^4.0.5",
"redux-thunk": "^2.3.0",
"typescript": "~3.7.2"
```

## 计划

- [ ] jest测试

## Online preview

[Follow me](https://sunhang.top)

---

## License

[MIT](./LICENSE)
