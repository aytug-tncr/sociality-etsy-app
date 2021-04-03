import React from "react";
import { Image, Row, Col, Typography, Popover, Button } from "antd";
const { Title } = Typography;

const App = () => {
  return (
    <div>
      <div>
        <Title level={3}>Welcome to Bot Description Page</Title>
      </div>
      <Row>
        <Col md={6} sm={12}>
          <Image src="/bot.svg" alt="bot" preview={false} />
        </Col>
        <Col md={12}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Popover content="only ui">
            <Button type="primary">How to use ?</Button>
          </Popover>
          ,
        </Col>
      </Row>
    </div>
  );
};

export default App;
