document.addEventListener('DOMContentLoaded', function() {
    fetch('js/producten.json')
      .then(response => response.json())
      .then(data => {
        const productListContainer = document.getElementById('products');
        const products = data.data;
  
        products.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('card', product.category.toLowerCase(), 'hide');
  
          const imgContainer = document.createElement('div');
          imgContainer.classList.add('image-container');
  
          const image = document.createElement('img');
          image.setAttribute('src', product.image);
          imgContainer.appendChild(image);
          card.appendChild(imgContainer);
  
          const container = document.createElement('div');
          container.classList.add('container');
  
          const name = document.createElement('h5');
          name.classList.add('product-name');
          name.textContent = product.productName.toUpperCase();
          container.appendChild(name);
  
          const price = document.createElement('h6');
          price.textContent = `€${product.price}`;
          container.appendChild(price);
  
          const button = document.createElement('button');
          button.classList.add('card-button');
          button.textContent = 'Koop Nu';
          container.appendChild(button);
  
          card.appendChild(container);
          productListContainer.appendChild(card);
  
          if (product.productName === 'God Of War') {
            button.classList.add('card-link');
            button.setAttribute('data-url', 'product1.html');
          } else if (product.productName === 'Red dead online') {
            button.classList.add('card-link');
            button.setAttribute('data-url', 'product2.html');
          }
        });
  
        const cardLinks = document.querySelectorAll('.card-link');
        cardLinks.forEach(link => {
          link.addEventListener('click', () => {
            const url = link.getAttribute('data-url');
            window.location.href = url;
          });
        });
  
        document.getElementById('search').addEventListener('click', () => {
          const searchInput = document.getElementById('search-input').value.toUpperCase();
          const elements = document.querySelectorAll('.product-name');
  
          elements.forEach((element, index) => {
            const card = element.closest('.card');
  
            if (element.textContent.toUpperCase().includes(searchInput)) {
              card.classList.remove('hide');
            } else {
              card.classList.add('hide');
            }
          });
        });
  
        filterProduct('all');
      });
  });
  
  function filterProduct(value) {
    const buttons = document.querySelectorAll('.button-value');
  
    buttons.forEach(button => {
      if (value.toUpperCase() === 'ALL' && button.innerText.toUpperCase() === 'ALLES') {
        button.classList.add('active');
      } else if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  
    const elements = document.querySelectorAll('.card');
  
    elements.forEach(element => {
      if (value === 'all') {
        element.classList.remove('hide');
      } else {
        if (element.classList.contains(value.toLowerCase())) {
          element.classList.remove('hide');
        } else {
          element.classList.add('hide');
        }
      }
    });
  }
  