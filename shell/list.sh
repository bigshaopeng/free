#!/bin/bash
list=(a b c d)
echo ${list[2]}
echo ${list[*]}
echo ${list[@]}
echo ${#list[*]}
echo ${#list[@]}