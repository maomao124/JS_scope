/**
 * Project name(项目名称)：JS_scope
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/3
 * Time(创建时间)： 21:24
 * Version(版本): 1.0
 * Description(描述)： JS 局部作用域
 在函数内部声明的变量具有局部作用域，拥有局部作用域的变量也被称为“局部变量”，局部变量只能在其作用域中（函数内部）使用。
 */


function myFun()
{
    var str = "Hello World!";
    document.write(str);    // 输出：Hello World!
}

document.write(str);        // 报错：str is not defined