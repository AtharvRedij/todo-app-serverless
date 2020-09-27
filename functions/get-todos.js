const { getTodos } = require("./utils/db");

exports.handler = async (event) => {
  const todos = await getTodos();
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
