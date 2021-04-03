import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card, Col, Row, Image } from "antd";
const { Meta } = Card;

const ShowPage = () => {
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
    <div className="site-card-wrapper">
      <Row gutter={[16, 16]}>
        {data.map((item, index) => {
          return (
            <Col md={{ span: 6 }} key={index}>
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    src={item.image}
                    width={"auto"}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                }
                title={item.product_id}
              >
                <Meta title={item.name} description={item.price} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ShowPage;
