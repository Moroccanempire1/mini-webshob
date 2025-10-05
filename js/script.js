let cart = [];

// Product toevoegen aan winkelmand
function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} toegevoegd aan je winkelmand!`);
    updateCart();
}

// Winkelmand updaten
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    if (!cartItems) return; // voorkomt fout op index.html

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - €${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceEl.textContent = total;
}

// Checkout formulier
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Je winkelmand is leeg!');
            return;
        }
        cart = [];
        updateCart();
        document.getElementById('success-msg').style.display = 'block';
    });
}
