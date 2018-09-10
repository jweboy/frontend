(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{61:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"其它"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它","aria-hidden":"true"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),s("h2",{attrs:{id:"关于缩进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于缩进","aria-hidden":"true"}},[a._v("#")]),a._v(" 关于缩进")]),a._v(" "),s("p",[a._v("HTML、JavaScript、Vue template模板一律采用2个缩进，缩进风格为tab缩进")]),a._v(" "),s("h2",{attrs:{id:"代码行宽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码行宽","aria-hidden":"true"}},[a._v("#")]),a._v(" 代码行宽")]),a._v(" "),s("p",[a._v("每行代码建议为80-120列，超出换行，以保证代码可读性。")]),a._v(" "),s("h2",{attrs:{id:"公共文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公共文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 公共文件")]),a._v(" "),s("p",[a._v("全局公共文件为全局的基本配置文件（如axios全局封装文件）、库文件、插件文件、webpack配置文件等。这类文件不要随意改动，如果需要改动时：")]),a._v(" "),s("ul",[s("li",[a._v("请先告知项目前端负责人，评估改动可行性；")]),a._v(" "),s("li",[a._v("项目前端负责人评估是否改动，必要时前端小组讨论决定；")]),a._v(" "),s("li",[a._v("如果改动这类文件，必须写上清晰完善的注释；")]),a._v(" "),s("li",[a._v("改动之后必须及时通知到参与项目的前端开发人员；")]),a._v(" "),s("li",[a._v("特殊需求先尝试其它解决方案，尽量不要因特殊需求而随意改动全局的、通用的配置型文件和插件、库的源码等文件。")])]),a._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("p",[a._v("eslint/babel/postcss/目标浏览器等配置文件必须写在各自单独的配置文件里面，禁止写在package.json文件中。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// eslint对应的配置文件\n.eslintrc.js\n\n// babel对应的配置文件\nbabel.config.js\n\n// postcss对应的配置文件\npostcss.config.js\n\n// 目标浏览器对应的配置文件\n.browserslistrc\n")])])]),s("h2",{attrs:{id:"gitignore文件（重要）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore文件（重要）","aria-hidden":"true"}},[a._v("#")]),a._v(" .gitignore文件（重要）")]),a._v(" "),s("p",[a._v("在任何项目中，当你第一次提交 github/gitlab 前必须检查"),s("code",[a._v(".gitignore")]),a._v("文件，确保一些跟项目无关的文件或文件夹提交到git仓库。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".DS_Store                               --- mac系统文件\nnode_modules                            --- 依赖文件\n/dist                                   --- 构建目录\n\n# local env files                       --- 本地环境文件\n.env.local\n.env.*.local\n\n# Log files                             --- npm/yarn的日志文件\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# Editor directories and files          --- 本地编辑器文件\n.idea\n.vscode\n*.suo\n*.ntvs*\n*.njsproj\n*.sln\n*.sw*\n")])])]),s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),s("ol",[s("li",[a._v("根级目录")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("project/\n|- public           --- index.html和不需要webpack处理的静态资源目录\n|- server           --- 服务器端开发目录（如果在数据mock阶段使用node.js开发api,可在该目录进行）\n|- src              --- 前端开发目录\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("src目录")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("src/\n|- api              --- api接口封装目录\n|- assets           --- 静态资源文件目录（font/css/image/js）\n|- components       --- 公用基础组件目录，可根据项目复杂度灵活调整内部目录文件的组织\n|- directive        --- 公共指令目录\n|- filters          --- 公共过滤器目录\n|- lang             --- 国际化目录\n|- mixins           --- 全局混入目录\n|- mock             --- 数据mock目录\n|- plugins          --- 插件目录\n|- router           --- VueRouter目录\n|- store            --- Vuex目录\n|- utils            --- 全局公用工具库目录\n|- views            --- 路由组件及容器组件目录\n")])])]),s("h2",{attrs:{id:"性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能优化")]),a._v(" "),s("ul",[s("li",[a._v("请使用函数节流和函数防抖来对input/scroll/resize等事件进行优化；")]),a._v(" "),s("li",[a._v("路由组件使用按需加载，减少首屏加载时间。")])])])}],!1,null,null,null);n.options.__file="README.md";t.default=n.exports}}]);