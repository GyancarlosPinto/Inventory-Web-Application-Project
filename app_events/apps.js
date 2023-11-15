const productsList = [
    {
        name: "Dracula Beer Keg Dispenser",
        brandName: "Fangsylvania Brewing Company",
        productType: "Kegerator",
        img: "https://images.nightcafe.studio/jobs/0dcuv9GCYC8TXqwlaJEG/0dcuv9GCYC8TXqwlaJEG--1--nqej0.jpg?tr=w-1600,c-at_max",
        description: "Elevate your Halloween festivities to spine-chilling heights with the Dracula Beer Keg Dispenser Kegerator. This hauntingly unique appliance will keep your favorite lagers, ales, stouts, or IPAs perfectly chilled as you embrace the ghoulish spirit of the season. With its macabre yet stylish design, it's not just a kegerator; it's a conversation starter that will make your Halloween party a night to remember.",
        price: `${1392.00}`,
        quantityAvailable: 19,
        seasons: "Autumn"
    },

    {
        name: "Dia de los Muertos Skull Mask",
        brandName: "Calaveras y Huesos Inc.",
        productType: "Festival Mask",
        img: "https://images.nightcafe.studio/jobs/QfK3pqSshqaI0Wzc7d4N/QfK3pqSshqaI0Wzc7d4N--1--byyw4_2x.jpg?tr=w-1600,c-at_max",
        description: "A phenomenal Dia de los Muertos mask made by some of Calaveras y Huesos Inc. best in house designers. Celebrate Dia de los Muertos and remember your past loved ones in style with this Royal Blue and Gold; Gesso and Gold Leaf Dia de los Muertos Skull Mask",
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

let currentlySelected = null;
let currentIndex = -1;

function createProduct(product) {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    const productName = document.createElement("p");
    productName.className = "name";
    productName.textContent = product.name;

    const productBrandName = document.createElement("p");
    productBrandName.className = "brand-name";
    productBrandName.textContent = product.brandName;

    const productType = document.createElement("p");
    productType.className = "type";
    productType.textContent = `Product Type: ${product.productType}`;

    const productImageUrl = document.createElement("img");
    productImageUrl.className = "card-img";
    productImageUrl.setAttribute("src", product.img);

    const productDescription = document.createElement("p");
    productDescription.className = "description";
    productDescription.textContent = `Description: ${product.description}`;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = `Price: $${product.price}`;

    const productQuantityAvailable = document.createElement("p");
    productQuantityAvailable.className = "quantity";
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

    const editButton = document.createElement("button");
    editButton.className = "edit-product";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (event) => {
        event.preventDefault();
        currentlySelected = productContainer;
        currentIndex = productsList.indexOf(product);

        document.querySelector(".hidden").classList.remove("hidden");
        const nameField = document.querySelector("#edit-product-form input[name='productName']");
        nameField.value = product.name;
        const brandField = document.querySelector("#edit-product-form input[name='productBrandName']");
        brandField.value = product.brandName;
        const typeField = document.querySelector("#edit-product-form input[name='productType']");
        typeField.value = product.productType;
        const imgField = document.querySelector("#edit-product-form input[name='productImageUrl']");
        imgField.value = product.img;
        const descField = document.querySelector("#edit-product-form textarea[name='productDescription']");
        descField.value = product.description;
        const priceField = document.querySelector("#edit-product-form input[name='productPrice']");
        priceField.value = Number(product.price);
        const quantityField = document.querySelector("#edit-product-form input[name='quantityAvailable']");
        quantityField.value = Number(product.quantityAvailable);
        const seasonField = document.querySelector("#edit-product-form select[name='seasons']");
        seasonField.value = product.seasons;
    })

    const removeButton = document.createElement("button");
    removeButton.className = "remove-product";
    removeButton.textContent = "Remove"
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
    cardFooter.append(editButton, removeButton);

    productContainer.append(
        productName,
        productBrandName,
        productImageUrl,
        productDescription,
        cardInfo,
        productInStock,
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

const editedProduct = document.querySelector("#edit-product-form");
editedProduct.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nameField = document.querySelector("#edit-product-form input[name='productName']").value;
    const brandField = document.querySelector("#edit-product-form input[name='productBrandName']").value;
    const typeField = document.querySelector("#edit-product-form input[name='productType']").value;
    const imgField = document.querySelector("#edit-product-form input[name='productImageUrl']").value;
    const descField = document.querySelector("#edit-product-form textarea[name='productDescription']").value;
    const priceField = Number(document.querySelector("#edit-product-form input[name='productPrice']").value);
    const quantityField = Number(document.querySelector("#edit-product-form input[name='quantityAvailable']").value);
    const seasonField = document.querySelector("#edit-product-form select[name='seasons']").value;

    const updatedProduct = {
        name: nameField,
        brandName: brandField,
        productType: typeField,
        img: imgField,
        description: descField,
        price: priceField,
        quantityAvailable: quantityField,
        seasons: seasonField
      };

      productsList[currentIndex] = updatedProduct

      currentlySelected.querySelector(".name").textContent = nameField;
      currentlySelected.querySelector(".brand-name").textContent = brandField;
      currentlySelected.querySelector(".type").textContent = typeField;
      currentlySelected.querySelector(".card-img").textContent = imgField;
      currentlySelected.querySelector(".description").textContent = descField;
      currentlySelected.querySelector(".price").textContent = priceField;
      currentlySelected.querySelector(".quantity").textContent = quantityField;
      currentlySelected.querySelector(".seasons").textContent = seasonField;

      document.querySelector("#edit-product-form").classList.add("hidden");

      let stockReflect = "In Stock";
      const stock = currentlySelected.querySelector(".stock")
      stock.classList.remove("out-of-stock")
      stock.classList.remove("limited-stock")
      stock.classList.remove("in-stock")
    if (quantityField === 0) {
        stockReflect = "Out of Stock!"
        stock.classList.add("out-of-stock");
    } else if (quantityField <= 10) {
        stockReflect = "Limited Stock"
        stock.classList.add("limited-stock");
    } else {
        stock.classList.add("in-stock");
    }
    stock.textContent = stockReflect;

    editedProduct.reset();
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

