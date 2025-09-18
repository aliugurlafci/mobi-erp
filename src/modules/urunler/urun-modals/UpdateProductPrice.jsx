import React, { useState } from 'react';
import { Button, Modal, Input, Tooltip, Select, Space,Divider } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const UpdateProductPrice = ({ open, setOpen,selectedData,onFinish }) => {
    const [currency, setCurrency] = useState({ symbol: '₺', code: 'TRY' });
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(prevState => !prevState);
        setTimeout(() => {
            setLoading(prevState => !prevState);
            setOpen(prevState => !prevState);
            onFinish();
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(prevState => !prevState);
    };

    const handleCategoryChange = value => {
        console.log(`selected ${value}`);
      };
    const categoryOptions = [
        {
            label: 'China',
            value: 'china',
            emoji: '🇨🇳',
            desc: 'China (中国)',
        },
        {
            label: 'USA',
            value: 'usa',
            emoji: '🇺🇸',
            desc: 'USA (美国)',
        },
        {
            label: 'Japan',
            value: 'japan',
            emoji: '🇯🇵',
            desc: 'Japan (日本)',
        },
        {
            label: 'Korea',
            value: 'korea',
            emoji: '🇰🇷',
            desc: 'Korea (韩国)',
        },
    ];
    const currencySelect = (
        <Select defaultValue={selectedData.birim} onSelect={(value, option) => {
            setCurrency({ symbol: option.children, code: value });
        }} style={{ width: 80 }}>
            <Option value="TRY">₺</Option>
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
        </Select>
    );
    return (
        <Modal
            open={open}
            title={selectedData.urunKodu + " - " + selectedData.barkod + " Ürün Fiyat Güncelle"}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Vazgeç
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Güncelle
                </Button>,
            ]}
        >
            <Divider type="horizontal" size="small" />
            <br/>
            <>
                <Input
                    placeholder="Ürün Kodu"
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Ürün kodunu giriniz">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                    value={selectedData.urunKodu}
                />
                <br />
                <br />
                <Input
                    placeholder="Ürün Adı"
                    prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Ürün adını giriniz">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                    value={selectedData.urunAdi}
                />
                <br />
                <br />
                <div className='space-between'>
                    <span>Barkod: </span>
                    <Input.OTP length={12} type='number' style={{ marginLeft: 20 }} defaultValue={selectedData.barkod} />
                </div>
                <br />
                <br />
                <Input prefix="" type='number' suffix={currency.code} addonAfter={currencySelect} defaultValue={selectedData.fiyat} />
                <br />
                <br />
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="select one country"
                    defaultValue={['china']}
                    onChange={handleCategoryChange}
                    options={categoryOptions}
                    optionRender={option => (
                        <Space>
                            <span role="img" aria-label={option.data.label}>
                                {option.data.emoji}
                            </span>
                            {option.data.desc}
                        </Space>
                    )}
                />
                <br />
                <br />
            </>
            <Divider type="horizontal" size="small" />
        </Modal>
    );
};
export default UpdateProductPrice;