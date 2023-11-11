const productsList = [
    {
        name: "Dracula Beer Keg Dispenser",
        brandName: "Fangsylvania Brewing Company",
        productType: "Kegerator",
        img: "https://images.nightcafe.studio/jobs/0dcuv9GCYC8TXqwlaJEG/0dcuv9GCYC8TXqwlaJEG--1--nqej0.jpg?tr=w-1600,c-at_max",
        description: "Keep your lager, ale, stout or IPA cool to the bones during the ghoully season with this Dracula Beer Keg Dispenser Kegerator.",
        price: `${1392.00}`,
        quantityAvailable: 19,
        seasons: "Autumn"
    },

    {
        name: "Dia de los Muertos Skull Mask",
        brandName: "Calaveras y Huesos Inc.",
        productType: "Festival Mask",
        img: "https://images.nightcafe.studio/jobs/QfK3pqSshqaI0Wzc7d4N/QfK3pqSshqaI0Wzc7d4N--1--byyw4_2x.jpg?tr=w-1600,c-at_max",
        description: "A phenomenal mask made by some of Calaveras y Huesos Inc. best in house designers. Celebrate Dia de los Muertos and remember your past loved ones in style. With this Royal Blue and Gold; Gesso and Gold Leaf Dia de los Muertos Skull Mask",
        price: `${272.50}`,
        quantityAvailable: 1,
        seasons: "Autumn"
    },

    {
        name: "Vernal Bride Dress",
        brandName: "Primavera Designs Company",
        productType: "Wedding Dress",
        img: "https://images.nightcafe.studio/jobs/BaXEsvicWNHU5zJFzwxa/JpNIRGoKjc6YQuLEphZl--4--g1zez_2x.jpg?tr=w-1600,c-at_max",
        description: "This enchanting Spring Wedding dress captures the essence of the season with its exquisite floral-inspired design. Delicate blossoms and intricate vines adorn the bodice, creating a sense of natural beauty and elegance. The A-line silhouette and flowing layers of chiffon add a touch of romance, making this gown perfect for a Spring wedding, where love and nature come together in a harmonious celebration.",
        price: `${2232.99}`,
        quantityAvailable: 0,
        seasons: "Spring"
    }

]

function createProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productBrandName = document.createElement("p");
    productBrandName.textContent = product.brandName;

    const productType = document.createElement("p");
    productType.textContent = `Product Type: ${product.productType}`;

    const productImageUrl = document.createElement("img");
    productImageUrl.setAttribute("src", product.img);

    const productDescription = document.createElement("p");
    productDescription.className = "description";
    productDescription.textContent = `Description: ${product.description}`;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price}`;

    const productQuantityAvailable = document.createElement("p");
    productQuantityAvailable.textContent = `Quantity Available: ${product.quantityAvailable}`;

    const seasons = document.createElement("p");
    seasons.className = "seasons"
    seasons.textContent = `Season: ${product.seasons}`;

    const productInStock = document.createElement("div");
    let stockReflect = "In Stock";
    if (product.quantityAvailable === 0) {
        stockReflect = "Out of Stock!"
        productInStock.classList.add("out-of-stock");
    } else if (product.quantityAvailable <= 10) {
        stockReflect = "Limited Stock"
        productInStock.classList.add("limited-stock");
    } else {
        productInStock.classList.add("in-stock");
    }
    productInStock.classList.add("stock");
    productInStock.textContent = stockReflect;
    productInStock.addEventListener("click", (event) => {
        event.preventDefault();
    })

    const removeButton = document.createElement("button");
    removeButton.className = "remove-product";
    removeButton.textContent = "Remove Product"
    removeButton.addEventListener("click", (event) => {
        event.preventDefault();
        productContainer.remove();
    })

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    cardInfo.append(        
        productType,
        productPrice,
        productQuantityAvailable,
        seasons
        );

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    cardFooter.append(productInStock, removeButton);

    productContainer.append(
        productName,
        productBrandName,
        productImageUrl,
        productDescription,
        cardInfo,
        cardFooter
    )

    const main = document.querySelector("main");
    main.prepend(productContainer)
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
    const quantityAvailable = formElement.quantityAvailable.value;
    const seasons = formElement.seasons.value;

    const errorMessage = document.querySelector("#error-message");

    if (name === "" || brandName === "" || productType === "" || description === "" || price === 0 || quantityAvailable === 0) {
        errorMessage.textContent = "Please fill out the required fields above!"
    } else {
        formElement.reset();

        createProduct({
            name,
            brandName,
            productType,
            img,
            description,
            price,
            quantityAvailable,
            seasons,
        })
    }
})

const main = document.querySelector("main");
const clearCatalogue = document.querySelector("#remove-button");
clearCatalogue.addEventListener("click", (event) => {
    event.preventDefault();
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
})

for (const product of productsList) {
    createProduct(product);
}

