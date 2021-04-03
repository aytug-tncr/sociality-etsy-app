const mongoose = require("mongoose");

const db = mongoose.connection;
mongoose.connect(
  "mongodb+srv://admin:sociality.io@cluster0.sobtc.mongodb.net/socialityio?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongodb is running");
});
