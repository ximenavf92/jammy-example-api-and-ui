const showStockLevels = function() {

  const productViews = document.querySelectorAll('.product');

  productViews.forEach(element => {
    fetch(`/api/stock/${element.dataset.productId}`)
      .then(response => response.json())
      .then(data => {

        // update the UI based on the
        // levels of available stock
        if(!data.stock) {
          html = `<span>😕More soon!</span> `;
        } else if (data.stock <= 10) {
          html = `<a href="#" class="btn">Just a few left! Buy now</a>`;
        } else {
          html = `<a href="#" class="btn">Buy now</a>`;
        }
        element.querySelector('.purchase').innerHTML = html;

        // update price
        element.querySelector('.price').innerText = data.price;

      })
  });

};

showStockLevels();
