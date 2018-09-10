# 其它

## 关于缩进
HTML、JavaScript、Vue template模板一律采用2个缩进，缩进风格为tab缩进

##  代码行宽
每行代码建议为80-120列，超出换行，以保证代码可读性。

##  公共文件
全局公共文件为全局的基本配置文件（如axios全局封装文件）、库文件、插件文件、webpack配置文件等。这类文件不要随意改动，如果需要改动时：
*   请先告知项目前端负责人，评估改动可行性；
*   项目前端负责人评估是否改动，必要时前端小组讨论决定；
*   如果改动这类文件，必须写上清晰完善的注释；
*   改动之后必须及时通知到参与项目的前端开发人员；
*   特殊需求先尝试其它解决方案，尽量不要因特殊需求而随意改动全局的、通用的配置型文件和插件、库的源码等文件。

##  配置文件
eslint/babel/postcss/目标浏览器等配置文件必须写在各自单独的配置文件里面，禁止写在package.json文件中。
```
// eslint对应的配置文件
.eslintrc.js

// babel对应的配置文件
babel.config.js

// postcss对应的配置文件
postcss.config.js

// 目标浏览器对应的配置文件
.browserslistrc
```

##  .gitignore文件（重要）
在任何项目中，当你第一次提交 github/gitlab 前必须检查`.gitignore`文件，确保一些跟项目无关的文件或文件夹提交到git仓库。
```
.DS_Store                               --- mac系统文件
node_modules                            --- 依赖文件
/dist                                   --- 构建目录

# local env files                       --- 本地环境文件
.env.local
.env.*.local

# Log files                             --- npm/yarn的日志文件
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files          --- 本地编辑器文件
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```

##  目录结构
1.  根级目录
```
project/
|- public           --- index.html和不需要webpack处理的静态资源目录
|- server           --- 服务器端开发目录（如果在数据mock阶段使用node.js开发api,可在该目录进行）
|- src              --- 前端开发目录
```
2.  src目录
```
src/
|- api              --- api接口封装目录
|- assets           --- 静态资源文件目录（font/css/image/js）
|- components       --- 公用基础组件目录，可根据项目复杂度灵活调整内部目录文件的组织
|- directive        --- 公共指令目录
|- filters          --- 公共过滤器目录
|- lang             --- 国际化目录
|- mixins           --- 全局混入目录
|- mock             --- 数据mock目录
|- plugins          --- 插件目录
|- router           --- VueRouter目录
|- store            --- Vuex目录
|- utils            --- 全局公用工具库目录
|- views            --- 路由组件及容器组件目录
```


##  性能优化
*   请使用函数节流和函数防抖来对input/scroll/resize等事件进行优化；
*   路由组件使用按需加载，减少首屏加载时间。

