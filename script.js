// ==========================
// MOBILE NAVIGATION
// ==========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});

// ==========================
// CART
// ==========================

const cartButtons = document.querySelectorAll(".cart-btn");

const cartIcon = document.getElementById("cartIcon");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

const cartItemsContainer = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
const cartCountElement = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("coffeeCart")) || [];

// Open Cart

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
});

// Close Cart

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});

// Add Product

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {

            cart.push({
                id,
                name,
                price,
                quantity: 1
            });

        }

        saveCart();
        renderCart();

        cartSidebar.classList.add("active");
    });

});

// ==========================
// RENDER CART
// ==========================

function renderCart() {

    cartItemsContainer.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <h4>${item.name}</h4>

            <p>
                $${item.price.toFixed(2)}
            </p>

            <div class="quantity-controls">

                <button onclick="decreaseQuantity('${item.id}')">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity('${item.id}')">
                    +
                </button>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem('${item.id}')"
            >
                Remove
            </button>
        `;

        cartItemsContainer.appendChild(cartItem);

    });

    totalPriceElement.textContent = total.toFixed(2);
    cartCountElement.textContent = count;
}

// ==========================
// INCREASE QUANTITY
// ==========================

function increaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (item) {

        item.quantity++;

        saveCart();
        renderCart();
    }
}

// ==========================
// DECREASE QUANTITY
// ==========================

function decreaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();
}

// ==========================
// REMOVE ITEM
// ==========================

function removeItem(id) {

    cart = cart.filter(product => product.id !== id);

    saveCart();
    renderCart();
}

// ==========================
// LOCAL STORAGE
// ==========================

function saveCart() {

    localStorage.setItem(
        "coffeeCart",
        JSON.stringify(cart)
    );
}

// ==========================
// CHECKOUT BUTTON
// ==========================

const checkoutButton = document.querySelector(".checkout-btn");

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty.");
        return;
    }

    alert(
        "Order placed successfully! ☕\nThank you for choosing Brew Haven."
    );

    cart = [];

    saveCart();
    renderCart();

    cartSidebar.classList.remove("active");
});

// ==========================
// INITIAL LOAD
// ==========================

renderCart();