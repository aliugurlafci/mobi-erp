import React, { useState, useEffect } from 'react';
import {
    AntDesignOutlined,
    UserDeleteOutlined,
    DashboardOutlined,
    ProductOutlined,
    AppstoreAddOutlined,
    MedicineBoxOutlined,
    DollarOutlined,
    StockOutlined,
    RiseOutlined,
    FallOutlined,
    FireOutlined,
    PlusCircleOutlined,
    PercentageOutlined,
    ShoppingCartOutlined,
    TruckOutlined,
    UserAddOutlined,
    TableOutlined,
    AuditOutlined,
    TeamOutlined,
    FundViewOutlined,
    BankOutlined,
    PieChartOutlined,
    HistoryOutlined,
    IdcardOutlined,
    ClusterOutlined,
    FundProjectionScreenOutlined,
    MonitorOutlined,
    ControlOutlined,
    SaveOutlined,
    ShopOutlined,
    ToolOutlined,
    SettingOutlined,
    UserOutlined,
    LogoutOutlined,
    SunOutlined,
    MoonOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Avatar, Row, Col, Button, Segmented, Dropdown } from 'antd';
import { Outlet, useNavigate, useLocation } from "react-router";

const { Header, Sider, Content, Footer } = Layout;

export default function App() {
    const navigate = useNavigate();
    const location = useLocation();

    const [currentLocation, setCurrentLocation] = useState({ pathname: "MOBI CRM > Genel Bakış", title: "Genel Bakış" });
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onCollapseChange = (collapsed, type) => {
        setCollapsed(prevState => collapsed);
        if (collapsed) {
            document.querySelector('.demo-logo-vertical > p').classList.add('hiden');
            document.querySelector('.demo-logo-vertical > p').classList.remove('show');
        }
        else {
            document.querySelector('.demo-logo-vertical > p').classList.remove('hiden');
            document.querySelector('.demo-logo-vertical > p').classList.add('show');
        }
    }
    const onAppExit = () =>{
        window.confirm("Uygulamadan çıkmak istediğinize emin misiniz?") && window.close();
    }
    const dropdownMenuItems = [
        {
            key: '1',
            label: "Çıkış Yap",
            icon: <LogoutOutlined />,
            danger: true,
            onClick: () => onAppExit()
        },
    ];
    const dropdownMenu = { items: dropdownMenuItems }; 
    const MenuItems = [
        {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Genel Bakış',
            onClick: () => navigate('/'),
            style: { fontSize: '10' }
        },
        {
            key: '2',
            icon: <ProductOutlined />,
            label: 'Ürünler',
            children: [
                {
                    key: '2-1',
                    label: 'Yeni Ürün',
                    icon: <AppstoreAddOutlined />,
                    onClick: () => navigate('add-product')
                },
                {
                    key: '2-2',
                    icon: <MedicineBoxOutlined />,
                    label: 'Ürün Kategorileri',
                },
                {
                    key: '2-3',
                    icon: <DollarOutlined />,
                    label: 'Ürün Fiyatları',
                    onClick: () => navigate('product-prices')
                },
            ]
        },
        {
            key: '3',
            icon: <StockOutlined />,
            label: 'Stok',
            children: [
                {
                    key: '3-1',
                    label: 'Stok Giriş',
                    icon: <RiseOutlined />
                },
                {
                    key: '3-2',
                    icon: <FallOutlined />,
                    label: 'Stok Çıkış',
                },
                {
                    key: '3-3',
                    icon: <TableOutlined />,
                    label: 'Stok Listesi',
                },
            ]
        },
        {
            key: '4',
            icon: <ShoppingCartOutlined />,
            label: 'Satış',
            children: [
                {
                    key: '4-1',
                    label: 'Yeni Satış',
                    icon: <PlusCircleOutlined />
                },
                {
                    key: '4-2',
                    icon: <TableOutlined />,
                    label: 'Satış Listesi',
                },
            ]
        },
        {
            key: '5',
            icon: <FireOutlined />,
            label: 'Kampanyalar',
            children: [
                {
                    key: '5-1',
                    label: 'Kategori Kampanyaları',
                    icon: <FireOutlined />,
                },
                {
                    key: '5-2',
                    icon: <PercentageOutlined />,
                    label: 'Ürün Kampanyaları ',
                }
            ]
        },
        {
            key: '6',
            icon: <TruckOutlined />,
            label: 'Tedarikçiler',
            children: [
                {
                    key: '6-1',
                    label: 'Yeni Tedarikçi',
                    icon: <UserAddOutlined />
                },
                {
                    key: '6-2',
                    icon: <TableOutlined />,
                    label: 'Tedarikçi Listesi',
                },
            ]
        },
        {
            key: '7',
            icon: <AuditOutlined />,
            label: 'Masraflar',
            children: [
                {
                    key: '7-1',
                    label: 'Yeni Masraf',
                    icon: <UserDeleteOutlined />
                },
                {
                    key: '7-2',
                    icon: <TableOutlined />,
                    label: 'Masraf Listesi',
                },
            ]
        },
        {
            key: '8',
            icon: <TeamOutlined />,
            label: 'Personeller',
            children: [
                {
                    key: '8-1',
                    label: 'Personel Listesi',
                    icon: <TableOutlined />
                },
                {
                    key: '8-2',
                    label: 'Personel Performansı',
                    icon: <FundViewOutlined />
                }
            ]
        },
        {
            key: '9',
            label: 'Kurlar',
            icon: <BankOutlined />
        },
        {
            key: '10',
            icon: <PieChartOutlined />,
            label: 'Raporlar',
            children: [
                {
                    key: '10-1',
                    label: 'Stok Raporu',
                    icon: <HistoryOutlined />
                },
                {
                    key: '10-2',
                    icon: <FundViewOutlined />,
                    label: 'Satış Raporu',
                },
                {
                    key: '10-3',
                    icon: <PercentageOutlined />,
                    label: 'Kampanya Raporu',
                },
                {
                    key: '10-4',
                    icon: <FundProjectionScreenOutlined />,
                    label: 'Gelir/Gider Raporu',
                },
                {
                    key: '10-5',
                    icon: <ClusterOutlined />,
                    label: 'Tedarikçi Raporu',
                },
                {
                    key: '10-6',
                    icon: <MonitorOutlined />,
                    label: 'Masraf Raporu',
                },
                {
                    key: '10-7',
                    icon: <IdcardOutlined />,
                    label: 'Personel Raporu'
                }
            ]
        },
        {
            key: '11',
            icon: <ControlOutlined />,
            label: 'Ayarlar',
            children: [
                {
                    key: '11-1',
                    label: 'Şirket Ayarları',
                    icon: <ShopOutlined />
                },
                {
                    key: '11-2',
                    icon: <SettingOutlined />,
                    label: 'Sistem Ayarları',
                },
                {
                    key: '11-3',
                    icon: <SaveOutlined />,
                    label: 'Yedekleme',
                },
                {
                    key: '11-4',
                    icon: <ToolOutlined />,
                    label: 'Hesap Yönetimi',
                },
            ]
        }
    ];
    useEffect(() => {
        let pathname = "";
        let screenTitle = "";
        console.log(location);
        switch (location.pathname) {
            case "/":
                pathname = "MOBI CRM > Genel Bakış";
                screenTitle = "Genel Bakış";
                break;
            case "/product-prices":
                pathname = "MOBI CRM > Ürünler > Ürün Fiyatları";
                screenTitle = "Ürün Fiyatları";
                break;
            case "/add-product":
                pathname = "MOBI CRM > Ürünler > Yeni Ürün";
                screenTitle = "Yeni Ürün";
                break;
            default:
                pathname = "MOBI CRM > Genel Bakış";
                screenTitle = "Genel Bakış";
                break;
        }
        setCurrentLocation({ pathname, title: screenTitle });
    }, [location]);
    return (
        <Layout>
            <Sider collapsible collapsedWidth={50} onCollapse={onCollapseChange}>
                <div className="demo-logo-vertical">
                    <Avatar
                        className='user-avatar transition'
                        size={{ xs: 20, sm: 28, md: 36, lg: collapsed ? 36 : 48, xl: collapsed ? 36 : 48, xxl: collapsed ? 36 : 48 }}
                        icon={<AntDesignOutlined />}
                    />
                    <p className='transition'>MOBI CRM</p>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{ fontSize: '12px', height: '100vh' }}
                    inlineIndent={8}
                    defaultSelectedKeys={['1']}
                    items={MenuItems}
                />
            </Sider>

            <Layout >
                <Header style={{ padding: '0 20px', background: colorBgContainer, justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                    <span className='table-header-text'>{currentLocation.title}</span>
                    <div className='right-action space-between'>
                        <Segmented
                            size="middle"
                            shape="round"
                            options={[
                                { value: 'light', icon: <SunOutlined /> },
                                { value: 'dark', icon: <MoonOutlined /> },
                            ]}
                        />
                        <Dropdown menu={dropdownMenu}>
                            <Avatar size={40} icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </Header>
                <span className='pathname-text'>{currentLocation.pathname}</span>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Row>
                        <Col span={24} md={24} xs={24}>
                            <Layout>
                                <Outlet />
                            </Layout>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    MOBI CRM ©{new Date().getFullYear()} Created and maintained by <a href='https://www.google.com.tr' target='_blank'>ALUA Company</a>
                </Footer>
            </Layout>
        </Layout>

    );
}