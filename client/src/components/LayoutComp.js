import React, { useState } from "react";
import "../App.css";

import { Layout, Menu, Typography } from "antd";
import {
  UnorderedListOutlined,
  PlusCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";
import AddPage from "../pages/AddPage";
import ListPage from "../pages/ListPage";
import ShowPage from "../pages/ShowPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

function LayoutComp({ children }) {
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Link to="/">
            <div className="logo">
              <img src="./Logo.svg" alt="logo" />
            </div>
          </Link>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<PlusCircleOutlined />}>
              <Link to="/add">Add Product</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              <Link to="/list">List Products</Link>
            </Menu.Item>

            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/show">Show Products</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Title level={3} style={{ marginTop: "15px", marginLeft: "15px" }}>
              Etys Product Bot
            </Title>
          </Header>

          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, marginTop: "16px" }}
            >
              <Switch>
                <Route exact path="/">
                  {children}
                </Route>
                <Route path="/add">
                  <AddPage />
                </Route>
                <Route path="/list">
                  <ListPage />
                </Route>
                <Route path="/show">
                  <ShowPage />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2021 Created by Aytuğ Tuncer
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default LayoutComp;
