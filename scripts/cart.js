document.addEventListener('DOMContentLoaded', () => {

    'use strict';


    const renderCartList = () => {

        const productsListElem = document.querySelector('.cart-list');
        const createCartProduct = (productObj) => {
            let template = document.querySelector("#product_cart");
            let newCardElem = template.content.cloneNode(true);
            newCardElem.querySelector("img").src = productObj.src;
            newCardElem.querySelector("#product_name").innerHTML = productObj.name;
            newCardElem.querySelector("#product_price").innerHTML = productObj.price;
            newCardElem.querySelector("#product_color").innerHTML = productObj.color;
            newCardElem.querySelector("#product_size").innerHTML = productObj.size;
            productsListElem.appendChild(newCardElem);
        };

        productsCartArr.forEach(elem => {
            createCartProduct(elem);
        });

    };

    renderCartList();

});







