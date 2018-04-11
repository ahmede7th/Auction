// Initializes the `auctions` service on path `/auctions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/auctions.model');
const hooks = require('./auctions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'auctions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/auctions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('auctions');

  service.hooks(hooks);
};
