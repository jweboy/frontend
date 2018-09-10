(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{58:function(a,s,t){"use strict";t.r(s);var r=t(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"html-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-css","aria-hidden":"true"}},[a._v("#")]),a._v(" HTML/CSS")]),a._v(" "),t("h2",{attrs:{id:"html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html","aria-hidden":"true"}},[a._v("#")]),a._v(" HTML")]),a._v(" "),t("h3",{attrs:{id:"语义化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语义化","aria-hidden":"true"}},[a._v("#")]),a._v(" 语义化")]),a._v(" "),t("p",[a._v("请了解前端语义化的概念和意义，在实际开发中，尽可能做到使用合适的标签做该做的事，使代码语义化，以便于浏览器SEO和团队合作。")]),a._v(" "),t("h3",{attrs:{id:"结构、表现、行为分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构、表现、行为分离","aria-hidden":"true"}},[a._v("#")]),a._v(" 结构、表现、行为分离")]),a._v(" "),t("p",[a._v("尽量在文档和模板中只包含结构内容HTML，而将所有的表现移入样式表中，将所有的行为移入脚本中。")]),a._v(" "),t("ul",[t("li",[a._v("不使用行内样式")]),a._v(" "),t("li",[a._v("不使用内嵌样式")]),a._v(" "),t("li",[a._v("样式问题应该使用CSS解决，而不要为了某种特定样式使用特定标签，这将违犯语义化的原则。")])]),a._v(" "),t("p",[a._v("总之，HTML应该永远只关注页面结构与展示内容信息，不应该在HTML中做除此之外的其它事情。样式表现应该交给CSS，并且最好放在单独的文件中，通过外链的形式\n引入到HTML，而有关页面操作、交互的JS代码也应该放在单独的js文件中，通过页面引入的方式使用。而不是为了方便在HTML结构中内嵌CSS和JS代码，这样利于团队合作\n与后期维护，同时也使得代码简洁整齐。")]),a._v(" "),t("h3",{attrs:{id:"标签（tag）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签（tag）","aria-hidden":"true"}},[a._v("#")]),a._v(" 标签（tag）")]),a._v(" "),t("p",[a._v("标签使用kebab-case写法，即全部由小写字母组成，多个字母以中划线“-”分割；")]),a._v(" "),t("h3",{attrs:{id:"属性（atribute）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性（atribute）","aria-hidden":"true"}},[a._v("#")]),a._v(" 属性（atribute）")]),a._v(" "),t("ul",[t("li",[a._v("属性名使用kebab-case写法，属性值使用双引号，双引号内部禁止使用无用的空格；")]),a._v(" "),t("li",[a._v("自定义属性名要语义化，必须使用kebab-case写法；")]),a._v(" "),t("li",[a._v("属性名和属性值中间的“=”两边禁止使用空格。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\x3c!-- errro --\x3e\n<ElCard></ElCard>\n\n\x3c!-- correct --\x3e\n<el-card></el-card>\n\n\n\x3c!-- errro --\x3e\n<img dataImg = 'src'>图片</img>\n\n\x3c!-- correct --\x3e\n<img data-img=\"src\">图片</img>\n")])])]),t("h3",{attrs:{id:"alt属性不能为空"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alt属性不能为空","aria-hidden":"true"}},[a._v("#")]),a._v(" alt属性不能为空")]),a._v(" "),t("p",[t("code",[a._v("<img>")]),a._v("标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。\n假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：")]),a._v(" "),t("ul",[t("li",[a._v("网速太慢；")]),a._v(" "),t("li",[a._v("src 属性中的错误；")]),a._v(" "),t("li",[a._v("浏览器禁用图像；")]),a._v(" "),t("li",[a._v("用户使用的是屏幕阅读器。")])]),a._v(" "),t("p",[a._v("从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容")]),a._v(" "),t("h2",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[a._v("#")]),a._v(" CSS")]),a._v(" "),t("h3",{attrs:{id:"空格使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空格使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 空格使用")]),a._v(" "),t("p",[a._v("CSS选择器和大括号之间必须空一个空格。")]),a._v(" "),t("h3",{attrs:{id:"css预处理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css预处理器","aria-hidden":"true"}},[a._v("#")]),a._v(" CSS预处理器")]),a._v(" "),t("p",[a._v("css预处理器一律使用scss。")]),a._v(" "),t("h3",{attrs:{id:"文件目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件目录")]),a._v(" "),t("p",[t("code",[a._v("src")]),a._v("目录下的"),t("code",[a._v("styles")]),a._v("目录用来存放项目的css文件，具体划分如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("styles/\n|- base.scss            ------ 样式reset，解决浏览器兼容问题\n|- common.scss          ------ 全局公用样式类文件\n|- iconfont.css         ------ 字体文件\n|- variable.scss        ------ 全局scss变量文件\n|- mixin.scss           ------ 全局scss mixin文件\n")])])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);