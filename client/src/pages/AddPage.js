import React, { useState } from "react";
import axios from "axios";
import { Input, Modal, Form, Button, Space } from "antd";

const successModal = () => {
  Modal.success({
    content: "The product has been successfully added.",
  });
};

const errorModal = () => {
  Modal.error({
    content: "İnvaild Url",
  });
};

function AddPage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleData = (event) => {
    const geturl = event.target.value;
    setUrl(geturl);
  };

  const sendData = async () => {
    await axios
      .post("http://localhost:4000/post", { url: url })
      .then((response) => {
        successModal();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        errorModal();
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();
    setLoading(true);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Space size="small">
          <Form.Item>
            <Input
              placeholder="input search text"
              onChange={handleData}
              allowClear
              size="large"
              className="search"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" size="large" loading={loading}>
              Search
            </Button>
          </Form.Item>
        </Space>
      </form>
    </>
  );
}

export default AddPage;
