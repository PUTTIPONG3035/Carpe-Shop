let shopContent = document.querySelector('.shop-content');
let cart = document.querySelector('.cart');
let cartIcon = document.querySelector('.cart-icon');
let closeCart = document.querySelector('#close-cart');


cartIcon.onclick = () => {
    cart.classList.add("active");
}

closeCart.onclick = () => {
    cart.classList.remove("active");
}


function categoryProducts(value) {
    shopContent.innerHTML = "";

    products.forEach((product) => {
        if (value == product.category) {
            shopContent.innerHTML += `
        <div class='product-box'>
            <img src='${product.img}' class='product-img'>
            <h1 class='product-title'>${product.menu}</h1>
            <button onclick='addToCart(${product.id})' class='btn-price'>
                <span class='price'>${product.price}</span>
                <i class='bx bx-shopping-bag add-cart' ></i>
            </button>
        </div>
        `;
        }
        else if (value == "") {
            shopContent.innerHTML += `
        <div class='product-box'>
            <img src='${product.img}' class='product-img'>
            <h1 class='product-title'>${product.menu}</h1>
            <button onclick='addToCart(${product.id})' class='btn-price'>
                <span class='price'>${product.price}</span>
                <i class='bx bx-shopping-bag add-cart' ></i>
            </button>
        </div>
            `;
        }
    })
}
function allProducts() {
    products.forEach((product) => {
        shopContent.innerHTML += `
        <div class='product-box'>
            <img src='${product.img}' class='product-img'>
            <h1 class='product-title'>${product.menu}</h1>
            <button onclick='addToCart(${product.id})' class='btn-price'>
                <span class='price'>${product.price}</span>
                <i class='bx bx-shopping-bag add-cart' ></i>
            </button>
        </div>
    `
    });
}

allProducts(
);
