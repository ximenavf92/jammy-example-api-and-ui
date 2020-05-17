var products = require('./data/catalogue.json');
var inventory = require('./data/inventory.json');

exports.handler = (event, context, callback) => {

  // get the inventory and price details for this product
  let data = products[event.queryStringParameters.productId];
  let availability = inventory[event.queryStringParameters.productId];


  // Introduce outrageous price gauging.
  if(availability.stock == 0) {
    data.stock = availability.stock;
    data.price = data.rrp
  }
  else if(availability.stock < 10) {
    data.stock = "Last few items";
    data.price = ((10 - availability.stock) * data.rrp ).toFixed(2);
  } else {
    data.stock = availability.stock;
    data.price = data.rrp
  }


  // add some fake latency,
  // so we can see what's going on.
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    });
  }, 2000)

}
