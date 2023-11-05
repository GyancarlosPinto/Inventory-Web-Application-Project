const productsList = [
    {
        name: "Dracula Beer Keg Dispenser",
        brandName: "Fangsylvania Brewing Company",
        productType: "Kegerator",
        img: "https://images.nightcafe.studio/jobs/0dcuv9GCYC8TXqwlaJEG/0dcuv9GCYC8TXqwlaJEG--1--nqej0.jpg?tr=w-1600,c-at_max",
        description: "",
        price: 1392.00,
        inStock: 79,
        seasons: "Autumn"
    }
]

function createProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productName = document.createElement("strong");
    productName.textContent = product.name;

    const productBrandName = document.createElement("em");
    productBrandName.textContent = product.brandName;

    const productType = document.createElement("p");
    productType.textContent = product.productType;

    const productImageUrl = document.createElement("img");
    productImageUrl.setAttribute("src", product.img);

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    const productInStock = document.createElement("p");
    productInStock.textContent = product.inStock;

    const seasons = document.createElement("p");
    seasons.textContent = product.seasons;

    productContainer.append(
        productImageUrl,
        productName,
        productBrandName,
        productType,
        productDescription,
        productPrice,
        productInStock,
        seasons,
    )

    const main = document.querySelector("main");
    main.append(productContainer)
}

const formElement = document.querySelector("#new-product-form");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = formElement.productName.value;
    const brandName = formElement.productBrandName.value;
    const productType = formElement.productType.value;
    const img = formElement.productImageUrl.value;
    const description = formElement.productDescription.value;
    const price = formElement.productPrice.value;
    const inStock = formElement.productInStock.value;
    const seasons = formElement.seasons.value;

    createProduct({
        name,
        brandName,
        productType,
        img,
        description,
        price,
        inStock,
        seasons
    })
})

for (const product of productsList) {
    createProduct(product);
}

