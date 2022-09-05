// this is my hello file in netlify functions

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "https://c-fa.cdn.smule.com/rs-s77/arr/37/4b/40650ab1-1249-4ea0-8250-069b9cda3cca_1024.jpg",
    }),
  };
};
