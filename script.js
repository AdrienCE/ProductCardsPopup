
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');

    previewBox.forEach(preview => {

      let target = preview.getAttribute('data-target');

      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {    
    close.classList.remove('active');   
    previewContainer.style.display = 'none';
  };
});


document.querySelector('.cart-container').onclick = () => {  
  document.querySelector('.cart-container').style.display = 'none';
};


document.querySelectorAll('.products-container .cart').forEach(cartButton => {
  cartButton.onclick = (event) => {    
    event.preventDefault(); 
    document.querySelector('.cart-container').style.display = 'block';
  };
});

document.querySelectorAll('.products-container .cart').forEach(cartButton => {
  cartButton.onclick = (event) => {
    event.preventDefault();
    document.querySelector('.cart-container').style.display = 'block';
  };
});
