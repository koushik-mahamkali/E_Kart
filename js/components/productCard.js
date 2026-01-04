export function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ⭐ ${product.rating}
            </div>
            <div class="product-price">
                ₹${product.price}
            </div>
        </div>
    `;
    card.addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}`;
    });
    return card;
}
