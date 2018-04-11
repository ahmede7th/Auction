const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const addTopBidder = require('../../src/hooks/add-top-bidder');

describe('\'addTopBidder\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: addTopBidder()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
