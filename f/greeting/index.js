const GREETINGS = [
  'Some people choose to see the ugliness in this world, the disarray. I choose to see the beauty. To believe there is an order to our days. A purpose.',
  'It doesn\'t look like anything to me.',
  'These violent delights have violent ends.'
];

let index = 0;

module.exports = (params, callback) => {

  callback(null, GREETINGS[index++ % 3]);

};
