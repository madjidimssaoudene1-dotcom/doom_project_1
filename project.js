// Select all products
const products = document.querySelectorAll(".card");

// Select total price element
const totalDisplay = document.querySelector(".total");

// Function to update total price
function updateTotal() {
let total = 0;

document.querySelectorAll(".card").forEach((card) => {
    const unitPrice = parseInt(
    card.querySelector(".unit-price").textContent
    );
    const quantity = parseInt(
    card.querySelector(".quantity").textContent
    );

    total += unitPrice * quantity;
});

totalDisplay.textContent = total + " $";
}

// Loop through each product
products.forEach((card) => {
const plusBtn = card.querySelector(".fa-plus-circle");
const minusBtn = card.querySelector(".fa-minus-circle");
const trashBtn = card.querySelector(".fa-trash-alt");
const heartBtn = card.querySelector(".fa-heart");
const quantitySpan = card.querySelector(".quantity");

  // ➕ Increase quantity
plusBtn.addEventListener("click", () => {
    quantitySpan.textContent++;
    updateTotal();
});

  // ➖ Decrease quantity
minusBtn.addEventListener("click", () => {
    if (quantitySpan.textContent > 0) {
    quantitySpan.textContent--;
    updateTotal();
    }
});

  // 🗑️ Delete product
trashBtn.addEventListener("click", () => {
    card.remove();
    updateTotal();
});

  // ❤️ Like product (toggle color)
heartBtn.addEventListener("click", () => {
    if (heartBtn.style.color === "red") {
    heartBtn.style.color = "black";
    } else {
    heartBtn.style.color = "red";
    }
});
});