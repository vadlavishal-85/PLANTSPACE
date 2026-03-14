document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        if (cartCount) {   // ✅ prevents crash
            cartCount.textContent = cart.length;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    updateCartCount();

    document.addEventListener("click", function (e) {

        if (e.target.classList.contains("add-btn")) {

            const card = e.target.closest(".product-card");

            if (!card) return;  // extra safety

            const name = card.querySelector("h3")?.innerText || "Plant";

            const priceElement =
                card.querySelector("strong") ||
                card.querySelector(".price");

            const price = priceElement ? priceElement.innerText : "";

            const product = { name, price };

            cart.push(product);

            updateCartCount();

            // Change button
            e.target.innerText = "Added ✓";
            e.target.style.background = "#1b5e20";
            e.target.disabled = true;
        }
    });

});