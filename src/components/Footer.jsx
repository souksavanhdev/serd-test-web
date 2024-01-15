import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, CompassOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';


export default function Footer() {

    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState('/home');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        navigate(tab)
    };
    return (
        <div>
            <Menu
                className=' bg-gray-900 h-20 text-center flex  justify-center items-center text-[#FFFFFF]'
                mode="horizontal"
                selectedKeys={[selectedTab]}>
                <Menu.Item key="/home" icon={<HomeOutlined />} onClick={() => handleTabClick('/home')}>
                    ໜ້າຫຼັກ
                </Menu.Item>
                <Menu.Item key="explore" icon={<CompassOutlined />} onClick={() => handleTabClick('explore')}>
                    ອອມເງິນ
                </Menu.Item>
                <Menu.Item key="/profile" icon={<SettingOutlined />} onClick={() => handleTabClick('/profile')}>
                    ຕັ້ງຄ່າ
                </Menu.Item>
                <Menu.Item key="setting" icon={<UserOutlined />} onClick={() => handleTabClick('setting')}>
                    ໂປຮຟາຍ
                </Menu.Item>
            </Menu>
        </div>
    )
}
