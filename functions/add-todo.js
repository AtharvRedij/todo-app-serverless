const { addTodo } = require("./utils/db");

exports.handler = async (event) => {
  const todo = await addTodo(event.queryStringParameters.name);
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};
