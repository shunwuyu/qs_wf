- 直接使用node index.js (console)不会用babel编译
- 预先设置babel-register
  ```sh
    $ npm install --save-dev babel-register
  ```
  添加register.js
  将Babel 注册到Node的模块系统中开始编译
  ```sh
  node register.js
  ```
