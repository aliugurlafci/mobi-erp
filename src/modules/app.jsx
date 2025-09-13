import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AntDesignOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Avatar } from 'antd';
import { Outlet } from "react-router";
import LeftMenuItems from './constants/LeftMenuItems.js';

const { Header, Sider, Content } = Layout;

export default function App() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(()=>{
        if(collapsed){
            document.querySelector('.demo-logo-vertical > p').classList.add('hiden');
            document.querySelector('.demo-logo-vertical > p').classList.remove('show');
        }
        else{
            document.querySelector('.demo-logo-vertical > p').classList.remove('hiden');
            document.querySelector('.demo-logo-vertical > p').classList.add('show');
        }
    },[collapsed]);
    return (
        <Layout style={{ position: 'absolute', left: 0, height: '100%', width: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical">
                    <Avatar
                        className='user-avatar'
                        size={{ xs: 20, sm: 28, md: 36, lg: 56, xl: 72, xxl: 84 }}
                        icon={<AntDesignOutlined />}
                    />
                   <p>User Name</p>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={LeftMenuItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}