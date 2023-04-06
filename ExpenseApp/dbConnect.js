const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://eymm1999:rootroot@cluster0.kufiyjm.mongodb.net/ExpenseApp1",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () => console.log(`Mongo DB Connection Successful`));
