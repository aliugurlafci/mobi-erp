import React, { useState } from 'react';
import { Layout, Table, Dropdown, Tag, Row, Col, Divider, Button } from 'antd';
import { FileExcelOutlined, ReloadOutlined, FilePdfOutlined, UploadOutlined, PlusOutlined, EditOutlined, DeleteFilled } from '@ant-design/icons';
import UrunFiyatGuncelle from "./UrunFiyatGuncelle.jsx";

const columns = [
    {
        title: 'Ürün Kodu',
        dataIndex: 'urunKodu',
    },
    {
        title: 'Ürün Adı',
        dataIndex: 'urunAdi',
    },
    {
        title: 'Barkod',
        dataIndex: 'barkod',
    },
    {
        title: ' Fiyat',
        dataIndex: 'fiyat',
    },
    {
        title: 'Birim',
        dataIndex: 'birim',
    },
    {
        title: 'Tarih',
        dataIndex: 'tarih',
    },
    {
        title: 'Fiyat Giren',
        dataIndex: 'fiyatGiren',
    },
    {
        title: 'Kategori',
        dataIndex: 'kategori',
        render: (_, { kategoriler }) => (
            <>
                {
                    kategoriler.map((item, key) => {
                        return (
                            <Tag color="green" key={"tag-key-of-" + key}>
                                {item}
                            </Tag>
                        );
                    })
                }
            </>
        )
    }
];

const data = [
    {
        key: '11111 22222',
        urunKodu: 'John Brown 1',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '250.00',
        birim: 'TRY',
        tarih: '01.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
    {
        key: '2',
        urunKodu: 'John Brown 2',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '250.00',
        birim: 'TRY',
        tarih: '01.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
    {
        key: '3',
        urunKodu: 'John Brown 3',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '250.00',
        birim: 'TRY',
        tarih: '01.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
    {
        key: '4',
        urunKodu: 'John Brown 4',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '250.00',
        birim: 'TRY',
        tarih: '01.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
];


export const UrunFiyat = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState('');
    const [loading, setLoading] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const onRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }
    const onAddProduct = () => {
        alert("Product add clicked");
    }
    const onDeleteProduct = () => {
        console.log("Product delete clicked");
    }
    const onEditProduct = () => {
        setOpenUpdateModal(prevState => !prevState);
    }
    const onUploadExcel = () => {
        console.log("Export to excel clicked");
    }
    const onDownloadPdf = () => {
        console.log("Export to pdf clicked");
    }
    const onDownloadExcel = () => {
        console.log("Import from excel clicked");
    }

    const actionButtonItems = [
        {
            key: 'a-1',
            label: 'Düzenle',
            icon: <EditOutlined />
        },
        {
            key: 'a-2',
            label: <span style={{ color: 'red' }}>Sil</span>,
            icon: <DeleteFilled style={{ color: 'red' }} />
        }
    ];
    const exportButtonItems = [
        {
            key: 'e-1',
            label: 'Excel yükle',
            icon: <UploadOutlined />
        },
        {
            key: 'e-2',
            label: 'Excel olarak indir',
            icon: <FileExcelOutlined />
        },
        {
            key: 'e-3',
            label: 'PDF olarak indir',
            icon: <FilePdfOutlined />
        }
    ];
    const onSelectChange = newSelectedRowKeys => {
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        type: 'radio'
    };
    const MenuHeader = () => {
        const onExportMenuClick = ({ key }) => {
            console.log('Export menu clicked:', key);
            if (key === 'e-1') {
                onUploadExcel();
            }
            if( key === 'e-2') {
                onDownloadExcel();
            }
            if (key === 'e-3') {
                onDownloadPdf();
            }
        };

        const onActionMenuClick = ({ key }) => {
            switch (key) {
                case 'a-1':
                    onEditProduct();
                    break;
                case 'a-2':
                    onDeleteProduct();
                    break;
                default:
                    break;
            }
        };

        const actionMenu = {
            items: actionButtonItems.map(item => ({
                key: item.key,
                icon: item.icon,
                label: item.label,
                onClick: onActionMenuClick
            }))
        };

        const exportMenu = {
            items: exportButtonItems.map(item => ({
                key: item.key,
                icon: item.icon,
                label: item.label,
                onClick: onExportMenuClick
            }))
        };

        return (
            <>
                <Row gutter={[8, 8]} style={{ flexGrow: 1 }} justify="space-between">
                    <Col xxl={16} xl={16} lg={14} md={12} sm={24} xs={24}>
                        <span className="table-header-text">Ürün Listesi</span>
                    </Col>
                    <Row gutter={[16, 16]} style={{ flexGrow: 1 }} justify="end">
                        <Col>
                            <Button type="default" icon={<ReloadOutlined />} onClick={()=>onRefresh()}></Button>
                        </Col>
                        <Col>
                            <Button type="primary" icon={<PlusOutlined />} onClick={()=>onAddProduct()}>
                                Yeni Ürün
                            </Button>
                        </Col>
                        <Col>
                            <Dropdown.Button menu={actionMenu} trigger={['hover']} block>
                                İşlemler
                            </Dropdown.Button>
                        </Col>
                        <Col>
                            <Dropdown.Button menu={exportMenu} trigger={['hover']} block>
                                Aktarım
                            </Dropdown.Button>
                        </Col>
                    </Row>
                </Row>
                <Divider type="horizontal" size="small" />
            </>
        );
    }
    return (
        <Layout>
            <Table
                loading={loading}
                scroll={{ x: 'max-content' }}
                rowSelection={rowSelection}
                bordered
                pagination={{ hideOnSinglePage: true, showTotal: (total, range) => `${range[0]} / ${total}`, responsive: ['md'] }}
                expandable={{ defaultExpandAllRows: true }}
                columns={columns}
                dataSource={data}
                title={() => MenuHeader()}
            />
            <UrunFiyatGuncelle
                open={openUpdateModal}
                setOpen={setOpenUpdateModal}
                data={data}
                selectedData={data.filter(item => selectedRowKeys.includes(selectedRowKeys[0]))[0] || {}}
            />
        </Layout>
    );
}