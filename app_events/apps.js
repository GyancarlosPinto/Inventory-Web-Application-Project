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
        name: "Vernal Bridal Dress",
        brandName: "Primavera Designs Company",
        productType: "Wedding Dress",
        img: "https://images.nightcafe.studio/jobs/BaXEsvicWNHU5zJFzwxa/JpNIRGoKjc6YQuLEphZl--4--g1zez_2x.jpg?tr=w-1600,c-at_max",
        description: "This enchanting Spring Wedding dress captures the essence of the season with its exquisite floral-inspired design. Delicate blossoms and intricate vines adorn the bodice, creating a sense of natural beauty and elegance. The A-line silhouette and flowing layers of chiffon add a touch of romance, making this gown perfect for a Spring wedding, where love and nature come together in a harmonious celebration.",
        price: `${2232.99}`,
        quantityAvailable: 0,
        seasons: "Spring"
    }

]

// LET currentlySelected equal null
let currentlySelected = null;
// LET currentIndex equal -1
let currentIndex = -1;
// function createProduct with param product used to generate a product card
function createProduct(product) {
    // productContainer handles the creation of overall card with div element and product-card class
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-card");

    // productName handles the creation of products name with a p element and name class
    const productName = document.createElement("p");
    productName.className = "name";
    productName.textContent = product.name;

    // productBrandName handles the creation of products name with a p element and brand-name class
    const productBrandName = document.createElement("p");
    productBrandName.className = "brand-name";
    productBrandName.textContent = product.brandName;

    // Repeat the above process for other elements (productType, productImageUrl, productDescription, productPrice, productQuantityAvailable, seasons)
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

    // productInStock is created with the div element
    const productInStock = document.createElement("div");
    // LET stockReflect equal str In Stock
    let stockReflect = "In Stock";
    // IF quantityAvailable strictly equals 0
    if (product.quantityAvailable === 0) {
        // stockReflect changes to Out of Stock!
        stockReflect = "Out of Stock!"
        // add class out-of-stock!
        productInStock.classList.add("out-of-stock");
    // ELSE IF quantityAvailable is less than or equal 10
    } else if (product.quantityAvailable <= 10) {
        // stockReflect changes to Limited Stock
        stockReflect = "Limited Stock"
        // add class limited-stock
        productInStock.classList.add("limited-stock");
    } else {
        // ELSE add class in-stock
        productInStock.classList.add("in-stock");
    }
    // add class stock to productInStock overall
    productInStock.classList.add("stock");
    // the text content of productInStock equals stockReflect
    productInStock.textContent = stockReflect;
    // add a click event listener to productInStock
    productInStock.addEventListener("click", (event) => {
        // event prevent default to prevent default behavior of event 
        event.preventDefault();
    })

    // CONST editButton contains the created element button for ediitng 
    const editButton = document.createElement("button");
    // gives editButton class name of edit-product
    editButton.className = "edit-product";
    // gives editButton the text content of Edit
    editButton.textContent = "Edit";
    // editButton add event listener allows for a click event to be added to the button
    editButton.addEventListener("click", (event) => {
        // event prevent default to prevent default behavior of event 
        event.preventDefault();
        // currentlySelected now equals whats in productContainer
        currentlySelected = productContainer;
        // currentIndex is now equal to productsList.indexOf param product
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
        // event prevent default to prevent default behavior of event 
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
    // event prevent default to prevent default behavior of event 
    event.preventDefault();

    // CONST name, brandName, productType, img, description, price, quantityAvailable and seasons hold their respective formElement key values
    const name = formElement.productName.value;
    const brandName = formElement.productBrandName.value;
    const productType = formElement.productType.value;
    const img = formElement.productImageUrl.value;
    const description = formElement.productDescription.value;
    const price = formElement.productPrice.value;
    const quantityAvailable = formElement.quantityAvailable.value;
    const seasons = formElement.seasons.value;

    // CONST errorMessage contains the document #error-message
    const errorMessage = document.querySelector("#error-message");
    // IF name, brandName, productType, description, price and quantityAvailable are empty
    if (name === "" || brandName === "" || productType === "" || description === "" || price === 0 || quantityAvailable === 0) {
        // an errorMessage with the text "Please fill out the required fields above!" will appear
        errorMessage.textContent = "Please fill out the required fields above!"
    } else {
        // ELSE once submitted reset the foreElement
        formElement.reset();

        //createProduct with key values listed out below
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
    // event prevent default to prevent default behavior of event 
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

      // querySelector #edit-product-form to add hidden class to it 
      document.querySelector("#edit-product-form").classList.add("hidden");

      // LET stockReflect equal str In Stock
      let stockReflect = "In Stock";
      const stock = currentlySelected.querySelector(".stock")
      // .remove method is used to remove classes in-stock, limited-stock and out-of-stock
      stock.classList.remove("out-of-stock")
      stock.classList.remove("limited-stock")
      stock.classList.remove("in-stock")
    // IF quantityAvailable strictly equals 0
    if (quantityField === 0) {
        // stockReflect changes to Out of Stock!
        stockReflect = "Out of Stock!"
        // add class out-of-stock!
        stock.classList.add("out-of-stock");
    // ELSE IF quantityAvailable is less than or equal 10
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
    // event prevent default to prevent default behavior of event 
    event.preventDefault();
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
})

// FOR product iterates through productsList 
for (const product of productsList) {
    // createProduct function with param product creates the product cards for productsList
    createProduct(product);
}
