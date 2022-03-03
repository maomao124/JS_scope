/**
 * Project name(项目名称)：JS_scope
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 21:23
 * Version(版本): 1.0
 * Description(描述)： JS 全局作用域
 全局作用域是指变量可以在当前脚本的任意位置访问，拥有全局作用域的变量也被称为“全局变量”，一般情况下拥有以下特征的变量具有全局作用域：
 最外层的函数和在最外层函数外面定义的变量拥有全局作用域；
 所有未定义直接赋值的变量拥有全局作用域；
 所有 window 对象的属性拥有全局作用域，例如 window.name、window.location、window.top 等。
 */

var str = "Hello World!";

function myFun()
{
    document.write(str);
}

myFun();
document.write(str);

var str = "JavaScript";
document.write(str);                    // 输出：JavaScript
document.write(window.str);             // 输出：JavaScript
document.write(str === window.str);     // 输出：true