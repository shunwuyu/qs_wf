## Babel 
  Babel是一个通用的多用途JavaScript编译器。通过Babel你可以使用并创建下一代JavaScript, 以及下一代的JavaScript工具。[source](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md#toc-setting-up-babel)
  Babel把用最新标准编写的JavaScript代码向下编译成可以在今天随处可用的版本。 源码到源码的编译，转换+编译.
  > Babel用途
    - 新语法转译
    - 语法扩展 JSX TepeScript
    - 核心模块， 创建下一代JavaScript工具
  1. 安装
    先uninstall
    npm uninstall --global babel-cli

    ```sh
    $ npm install --global babel-cli
    ```
    babel my-file.js   
    babel **.js --out-file compiled.js
    babel **.js -o compiled.js
  
  2. npm scripts
    我们不直接从命令行运行 Babel 了，取而代之我们将把运行命令写在 npm scripts 里，这样可以使用 Babel 的本地版本。
  
  3. babel-register
    引入文件就可以运行Babel, 更好融入您的项目设置
    不适合正式产品环境使用。直接部署用此方法编译的代码不是好的作法。
    布署前预先编译会更好。 不过在构建脚本或其他本地运行的脚本是非常合适的。
  
  4. babel-core

  5. babel-polyfill 
    babel 只转换新的JavaScript句法， 而不转换新的API, 比如Iterator, Generator Set Maps Proxy, Reflect Symbol Promise 不会转码。
    - 如 



