const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

const sendSMS = async (to, body) => {
  try {
    await client.messages.create({
      body,
      from: fromNumber,
      to: `+91${to}` // or international format as needed
    });
    console.log(`SMS sent to ${to}`);
  } catch (error) {
    console.error('Twilio SMS Error:', error.message);
  }
};

module.exports = sendSMS;
