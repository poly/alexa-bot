const f = require('f');

const mapping = {
  'Greeting': 'greeting',
  'Random': 'random'
};

module.exports = (params, callback) => {

  let alexa = {};

  try {
    alexa = JSON.parse(params.buffer.toString());
  } catch (e) {
    return callback(new Error('Invalid Alexa command'));
  }

  let request = alexa.request || {};
  let intent = request.intent || {name: 'Greeting', slots: {}};

  let fname = mapping[intent.name] || mapping['Greeting'];

  f('./' + fname)(intent.slots, (err, result) => {

    if (err) {
      return callback(err);
    }

    callback(null, {
      version: 'dev',
      sessionAttributes: {},
      response: {
        outputSpeech: {
          type: 'PlainText',
          text: result
        },
        shouldEndSession: true
      }
    });

  });

};
