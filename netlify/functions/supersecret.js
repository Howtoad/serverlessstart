// supersecret.js
const jwt = require("jsonwebtoken");
exports.handler = async function (event, context) {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "",
      }),
    };
  }
  if (
    !event.headers.authorization ||
    !event.headers.authorization.includes("Bearer ")
  ) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: "",
      }),
    };
  }
  const token = event.headers.authorization.split("Bearer ")[1];
  if (!jwt.verify(token, "lookedfor123")) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        message: "",
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "https://c-fa.cdn.smule.com/rs-s77/arr/37/4b/40650ab1-1249-4ea0-8250-069b9cda3cca_1024.jpg",
    }),
  };
};
