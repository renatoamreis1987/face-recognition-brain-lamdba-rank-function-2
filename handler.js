"use strict";

const emojis = ["😀", "😁", "😆", "🤪", "😅", "🤩", "🤯", "😍", "🍻"];

module.exports.rank = async event => {
  const rank = event.queryStringParameters.rank;
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];

  return {
    statusCode: 200,
    //This is temporarly, to allow everyone to access this
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: rankEmoji
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
