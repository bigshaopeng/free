#!/bin/bash
# function

# myFun(){
#     return 111
# }
# myFuns(){
#     return 222
# }
# myFun
# resMyfun=$?
# myFuns
# resMyfuns=$?

# echo $[resMyfun+resMyfuns]
# echo `expr $resMyfun + $resMyfuns`
# echo $(($resMyfun+$resMyfuns))
# echo $((${resMyfun}+${resMyfuns}))

# funWithReturn(){
#     echo "这个函数会对输入的两个数字进行相加运算..."
#     echo "输入第一个数字: "
#     read aNum
#     echo "输入第二个数字: "
#     read anotherNum
#     echo "两个数字分别为 $aNum 和 $anotherNum !"
#     return $(($aNum+$anotherNum))
# }
# funWithReturn
# echo "输入的两个数字之和为 $? !"

a=2
b=3
paramFun(){
    echo $1
    echo $2
    echo $3
    echo "参数个数$#"
    echo "字符串*输出$*"
    echo "字符串@输出$@"
}

paramFun $a $b