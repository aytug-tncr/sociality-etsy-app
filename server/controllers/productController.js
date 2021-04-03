const axios = require("axios").default;
const cheerio = require("cheerio");

const Product = require("../models/Product");

exports.create_product = async (req, res) => {
  const { url } = req.body;

  await axios
    .get(url)
    .then((response) => {
      const rawHtml = response.data;
      const $ = cheerio.load(rawHtml);

      const product_id = parseInt(url.split("/")[5]);
      const name = $("h1.wt-text-body-03")
        .text()
        .replace(/([\r\n]+ +)+/gm, "");
      const image = $("ul.carousel-pane-list")
        .find("li")
        .find("img")
        .attr("src");

      const priceText = $("p.wt-text-title-03")
        .text()
        .replace(/([\r\n]+ +)+/gm, "");

      const priceReg = /[0+-9]+/gm;
      const price = parseFloat(priceReg.exec(priceText)[0]);

      if (product_id) {
        Product.create({
          product_id,
          name,
          image,
          price,
        })
          .then((response) => {
            res.send(response);
          })
          .catch((err) => {
            res.status(404);
          });
      } else {
        res.status(404).send({
          message: "Please enter etsy link",
        });
      }
    })
    .catch((err) => {
      res.status(404).send({
        message: "Links are invaild",
      });
    });
};

exports.get_products = async (req, res) => {
  const data = await Product.find({});
  res.send(data);
};

exports.get_singleProduct = async (req, res) => {
  const { id } = req.params;
  const signleProduc = await Product.find({ _id: id })
    .then((respon) => {
      res.send(respon);
    })
    .catch(() => {
      res.status(404).send({
        message: "Product not found",
      });
    });
};
