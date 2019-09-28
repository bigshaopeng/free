package main

import (
    "fmt"
)

/*
我是多行注释
我是多行主食

*/ 
// var age int = 9

func main() {
    // fmt.Println("Hello, World!" + "zsp", age)

    // -----------============   data-type
    // 布尔型  数字类型 字符串类型  派生类型

    //  ---------=============   语言变量
    // _ 只写变量，并不能取值，因为go语言必须使用所有被声明的变量 但有时你并不需要使用从一个函数得到的所有返回值
    // 并行赋值 a, b = fun() 从函数返回两个值
    // var 一般声明全局变量 := 只能出现在函数体内
    // var zsp int 
    // var zsp1, zsp2 bool = true, false
    // fmt.Println(zsp,zsp1,zsp2)

    // zsp3 := 2
    // fmt.Println(zsp3)

    _, e, f := numbers()
    fmt.Println(e,f)
    
    // 条件语句
    if e < 8 {
        fmt.Println("true")
    } else if e < 20 {
        fmt.Println("<20")
    } else {
        fmt.Println("<else")
    }

    switch e {
    case 10: 
    fmt.Println("10")
    case 20, 21, 22: 
    fmt.Println("20")
    default: fmt.Println("eles")
    }

    // 和while一样
    for e > 5 {
        e = e - 1
        fmt.Println(e)
    }

    // 和js for 一样
    for i := 0; i < 10; i++ {
        fmt.Println(i)
    }

    // 和 for in 一样
    list := []int{1,2,3,5,7,9}
    for i, x := range list {
        fmt.Println(i, x)
    }

    // map
    // countryCapitalMap := map[string]string{"France": "Paris", "Italy": "Rome", "Japan": "Tokyo", "India": "New delhi"}
    var Map map[string]string = make(map[string]string);
    // Map = make(map[string]string)
    Map ["a"] = "aa"
    Map ["b"] = "bb"
    Map ["c"] = "cc"
    Map ["d"] = "dd"
    for k := range Map{
        fmt.Println(k, Map[k])
    }

    // Map["b"] 返回2个值，value 和 布尔(是否存在) 不存在value 为nil
    capital, ok := Map["b"]

    if (ok){
        fmt.Println("ok", ok, capital)
    } else {
        fmt.Println("err", ok, capital)
    }
}

// func numbers()(int,int,string){
//     a , b , c := 1 , 2 , "str"
//     return a,b,c
//   }

func numbers()(int, int, string){
    a , b , c := 10 , 10 , "str"
    return a,b,c
}
