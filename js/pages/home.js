import { createProductCard } from "../components/productCard.js";
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("most-loved-grid");
    const products = [
        {
            id: "p1",
            name: "Wall Clock",
            price: 1999,
            rating: 4.2,
            image: "assets/images/products/clock.png"
        },
        {
            id: "p2",
            name: "Table Lamp",
            price: 2499,
            rating: 4.6,
            image: "assets/images/products/lamp.png"
        },
        {
            id: "p3",
            name: "Decor Vase",
            price: 1499,
            rating: 4.4,
            image: "assets/images/products/vase.png"
        },
        {
            id: "p4",
            name: "Wall Art",
            price: 2999,
            rating: 4.8,
            image: "assets/images/products/art.png"
        }
    ];
    products.forEach(p => {
        grid.appendChild(createProductCard(p));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("appliances-grid");
    const products = [
        {
            id: "p1",
            name: "Wall Clock",
            price: 1999,
            rating: 4.2,
            image: "assets/images/products/clock.png"
        },
        {
            id: "p2",
            name: "Table Lamp",
            price: 2499,
            rating: 4.6,
            image: "assets/images/products/lamp.png"
        },
        {
            id: "p3",
            name: "Decor Vase",
            price: 1499,
            rating: 4.4,
            image: "assets/images/products/vase.png"
        },
        {
            id: "p4",
            name: "Wall Art",
            price: 2999,
            rating: 4.8,
            image: "assets/images/products/art.png"
        }
    ];
    products.forEach(p => {
        grid.appendChild(createProductCard(p));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("home-decor-grid");
    const products = [
        {
            id: "p1",
            name: "Wall Clock",
            price: 1999,
            rating: 4.2,
            image: "assets/images/products/clock.png"
        },
        {
            id: "p2",
            name: "Table Lamp",
            price: 2499,
            rating: 4.6,
            image: "assets/images/products/lamp.png"
        },
        {
            id: "p3",
            name: "Decor Vase",
            price: 1499,
            rating: 4.4,
            image: "assets/images/products/vase.png"
        },
        {
            id: "p4",
            name: "Wall Art",
            price: 2999,
            rating: 4.8,
            image: "assets/images/products/art.png"
        }
    ];
    products.forEach(p => {
        grid.appendChild(createProductCard(p));
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("start-at-150-grid");
    const products = [
        {
            id: "p1",
            name: "Wall Clock",
            price: 1999,
            rating: 4.2,
            image: "assets/images/products/clock.png"
        },
        {
            id: "p2",
            name: "Table Lamp",
            price: 2499,
            rating: 4.6,
            image: "assets/images/products/lamp.png"
        },
        {
            id: "p3",
            name: "Decor Vase",
            price: 1499,
            rating: 4.4,
            image: "assets/images/products/vase.png"
        },
        {
            id: "p4",
            name: "Wall Art",
            price: 2999,
            rating: 4.8,
            image: "assets/images/products/art.png"
        }
    ];
    products.forEach(p => {
        grid.appendChild(createProductCard(p));
    });
});
