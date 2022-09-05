exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
    console.log(event.body);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message:
          "https://c-fa.cdn.smule.com/rs-s77/arr/37/4b/40650ab1-1249-4ea0-8250-069b9cda3cca_1024.jpg",
      }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "it is not you im looking for" }),
    };
  }
};
