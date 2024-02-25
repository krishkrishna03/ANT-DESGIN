import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer style={{ textAlign: 'center' ,background: '#ff4d4f'}}>
      Ant Design © {new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};

export default FooterSection;
