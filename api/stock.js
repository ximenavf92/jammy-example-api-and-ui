var inventory = require('./data/inventory.json');

exports.handler = function(event, context, callback) {

  // get the inventory details for this product
  let data = inventory[event.queryStringParameters.productId];

  // add some fake latency,
  // so we can see what's going on.
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    });
  }, 2000)

}
