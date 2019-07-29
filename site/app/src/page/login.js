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
    tologout = () => {
        $.ajax({
            type: 'post',
            url: `http://localhost:8888/post_login`,
            success: (data) => {
                // this.props.
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
    componentDidMount() {
    }
    render() {
        return <div className={sty.app}>
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
                <Button type='primary' onClick={this.tologin}>登录</Button>
                <Link to='/home'>首页</Link>
            </div>
        </div>
    }
}