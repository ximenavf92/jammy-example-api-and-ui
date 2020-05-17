var inventory = require('./inventory.json');

exports.handler = function(event, context, callback) {

  // get the inventory details for this product
  let data = inventory[event.queryStringParameters.productId];

  console.log('data :>> ', data);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data)
  });

}
