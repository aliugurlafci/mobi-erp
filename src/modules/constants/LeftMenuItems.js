import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import { Link } from 'react-router';

const LeftMenuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Kullanıcılar',
      onClick:()=> <Link to="/"/>,
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Aktiflikler',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'Dosyalar',
    },
  ];
  
  export default LeftMenuItems;