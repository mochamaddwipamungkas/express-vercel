const mongoose = require("mongoose");
// const { dbHost, dbPass, dbName, dbUser, dbPort } = require("../app/config");
mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb://user_latihan:123456@127.0.0.1:27017/eduworkstore?authSource=admin`
);
// mongoose.connect(
//   `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
// );
// mongoose.connect(
//   `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`
// );
const db = mongoose.connection;

module.exports = db;
