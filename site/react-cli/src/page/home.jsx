import React from 'react';
import {style} from 'typestyle';

class HomeView extends React.Component {
    render() {
        return <div className={sty.wrap}>
            <div className={sty.left}>
                <div className={sty.bigTitle}>电力测温平台</div>
            </div>
            <div className={sty.right}>
                <div className={sty.nav}></div>
            </div>
        </div>
    }
}

const sty = {
    wrap: style({
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        display: 'flex'
    }),
    left: style({
        width: 208,
        background: '#ccc'
    }),
    right: style({
        width: 'calc(100% - 208px)',
        background: 'orange'
    }),
    bigTitle: style({
        height: '48px',
        fontSize: '24px',
        fontWeight: 500,
    }),
    nav: style({
        height: '48px',
        borderBottom: '1px solid #001529'
    })
}

export default HomeView
