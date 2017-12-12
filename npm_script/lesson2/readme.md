# lint

> [source](https://github.com/wangshijun/automated-workflow-with-npm-script/blob/02-run-multiple-npm-scripts/package.json)

*  node_modules 下的命令行环境
  ``` sh
    ./node_modules/.bin/eslint --init
  ```

*  stylelint

[source](http://www.zcfy.cc/article/how-to-lint-your-sass-css-properly-with-stylelint-mdash-creative-nightly-1160.html)

  > 配置.stylelintrc.js

    [source](https://github.com/wangshijun/automated-workflow-with-npm-script/blob/02-run-multiple-npm-scripts/.stylelintrc.js)
    transition 两个合起来. hover 写一个

*  jsonlint 不需要配置文件

*  markdownlint
> *取代序号， * 下不再用-

* npm-run-all 一次同时执行多个命令

```sh
  npm-run-all --parallel lint:* mocha
```

--parallel 并行执行 lint:* 模糊匹配

