// Haal winkelmand uit localStorage of maak lege array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product toevoegen aan winkelmand
function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // opslaan
    alert(`${product} toegevoegd aan je winkelmand!`);
    updateCart();
}

// Winkelmand updaten
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    if (!cartItems || !totalPriceEl) return; // voorkomt fout op index.html

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - €${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceEl.textContent = total.toFixed(2);
}

// Checkout formulier
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    updateCart(); // toon items bij laden van checkout.html

    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Je winkelmand is leeg!');
            return;
        }

        // Bestelling geplaatst, winkelmand leegmaken
        cart = [];
        localStorage.removeItem('cart');
        updateCart();
        document.getElementById('success-msg').style.display = 'block';
    });
}

// Zorg dat winkelmand wordt bijgewerkt bij het laden van de pagina
document.addEventListener('DOMContentLoaded', updateCart);
