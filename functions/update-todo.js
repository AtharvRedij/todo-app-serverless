const { updateTodo } = require("./utils/db");

exports.handler = async (event) => {
  const todo = await updateTodo(event.queryStringParameters.id);
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};
