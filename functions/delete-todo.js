const { deleteTodo } = require("./utils/db");

exports.handler = async (event) => {
  const todo = await deleteTodo(event.queryStringParameters.id);
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};
