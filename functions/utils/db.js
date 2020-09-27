const mongoose = require("mongoose");
const { Todo } = require("../models/todo");
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

const getTodos = async () => {
  return await Todo.find().sort("name");
};

const addTodo = async (name) => {
  const todo = new Todo({
    name,
  });

  await todo.save();
  return todo;
};

const updateTodo = async (id) => {
  const todo = await Todo.findById(id);

  todo.complete = !todo.complete;
  await todo.save();
  return todo;
};

const deleteTodo = async (id) => {
  const todo = await Todo.findByIdAndDelete(id);

  return todo;
};

exports.getTodos = getTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
