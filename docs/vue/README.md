#   Vue
关于Vue的开发规范参考了官方的[风格指南](https://cn.vuejs.org/v2/style-guide/)，更多规范再次没有列出来，但强烈建议大家详细阅读官方
的开发指南，在实际开发中尽可能的遵循官方风格指南。

##  template
*   组件名必须采用kebab-case写法；
*   `props`写法同HTML中attribute的写法，当props过长时，请换行并注意缩进（2个缩进）；
*   组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

##  directive
*   v-bind、v-on等有简写形式的，一律采用简写形式，尽量保持代码简洁统一；
*   使用v-for指令时，必须提供key。
*   避免v-for和v-if用在一起，[详见](https://cn.vuejs.org/v2/style-guide/index.html#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81)

##  props定义
*   props定义必须尽可能详细，至少需指出其数据类型。如果是非必需，必须同时给出默认值，防止程序出错；
*   在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

##  关于key的使用
*   v-for指令中必须提供key值，并且不能以值为中文的属性作为key；
*   如果一组 v-if + v-else 的元素类型相同，必须使用 key (比如两个 `<div>` 元素)。

    默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现意料之外的副作用。

##  生命周期钩子
*   声明周期钩子中如果有大量代码，建议封装到methods选项中的方法里面，保持生命周期钩子的简洁，清晰，同时应该写清注释。
*   `mounted`中如果给window对象绑定了事件，必须要在`beforeDestory`钩子中取消该事件的绑定。

##  隐性的父子通信（谨慎使用）
**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 this.$parent 能够简化两个深度耦合的组件。

问题在于，这种做法在很多简单的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。

##  关于DOM操作
不提倡直接进行DOM操作，包括引入JQuery等包含大量DOM操作的库，而是改以数据驱动的思想来设计程序代码。如果在特殊情况下必须进行DOM操作，
请使用`this.$refs`来获取DOM节点，而非`document.getElementById`的方式。

##  组件样式
在单文件组件中，除了根级组件App和布局组件之外，其它所有组件的样式都应该有作用域scope，尽量避免因覆盖UI框架默认样式的需要而取消scope
作用域，因为这样做可能会导致切换组件时发生样式混乱，且一旦发生难以调试。

##  元素选择器
禁止在css中使用元素选择器。

##  私有属性名
在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。[详见](https://cn.vuejs.org/v2/style-guide/index.html#%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7%E5%90%8D-%E5%BF%85%E8%A6%81)

##  基础组件的命名
应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。
```
// error
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue

// correct
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

##  单文件组件的命名
单文件组件的文件名（即components目录下的文件夹及文件命名）统一采用PascalCase的命名方式，即大驼峰命名法。

##  组件/实例的选项的顺序
组件/实例的选项应该有统一的顺序。
下面为遵守官方推荐的顺序：
1.  副作用 (触发组件外的影响)
    *   `el`
2.  全局感知 (要求组件以外的知识)
    *   `name`
    *   `parent`
3.  组件类型 (更改组件的类型)
    *   `functional`
4.  模板修改器 (改变模板的编译方式)
    *   `delimiters`
    *   `comments`
5.  模板依赖 (模板内使用的资源)
    *   `components`
    *   `directives`
    *   `filters`
6.  组合 (向选项里合并属性)
    *   `extends`
    *   `mixins`
7.  接口 (组件的接口)
    *   `inheritAttrs`
    *   `model`
    *   `props` / `propsData`
8.  本地状态 (本地的响应式属性)
    *   `data`
    *   `computed`
9.  事件 (通过响应式事件触发的回调)
    *    `watch`
    *   生命周期钩子 (按照它们被调用的顺序)
        *   `beforeCreate`
        *   `created`
        *   `beforeMount`
        *   `mounted`
        *   `beforeUpdate`
        *   `updated`
        *   `activated`
        *   `deactivated`
        *   `beforeDestroy`
        *   `destroyed`
10. 非响应式的属性 (不依赖响应系统的实例属性)
    *   `methods`
11. 渲染 (组件输出的声明式描述)
    *   `template` / `render`
    *   `renderError`
