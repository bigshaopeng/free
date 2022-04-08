import React from 'react';
import { Input, message } from 'antd';
import { style } from 'typestyle';
import { post } from '&/common/ajax';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }
    onSubmit() {
        const { userName, password } = this.state;
        if (!userName) {
            message.info('请输入账号');
            return
        }
        if (!password) {
            message.info('请输入密码');
            return
        }
        const data = {
            userName,
            password
        }
        post('', data).then(res => {
            console.log(res)
        })
    }

    render() {
        const { userName, password } = this.state;
        return <div className={`${sty.loginWrap} back1`}>
            <div className={`${sty.body} border back2`}>
                <div className={`text-center font-weight title-30`}>网上问卷调查系统</div>
                <div className={'flex mgt-20'}>
                    <div style={{ width: '20%', textAlign: 'right' }}>用户名：</div>
                    <Input
                        placeholder="请输入用户名"
                        value={userName}
                        onChange={e => this.setState({ userName: e.target.value })}
                    />
                </div>
                <div className={'flex mgt-20'}>
                    <div style={{ width: '20%', textAlign: 'right' }}>密码：</div>
                    <Input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                </div>
                <div className={'mgt-20 text-center'}>
                    {/* <span onClick={() => this.onSubmit()}>登录</span> */}
                    <button class="ant-btn ant-btn-primary back1" onClick={() => gotoPage('/')}>登录</button>
                </div>
            </div>
        </div >
    }
}
const sty = {
    loginWrap: style({
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: `url(${require('../image/a.png')}) no-repeat center center / cover`,
        background: '#fff',
        padding: '20px'
    }),
    body: style({
        width: 600,
        height: 300,
        // border: '1px solid #ccc',
        padding: '20px',
    })
}

export default LoginView
