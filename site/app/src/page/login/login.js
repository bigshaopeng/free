import React from 'react';
import { Input, Button } from "antd";
import { style } from "typestyle";

const sty = {
    app: style({
        background: 'orange',
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
        marginTop: '-150px',
    }),
}
export class Login extends React.Component {
    render() {
        return <div className={sty.app}>
            <div className={sty.body}>
                <Input
                    placeholder="请输入用户名"
                />
                <br />
                <br />
                <Input
                    placeholder="请输入密码"
                />
                <br />
                <br />
                <Button type='primary'>登录</Button>
            </div>
        </div>
    }
}