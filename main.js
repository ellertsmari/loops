"use strict";
{
    // array and object
    const products = [
        {
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7KiD8XN8SD2l4hf1292_RasQyWdwk3Gm0g&s",
            name: "Milk",
            price: 100,
            currency: "ISK",
            isAvailable: true,
        },
        {
            pictureURL: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b.jpg",
            name: "Bread",
            price: 200,
            currency: "ISK",
            isAvailable: false,
        },
        {
            pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdqNY9EtBxIqWNtsv4YW97rCb68EO1mcTFQ&s",
            name: "Butter",
            price: 300,
            currency: "ISK",
            isAvailable: true,
        },
    ];
    let total = 0;
    let allProducts = "for the ";
    const productsDiv = document.getElementById("products");
    let cardsHtml = '<div class="product-container"> ';
    for (let i = 0; i < products.length; i++) {
        if (products[i].isAvailable) {
            cardsHtml += "<div>";
            cardsHtml += `<img class="picture" src="${products[i].pictureURL}" />`;
            cardsHtml += `<p> ${products[i].name}: ${products[i].price} ${products[i].currency}</p>`;
            cardsHtml += "</div>";
            total += products[i].price;
            allProducts += products[i].name + ", ";
        }
    }
    cardsHtml += "</div>";
    if (productsDiv)
        productsDiv.innerHTML = cardsHtml;
    console.log("finished looping");
}
