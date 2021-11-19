/* eslint-disable */

import * as functions from "firebase-functions";
import { Twilio } from "twilio";

const accountSid = "AC011397628a8579bd48045c975a63d66e";
const authToken = "13bdba7242a1a28f236fbb543abf1b05";
const twilioNumber = "+12183079407";
const client = new Twilio(accountSid, authToken);



export const serverTime = functions.https.onRequest((request, response) => {
    response.json({timekey: new Date()});
});

export const testTwilio = functions.https.onRequest((request, response) => {
    client.messages
    .create({
      from: twilioNumber,
      to: "+19195199475",
      body: "You just sent an SMS from TypeScript using Twilio!",
    })
    .then((message) => response.json({message: message}));    
});
