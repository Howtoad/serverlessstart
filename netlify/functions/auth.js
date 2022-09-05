// auth.js
const jwt = require("jsonwebtoken");
exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "",
    };
  }
  const { name, password } = JSON.parse(event.body);
  if (name !== "lionel" || password !== "richie") {
    return {
      statusCode: 403,
      body: "",
    };
  }

  const token = jwt.sign({ user: name }, "lookedfor123");
  return {
    statusCode: 201,
    body: JSON.stringify({ token }),
  };
};
