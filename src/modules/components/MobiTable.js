import React from 'react';
import { Table, Dropdown, Row, Col, Divider, Button } from 'antd';

export const MobiTable = ({
    columns,
    data,
    editableRows,
    rowSelection,
    tableHeaderOptions,
    loading,
    tableHeaderTitle
}) => {

    const MenuHeader = () => {
        const exportMenu = {
            items: (tableHeaderOptions.find(opt => opt.isDropdown)?.dropdownOptions || []).map(item => ({
                key: item.key,
                icon: item.icon,
                label: item.label,
                onClick: item.onClick
            }))
        };
        return (
            <>
                <Row gutter={[8, 8]} style={{ flexGrow: 1 }} justify="space-between">
                    <Col xxl={12} xl={12} lg={6} md={6} sm={6} xs={24}>
                        <span className="table-header-text">{tableHeaderTitle}</span>
                    </Col>
                    <Row gutter={[16, 16]} style={{ flexGrow: 1 }} justify="end">
                        {
                            tableHeaderOptions.map(option => {
                                if (option.showWhenSelected && !rowSelection.selectedRowKeys.length) {
                                    return null;
                                }
                                if (option.isDropdown) {
                                    return (
                                        <Col key={option.key}>
                                            <Dropdown.Button menu={exportMenu} trigger={[option.trigger]} block>
                                                {option.title}
                                            </Dropdown.Button>
                                        </Col>
                                    );
                                }
                                return (
                                    <Col key={option.key}>
                                        <Button type={option.type} danger={option.danger} icon={option.icon} onClick={option.onClick}>
                                            {option.title}
                                        </Button>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Row>
                <Divider type="horizontal" size="small" />
            </>
        );
    }
    return (
        <Table
            loading={loading}
            scroll={{ x: 'max-content' }}
            rowSelection={rowSelection}
            bordered
            pagination={{ hideOnSinglePage: true, showTotal: (total, range) => `${range[0]} / ${total}`, responsive: ['md'] }}
            expandable={{ defaultExpandAllRows: true, showExpandColumn: true }}
            columns={columns}
            dataSource={data}
            rowHoverable
            title={() => MenuHeader()}
        />
    );
}

/**
 * TABLE INHERITANCE PROPS
 * 
 * const tableHeaderOptions = [
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
 * 
 */