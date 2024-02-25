import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const HeaderSection = () => {
  return (
    <Header style={{ background: '#9254de', padding: 0 }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <div style={{ textAlign: 'center', padding: '0 20px' }}>
            <Title level={3} style={{ color: '#120338', fontFamily: 'cursive' }}>
              Your Ant Design Content
            </Title>
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderSection;
