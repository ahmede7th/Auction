const { authenticate } = require('@feathersjs/authentication').hooks;

const auth = require('feathers-authentication-hooks')

const addSellerUsername = require('../../hooks/add-seller-username');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [auth.associateCurrentUser({
      idField:'id',
       as: 'seller_id'}), addSellerUsername()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
