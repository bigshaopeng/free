import React from 'react';
import { style } from 'typestyle';
import { Link } from 'react-router-dom';

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
export class Home extends React.Component {
    render() {
        return <div className={sty.app}>
            <div className={sty.body}>
                <div>首页</div>
                <Link to='/login'>登录</Link>
                <Link to='/logout'>退出</Link>
            </div>
        </div>
    }
}