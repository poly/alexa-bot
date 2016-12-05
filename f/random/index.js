module.exports = (params, callback) => {

  let r = Math.floor(Math.random() * 10) + 1;
  callback(null, r);

};
