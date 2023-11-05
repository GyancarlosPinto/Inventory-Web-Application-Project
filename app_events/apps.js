const productsList = [
    {
        productName: "Dracula Beer Keg Dispensary",
        brandName: "Fangsylvania Brewing Company",
        productType: "Kegerator",
        price: 392.00,
        inStock: 79,
        season: "Autumn"
    }
]

function createProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productName = document.createElement("strong");
    productName.textContent = product.name;
}