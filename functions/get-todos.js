const mongoose = require("mongoose");
const { Todo } = require("./models/todo");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

exports.handler = async (event) => {
  const todos = await Todo.find().sort("name");
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
