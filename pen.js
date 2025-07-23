// Cart toggle
const cartIcon = document.getElementById('cartIcon');
const cartCard = document.getElementById('cartCard');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

let cart = [];

cartIcon.addEventListener('click', () => {
  if (cartCard.style.display === 'block') {
    cartCard.style.display = 'none';
  } else {
    cartCard.style.display = 'block';
  }
});

function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.textContent = `${item.name} - ${item.price} TND`;
    cartItemsContainer.appendChild(div);
    total += item.price;
  });
  cartTotalEl.textContent = `Total: ${total} TND`;
}

document.querySelectorAll('.add-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-product');
    const price = parseInt(button.getAttribute('data-price'));
    cart.push({ name, price });
    updateCartUI();
    alert(`${name} added to cart!`);
  });
});

// Newsletter form submission example (just prevent default)
document.getElementById('newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for subscribing!');
  e.target.reset();
});
