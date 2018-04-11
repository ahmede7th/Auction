const FeathersError  = require('@feathersjs/errors');


module.exports = function (options = {}) {
  return async context => {

    if (parseFloat (context.data.current_price) <= 0)
    {
      throw new FeathersError.BadRequest('Invalid Parameters', {
        errors: { current_price: 'price has to be greater than 0' }
      });
    }



    return context.app.service('auctions')
    .get(context.id)
    .then(auction => {
      //console.log(auction)
      //consoel.log(context.data)
      const oldPrice = parseFloat(auction.current_price)
      context.data.current_price = oldPrice + parseFloat(context.data.current_price)
      //comes back as string convert to float
      return context;
    });
    //feathers.SKIP
  };
};
