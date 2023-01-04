import React from "react";
import "./App.css";

import { Layout, Typography, Col, Row, Button, Form, Input, Image } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const App = () => (
  <Layout className="Container">
    <Content>
      <Row className="Grid">
        <Col span={16} className="col-1">
          <Image src="bg.png" preview={false} className="Image" />
        </Col>
        <Col span={8} className="col-2">
          <Content className="col-2-body">
            <Title>Create an account</Title>
            <Typography.Paragraph>
              Let's get started with your 30 day free trial.
            </Typography.Paragraph>

            <Form>
              <Input className="Input" placeholder="Name" type="text" />
              <Input className="Input" placeholder="Email" type="email" />
              <Input className="Input" placeholder="Password" type="password" />
              <Button type="primary" className="Button">Create Account</Button>
            </Form>
            <Typography.Paragraph>
              Already have an account?{" "}
              <Typography.Text className="Span">Login</Typography.Text>
            </Typography.Paragraph>
          </Content>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default App;