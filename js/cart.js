function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
  
    if (cartItems && productContainer) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML +=
          `<div class="product">
            <ion-icon name="close-circle"></ion-icon>
            <img src="${item.image}"></img>
            <span>${item.productName}</span>
          </div>
          <div class="price">$${item.price}</div>
          <div class="quantity>
            <ion-icon class="decrease" name="arrow-back-circle-outline"></ion-icon>
            <span class="incart">${item.inCart}</span>
          </div>
          <div class="total">
            $${item.inCart * item.price}
          </div>
          `;
      });

      productContainer.innerHTML += `
          <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">
              $${cartCost}
            </h4>    
          </div>     
      `;
      

    }
  }
  
  onLoadCartNumbers();
  displayCart();