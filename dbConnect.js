const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://dbApp1:rootroot@cluster0.yzitzp1.mongodb.net/ExpenseApp",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));
connection.on("connected", () => console.log("Success"));
