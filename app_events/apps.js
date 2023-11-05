const productsList = [
    {
        productName: "Dracula Beer Keg Dispenser",
        brandName: "Fangsylvania Brewing Company",
        productType: "Kegerator",
        price: 1392.00,
        inStock: 79,
        season: "Autumn"
    }
]

function createProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productImageElement = document.createElement("img");
    productImageElement.setAttribute("src", product.img);

    const productName = document.createElement("strong");
    productName.textContent = product.name;
}

createProduct();