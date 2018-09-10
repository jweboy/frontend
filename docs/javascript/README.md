# JavaScript
## 命名规范
### 驼峰命名法
Pascal Case 大驼峰命名法，所有单词首字母大写，如：
```
BreadCrumb,TimeSelect,MessageBox
```
Camel Case 小驼峰命名法，第一个单词首字母小写，其余单词首字母大写，如：
```
breadCrumb,timeSelect,messageBox
```
JavaScript中的标识符如没有特殊说明，一般采用小驼峰命名法。



### 变量

* **命名规则：** 名词形式

* **命名方式：**

  * 普通变量：小驼峰命名法；
  * 私有变量：下划线+单词的命名方式，如：`this._name = 'Javascript';`；
  * 常量：常量全部大写，多个单词以下划线链接，如：`const ERROR_CODE = 1;`；

### 函数

* **命名方式：** 小驼峰命名法

* **命名规则：** 动词 + 名词，即采用动词作为前缀，常见的动词前缀如下：

|动词|含义|返回值|
|:-------|:------|:-----|
|can|判断是否可执行某个动作（权限）|返回一个布尔值。true:可执行；false: 不可执行|
|has|判断是否含有某个值|返回一个布尔值。true:含有此值；false: 不含有此值|
|is|判断是否为某个值|返回一个布尔值。true:为某个值；false: 不为某个值|
|get|获取某个值|返回一个非布尔值|
|set|设置某个值|无返回值、返回是否设置成功或返回链式对象|

### 构造函数和类

* **命名方式：** 大驼峰命名法

* **命名规则：** 名词形式

::: danger
除了字符串中可以使用中文外，其他地方一律禁止使用中文标识符，尤其是对象的属性名（包括数字）
:::

## 变量声明与初始化
* 常量用必须采用const关键字来声明，并且变量标识符要全部大写；
* 普通变量使用let关键字声明，一般情况下不允许使用var关键字；
* 声明变量的时候必须初始化，如果声明的时候没有初始化值，则如下：
```
  // 基本数据类型初始化
  let a = '';

  // 引用类型初始化
  let obj = null;
```

## 注释
### 单行注释
单行注释（双斜线 //）用来注释单行内容，可以单独一行，也可以跟在代码后面。单行注释和注释内容之间必须空一个空格，当跟在代码后面时，双斜线前面必须和代码空一个空格，如：
```
// 调用setTitle方法，设置document.title
setTitle('注释');

setTitle('注释'); // 调用setTitle方法，设置document.title

// setTitle('注释');
```

### 多行注释
* 需要多行注释时必须使用多行注释，禁止使用多个单行注释的方式；
* 若/* */在同一行时，推荐使用单行注释；
* 多行注释的‘*’号和注释内容之间必须空一个空格。
```
/*
 * 调用setTime方法来设置系统时间
 * setTime();
 */
```

### 函数注释
函数注释是多行注释的一种，但包括特殊的注释要求，如下：
```
/*
 * 函数说明
 * @关键字
 */
```
常用关键字有：

|注释名|语法|含义|示例|
|:-------|:------|:-----|:-----|
|@param|@param 参数名 {参数类型} 描述信息|描述参数的信息| @param name {String} 传入名称|
|@return|@return {返回类型} 描述信息|描述返回值的信息| @return {Boolean} true:可执行;false:不可执行|
|@author|@author 作者信息 [附属信息：如邮箱、日期]|描述此函数作者的信息| @author 张三 2015/07/21|
|@version|@version XX.XX.XX|描述此函数的版本号| @version 1.0.3|
|@example|@example 示例代码|| @example setTitle('测试')|
更多用法，请参考 [javadoc(百度百科)](https://baike.baidu.com/item/javadoc)

## 字符串
字符串必须使用单引号

##  空行
为了提高代码可读性，请在代码片段之间合理添加空行（1个空行）；

##  分号
语句末尾必须加分号，否则eslint报错。
*   return语句必须加分号；
*   function关键字声明的函数闭合大括号后面不用加分号，但函数表达式声明的函数后面必须加分号；
```
function getFullName(user) {
    let { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

var getFullName = function(user) {
    let { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
};
```
*   import/export语句后面必须加分号。

更多用法请参考 eslint-standard


