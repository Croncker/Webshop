var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
var editionSelect = document.getElementById("editionSelect");
var h1 = document.querySelector("h1#productTitle");
var h4 = document.querySelector("h4#productPrice");

editionSelect.addEventListener("change", function() {
    var selectedOption = editionSelect.value;
    if (selectedOption === "collection") {
        SmallImg[0].src = "img3/collection1.webp";
        SmallImg[1].src = "img3/collection2.webp";
        SmallImg[2].src = "img3/collection3.webp";
        SmallImg[3].src = "img3/collection4.webp";
        h1.textContent = "God Of War Ragnarok (Collectors Edition)";
        h4.textContent = "$200,00";
    } else if (selectedOption === "limited") {
        SmallImg[0].src = "img3/limited1.webp";
        SmallImg[1].src = "img3/limited2.webp";
        SmallImg[2].src = "img3/limited3.webp";
        SmallImg[3].src = "img3/limited4.webp";
        h1.textContent = "God Of War Ragnarok (Limited Edition)";
        h4.textContent = "$79,99";
    } else {
        SmallImg[0].src = "img3/god1.webp";
        SmallImg[1].src = "img3/god2.webp";
        SmallImg[2].src = "img3/god3.webp";
        SmallImg[3].src = "img3/god4.webp";
        h1.textContent = "God Of War Ragnarok";
        h4.textContent = "$49,99";
    }
    ProductImg.src = SmallImg[0].src;
});

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        productName: "God Of War Ragnarok",
        category: "Adventure",
        price: "49.99",
        image: "img3/god1.webp",
        inCart: 0,
        tag: "godOfWar"
    },
    {
        productName: "God Of War Collectors Edition",
        category: "Adventure",
        price: "200.00",
        image: "img3/collection1.webp",
        inCart: 0,
        tag: "collectorsEdition"
    },
    {
        productName: "God Of War Limited Edition",
        category: "Adventure",
        price: "79.99",
        image: "img3/limited1.webp",
        inCart: 0,
        tag: "limitedEdition"
    },
];





let addButton = document.querySelector('.add-cart');

addButton.addEventListener('click', function() {
  let selectedProduct;
  let selectedOption = editionSelect.value;

  if (selectedOption === "limited") {
    selectedProduct = products.find(function(product) {
      return product.tag === "limitedEdition";
    });
  } else if (selectedOption === "collection") {
    selectedProduct = products.find(function(product) {
      return product.tag === "collectorsEdition";
    });
  } else {
    selectedProduct = products.find(function(product) {
      return product.tag === "godOfWar";
    });
  }

  if (selectedProduct) {
    cartNumbers(selectedProduct);
  }
});




function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}





function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
  
    if (productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
    }
  
    setItems(product);
  
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    
    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        let totalPrice = cartCost + parseFloat(product.price);
        localStorage.setItem("totalCost", totalPrice.toFixed(2));
        console.log("The updated cartCost is $" + totalPrice.toFixed(2));
      } else {
        localStorage.setItem("totalCost", parseFloat(product.price).toFixed(2));
        console.log("The updated cartCost is $" + parseFloat(product.price).toFixed(2));
      }
      showNotification();
    }




  
    function showNotification() {
      const notificationContainer = document.querySelector('.notification-container');
      const notification = document.querySelector('.notification');
      
      notification.classList.remove('hidden');
      
      const closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', function() {
        notificationContainer.style.display = 'none';
      });
  
      setTimeout(function() {
        notification.classList.add('hidden');
      }, 3000);
    }
  
  
  
  


function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      product.inCart = 1;
      cartItems = {
        ...cartItems,
        [product.tag]: product
      };
    } else {
      cartItems[product.tag].inCart += 1;
    }
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();

