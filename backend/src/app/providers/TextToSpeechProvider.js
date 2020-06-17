const fs = require('fs');
const { resolve } = require('path');
const crypto = require('crypto');

const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_API_KEY
  }),
  url: process.env.IBM_URL
});

class TextToSpeechProvider {
  speech(inputComment) {
    return textToSpeech
      .synthesize({
        text: `${inputComment.comment}`,
        voice: 'pt-BR_IsabelaVoice',
        accept: 'audio/wav'
      })
      .then(response => {
        const audio = response.result;
        return textToSpeech.repairWavHeaderStream(audio);
      })
      .then(repairedFile => {
        const hash = crypto.randomBytes(8).toString('hex');

        const fileName = `audio-${hash}`;

        const path = resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'frontend',
          'public',
          'tmp',
          `${fileName}.wav`
        );

        fs.writeFileSync(path, repairedFile);

        return fileName;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = new TextToSpeechProvider();
