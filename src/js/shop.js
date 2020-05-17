const showStockLevels = function() {

  const productViews = document.querySelectorAll('.product');

  productViews.forEach(element => {
    fetch(`/api/stock/${element.dataset.productId}`)
      .then(response => response.json())
      .then(data => {

        if(data.stock) {
          html = `<a href="#" class="btn">Buy now</a>`;
        } else {
          html = `<span>😕More soon!</span> `;
        }
        element.querySelector('.purchase').innerHTML = html;
        element.querySelector('.price').innerText = data.price;

      })
  });

};

showStockLevels();
