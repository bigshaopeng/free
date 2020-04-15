import React from 'react';
import { style } from 'typestyle';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import $ from 'jquery';

const sty = {
    app: style({
        background: '#f4f4f4',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    body: style({
        width: '400px',
        height: '400px',
        border: '1px solid rgba(135, 208, 104, 1)',
        textAlign: 'center',
    }),
}
// consumer: 'rgb(255, 191, 0)',
//     supplier: 'rgb(135, 208, 104)',
//     manufacturer: '#ff7067',
//     dealer: '#1890ff',
export class Login extends React.Component {
    ajaxTologin = () => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('post', 'http://localhost:8888/post_login', true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send('fname=Henry&lname=Ford')
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                document.getElementById('express').innerHTML = xmlhttp.responseText;
            }
        }
    }
    toLogin = () => {
        $.ajax({
            type: 'post',
            url: `http://localhost:8888/post_login`,
            data: {
                username: 'zsp1',
                password: '111',
            },
            success: (data) => {
                // this.props.
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
    toRegist = () => {
        $.ajax({
            type: 'post',
            url: `http://localhost:8888/post_regist`,
            data: {
                username: 'zsp1',
                password: '111',
            },
            success: (data) => {
                // this.props.
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
    render() {
        return <div className={sty.app}>
            <div id='express'></div>
            <div className={sty.body}>
                <div>登录</div>

                <Input
                    placeholder='请输入用户名'
                />
                <br />
                <Input
                    placeholder='请输入密码'
                />
                <br />
                <Button type='primary' onClick={this.toRegist}>注册</Button>
                <br />
                <Button type='primary' onClick={this.ajaxTologin}>登录</Button>
                <br />
                <Link to='/home'>首页</Link>
            </div>
        </div>
    }
}