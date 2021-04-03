import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    title: "Title",
    dataIndex: "name",
    key: "_id",
  },
  {
    title: "Product İd",
    dataIndex: "product_id",
    key: "product_id",
    responsive: ["md"],
  },
  {
    title: "İmage",
    dataIndex: "image",
    key: "image",
    responsive: ["md"],
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const ListPage = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:4000/post")
      .then(function (response) {
        const veri = response.data;
        setdata(veri);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table
        rowKey="_id"
        dataSource={data}
        columns={columns}
        size="middle"
        pagination={{ defaultPageSize: 5, showSizeChanger: true }}
      />
    </div>
  );
};

export default ListPage;
