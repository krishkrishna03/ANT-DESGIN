import React from 'react';
import { Layout, Menu, Collapse } from 'antd'; // Remove DownOutlined and SubMenu from the imports
// import { DownOutlined } from '@ant-design/icons';

const { Sider } = Layout;
// const { SubMenu } = Menu; // Remove this line

const SidebarSection = ({ items, onSelectOption }) => {
  const handleMenuClick = (key) => {
    onSelectOption(key);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: '#9254de',
        color: '#fff',
        width: 200
      }}
      width={200}
    >
      <Collapse defaultActiveKey={['sub1']} ghost>
        {items.map((item) => (
          <Collapse.Panel header={item.label} key={item.key}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{
                background: '#9254de',
                color: '#fff',
                borderRight: 'none',
              }}
            >
              {item.children.map((child) => (
                <Menu.Item key={child.key} onClick={() => handleMenuClick(child.key)}>
                  {child.label}
                </Menu.Item>
              ))}
            </Menu>
          </Collapse.Panel>
        ))}
      </Collapse>
    </Sider>
  );
};

export default SidebarSection;
