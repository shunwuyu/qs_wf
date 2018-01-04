- ./node_modules/.bin/eslint --init 初始化配置

- index.js 检测起来
  > 添加npm scripts
    eslint eslint --fix
    内置了自动修复
    ```sh
      npm run lint:js:fix
    ```
    const name = 'maomao'
    改成了const name = "maomao";
    自动改了引号和分号 

- 传参 
  向eslint:js 传递就行
  ```sh
    npm run lint:js -- --fix
  ```
  向脚本传递参数 --fix
  实际执行 eslint *.js "--fix"
  mocha --watch 参数传递
  测试驱动开发
  ```sh
    npm run mocha -- --watch
  ```

- 注释




    
