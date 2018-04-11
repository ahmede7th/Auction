const users = require('./users/users.service.js');
const auctions = require('./auctions/auctions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(auctions);
};
