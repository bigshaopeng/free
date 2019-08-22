<?php

$x = 1;
$y = 2;

// global
function myTest()
{
    global $x, $y;
    echo $x + $y;
}
// $GLOBALS
function myGlobal()
{
    $GLOBALS['x'] = 3;
    echo $GLOBALS['x'] + $GLOBALS['y'];
}
echo $x + $y;

// 常量
define("NAME", 'zsp'); // 第三个参数bool，大小写是否mi gan，默认mi gan，默认falses
echo NAME;
/* 
print & echo
print 有返回值，echo 没有返回值
print & echo 
print 返回值一直是1， echo 速度更快
print & echo
prin || 
print & echo
print & echo
print & echo
print & echo
print & echo
print & echo
print & echo

var_dump 返回数据类型和值
var_dump 返回数据类型和值
var_dump 返回数据类型和值
var_dump 返回数据类型和值
var_dump 返回数据类型和值
var_dump 返回数据类型和值
var_dump 返回数据类型和值
*/

// 算术运算符 + - * / % 取反 . （加减乘除模，取反并置）
// 赋值运算符 = += -+ *= /= %= .=

/*
sort rsort
asort ksort
arsort krsort

*/
$txt1 = 'txt1';
$txt2 = 'txt2';
$len = strlen($txt1);
echo $txt1 . $txt2;
