import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import HeaderSection from './Header';
import SidebarSection from './Sidebar';
import ContentSection from './Content';
import FooterSection from './Footer';
import './App.css';

const { Content } = Layout;

const App = () => {
  const [selectedOption, setSelectedOption] = useState('1'); // Default selected option is '1'

  const items2 = [
    {
      key: 'sub1',
      icon: React.createElement(UserOutlined),
      label: 'Tables',
      children: new Array(5).fill(null).map((_, j) => ({
        key: j + 1,
        label: `Table ${j + 1}`,
      })),
    },
    {
      key: 'sub2',
      icon: React.createElement(LaptopOutlined),
      label: 'Data Visualizations',
      children: new Array(5).fill(null).map((_, j) => ({
        key: j + 6,
        label: `Visualization ${j + 1}`,
      })),
    },
  ];

  const handleOptionSelect = (key) => {
    setSelectedOption(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderSection />
      <Layout>
        <Row justify="center">
          <Col xs={24} sm={24} md={6} lg={4} xl={3}>
            <SidebarSection items={items2} colorBgContainer="#cf1322" onSelectOption={handleOptionSelect} />
          </Col>
          <Col xs={24} sm={24} md={18} lg={20} xl={21}>
            <Layout style={{ height: '100%' }}>
              <Content style={{ padding: '24px', minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ContentSection selectedOption={selectedOption} />
              </Content>
              <FooterSection />
            </Layout>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default App;
