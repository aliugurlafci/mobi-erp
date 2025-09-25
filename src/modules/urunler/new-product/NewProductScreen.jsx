import React,{ useEffect, useState } from 'react';
import { Layout,Tag} from 'antd';
import { FileExcelOutlined, ReloadOutlined, FilePdfOutlined, UploadOutlined,DeleteFilled, PlusOutlined } from '@ant-design/icons';
import { MobiTable } from '../../components/MobiTable.js';
import UrunFiyatGuncelle from "../urun-modals/UpdateProductPrice.jsx";

const columns = [
    {
        title: 'Ürün Kodu',
        dataIndex: 'urunKodu',
        sorter: (a, b) => a.urunKodu > b.urunKodu ? 1 : -1,
    },
    {
        title: 'Ürün Adı',
        dataIndex: 'urunAdi',
        sorter: (a, b) => a.urunAdi > b.urunAdi ? 1 : -1,
    },
    {
        title: 'Barkod',
        dataIndex: 'barkod',
        sorter: (a, b) => a.barkod > b.barkod ? 1 : -1,
    },
    {
        title: ' Fiyat',
        dataIndex: 'fiyat',
        sorter: (a, b) => a.fiyat > b.fiyat ? 1 : -1,
    },
    {
        title: 'Birim',
        dataIndex: 'birim',
    },
    {
        title: 'Tarih',
        dataIndex: 'tarih',
        sorter: (a, b) => a.tarih > b.tarih ? 1 : -1,
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
    },
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
        fiyat: '300.00',
        birim: 'TRY',
        tarih: '08.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
    {
        key: '3',
        urunKodu: 'John Brown 3',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '350.00',
        birim: 'TRY',
        tarih: '07.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
    {
        key: '4',
        urunKodu: 'John Brown 4',
        urunAdi: 'Tencere 3\'lü Set',
        barkod: '11112222',
        fiyat: '450.00',
        birim: 'TRY',
        tarih: '06.01.2024',
        fiyatGiren: 'Ali Uğur Lafçı',
        kategoriler: ["Ev Aletleri"]
    },
];


export const NewProductScreen = () => {
    const [tableData, setTableData] = useState(data);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);

    const onRefresh = () => {
        setLoading(prevState => !prevState);
        setTableData(data);
    }
    const onAddProduct = () => {
        if (selectedRowKeys.length == 0) {
            alert("Lütfen fiyatını güncellemek istediğiniz ürünü seçiniz.");
            return;
        }
        setOpenAddModal(prevState => !prevState);
    }
    const onDeleteProduct = () => {
        if (selectedRowKeys.length == 0) {
            alert("Lütfen silmek istediğiniz ürünü seçiniz.");
            return;
        }
     
        const newData = tableData.filter(item => !selectedRowKeys.includes(item.key));
        setTableData(newData);

        setSelectedRowKeys('');
     };
    const onUploadExcel = () => {
        console.log("Export to excel clicked");
    }
    const onDownloadPdf = () => {
        console.log("Export to pdf clicked");
    }
    const onDownloadExcel = () => {
        console.log("Import from excel clicked");
    }

    const onSelectChange = newSelectedRowKey => {
        if(!selectedRowKeys.includes(newSelectedRowKey)){
            selectedRowKeys.push(newSelectedRowKey);
        }
    }

    const rowSelection = {
        selectedRowKeys:selectedRowKeys,
        onChange: onSelectChange,
        type: 'checkbox',
        selection:true
    };

    useEffect(() => {
        if(loading){
            setTimeout(() => {
                setLoading(prevState => !prevState);
                setSelectedRowKeys([]);
            }, 1000);
        }
    },[loading]);



const tableHeaderOptions = [
            {
                key: 'header-options-1',
                title: 'Yenile',
                type: 'default',
                icon: <ReloadOutlined />,
                onClick: () => onRefresh()
            },
            {
                key: 'header-options-2',
                title: 'Ürün Ekle',
                type: 'primary',
                icon: <PlusOutlined />,
                onClick: () => onAddProduct()
            },
            {
                key: 'header-options-3',
                title: 'Ürünü Sil',
                type: 'primary',
                danger: true,
                icon: <DeleteFilled />,
                showWhenSelected: true,
                onClick: () => onDeleteProduct()
            },
            {
                key: 'header-options-4',
                title: 'Aktarım',
                type: 'default',
                trigger: 'hover',
                isDropdown: true,
                dropdownOptions: [
                    {
                        key: 'e-1',
                        label: 'Excel yükle',
                        icon: <UploadOutlined />,
                        onClick: () => onUploadExcel()
                    },
                    {
                        key: 'e-2',
                        label: 'Excel olarak indir',
                        icon: <FileExcelOutlined />,
                        onClick: () => onDownloadExcel()
                    },
                    {
                        key: 'e-3',
                        label: 'PDF olarak indir',
                        icon: <FilePdfOutlined />,
                        onClick: () => onDownloadPdf()
                    }
                ]
            }
];

    return (
        <Layout>
           <MobiTable
                editableRows={false}
                columns={columns}
                data={tableData}
                loading={loading}
                rowSelection={rowSelection}
                tableHeaderOptions={tableHeaderOptions}
                tableHeaderTitle="Ürün Listesi"      
            />
            <UrunFiyatGuncelle
                open={openAddModal}
                setOpen={setOpenAddModal}
                onFinish={onRefresh}
                selectedData={data.filter(item => selectedRowKeys.includes(item.key))[0] || {}}
            />
        </Layout>
    );
}