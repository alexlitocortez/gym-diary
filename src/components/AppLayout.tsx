import React, { ReactNode } from 'react';
import { Flex, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#B19CD9'
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    maxHeight: '100%',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#B19CD9'
};

const footerStyle: React.CSSProperties = {
    maxHeight: '100%',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#B19CD9'
};

const layoutStyle = {
    height: '100vh',
    display: 'flex',
    flexDirections: 'column'
};


interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Gym Diary</Header>
            <Content style={contentStyle}>{children}</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);

export default AppLayout;