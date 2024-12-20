// functions/form-handler.js

const { parse } = require('querystring');

exports.handler = async function (event, context) {
  const formData = await parseRequestBody(event);

  const emailListChoice = formData['email-list'];

  // Transform the value to a more user-friendly format
  const emailListStatus = emailListChoice === 'yes' ? 'Yes' : 'No';

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Email List: ${emailListStatus}`,
    }),
  };
};

const parseRequestBody = async (event) => {
  const body = await event.request.text();
  return parse(body);
};
