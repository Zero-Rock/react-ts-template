/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/03/06 2:30 下午.
 */
import React, { useState } from 'react';
import { Layout, ConfigProvider, Menu } from 'antd';
import zhCn from 'antd/lib/locale/zh_CN';
import './layout.less';

const { Sider,Content, Header } = Layout;
const { Item: MenuItem } = Menu;

enum HeaderWidth {
  a=80,
  b=200
}

enum ContentWidth {
  a=100,
  b=220
}

const AppLayout = (props: any) => {
  const [collapsed, triggerCollapsed] = useState(false);
  return (
    <ConfigProvider locale={zhCn}>
      <Layout className="site_layout">
        <Sider className="site_layout_side" trigger={null} collapsed={collapsed}>
          <div className="site_logo"/>
          <Menu theme="dark" mode="inline">
            <MenuItem key="index">
              <span>首页</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site_layout_background" style={{ marginLeft: collapsed ? HeaderWidth.a: HeaderWidth.b }}>
            <span onClick={()=>{triggerCollapsed(!collapsed);}}>{collapsed ? '收起':'展开'}</span>
          </Header>
          <Content className="site_layout_background" style={{ marginLeft: collapsed ? ContentWidth.a: ContentWidth.b }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
