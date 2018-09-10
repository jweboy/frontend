#   Eslint
项目中的eslint规范一律使用 eslint-standard,具体用法参考 [官方仓库](https://github.com/standard/eslint-config-standard)，也可在
使用中遇到问题时再去查看。

##  使用
通过vue-cli创建项目时，请选择 eslint-standard 代码规范。

##  standard规范的一些修改
```
    'no-console': 'off',
    'no-debugger': 'off',
    'semi': ['error', 'always'],                // 语句结尾必须加分号
    'no-trailing-spaces': 'off',                // 关闭禁止行为空格检查
    'space-before-function-paren': ['error', {  // 关于函数圆括号之前的空格规则
    'anonymous': 'always',                      //  匿名函数圆括号之前必须有空格
      'named': 'never',                         // 具名函数圆括号之前不需要空格
      'asyncArrow': 'always'                    //  异步箭头函数表达式之前必须有空格
    }],
    'camelcase': 'off',                         // 不强制要求使用驼峰命名法，即忽略该检查
    'indent': 'off',                            // 忽略对缩进的检查
    'vue/no-unused-vars': 'warning'
```
该部分未完，在具体使用中如果遇到问题，经前端小组讨论确定之后可补充进来。
