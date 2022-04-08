import React from 'react';
import ShouYeView from './shou-ye'
import JaoShiView from './jiao-shi'
import XueShengView from './xue-sheng'
import WenJuanView from './wen-juan'
import { style } from 'typestyle';
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;

class NavView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: '1'
        }
    }
    componentDidMount() {
        this.setState({
            selectedKey: getKey('nav') || '1'
        })
    }
    setSelectedKey(key) {
        this.setState({
            selectedKey: key
        })
    }
    render() {
        const { selectedKey } = this.state
        return <div className={sty.wrap}>
            <div className={sty.left}>
                <div className={sty.bigTitle}>网上问卷调查系统</div>
                <Menu mode="inline" selectedKeys={[selectedKey]}>
                    <Menu.Item key="1" onClick={() => this.setSelectedKey('1')}>首页</Menu.Item>
                    <Menu.Item key="2" onClick={() => this.setSelectedKey('2')}>教师管理</Menu.Item>
                    <Menu.Item key="3" onClick={() => this.setSelectedKey('3')}>学生管理</Menu.Item>
                    <Menu.Item key="4" onClick={() => this.setSelectedKey('4')}>问卷管理</Menu.Item>
                </Menu>
            </div>
            <div className={sty.right}>
                <div className={sty.nav}>
                    <button class="ant-btn" style={{ marginTop: '6px', marginRight: '6px' }} onClick={() => gotoPage('/login')}>退出</button>
                </div>
                <div style={{ boxSizing: 'border-box', padding: '16px' }}>
                    {selectedKey === '1' && <ShouYeView />}
                    {selectedKey === '2' && <JaoShiView />}
                    {selectedKey === '3' && <XueShengView />}
                    {selectedKey === '4' && <WenJuanView />}
                </div>
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
        width: 300,
        borderRight: '1px solid #001529'
    }),
    right: style({
        width: 'calc(100% - 208px)',
        // background: 'orange'
    }),
    bigTitle: style({
        height: '48px',
        fontSize: '24px',
        fontWeight: 600,
        textAlign: 'center',
        background: '#7093DB',
        color: '#fff'
    }),
    nav: style({
        height: '48px',
        borderBottom: '1px solid #001529',
        textAlign: 'right',
        background: '#7093DB',
    })
}

export default NavView
