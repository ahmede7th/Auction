module.exports = function (options = {}) {
  return async context => {
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
