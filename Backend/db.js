const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://J0hnMilt0n:python@dl.thj0wqz.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
