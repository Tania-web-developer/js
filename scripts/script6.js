document.addEventListener('DOMContentLoaded', () => {

    'use strict';


    //////////////#1

    const galery = () => {
        const imgElems = document.querySelectorAll(".gallery-img");
        const bigImgContainerElem = document.querySelector("#big_picture");
        const bigImgElem = document.createElement('img');


        imgElems.forEach((img, i) => {

            img.addEventListener('click', (e) => {
                const target = e.target;
                bigImgElem.src = `./img/image__${i + 1}.jpg`;
                console.log(bigImgElem.src);
                bigImgElem.onload = () => {
                    bigImgContainerElem.innerHTML = '';
                    bigImgContainerElem.appendChild(bigImgElem);
                }
                bigImgElem.onerror = () => {
                    bigImgContainerElem.innerHTML = 'Картинки в большом формате не существует';
                }


            });
        });

    }



    /////////////#2

    const productsCartArr = [];

    const renderProductsList = () => {
        const productsListElem = document.querySelector('.catalog-list');
        productsArr.forEach(elem => {
            createCard(elem);
        });
        function createCard(productObj) {
            let template = document.querySelector("#card");
            let newCardElem = template.content.cloneNode(true);
            newCardElem.querySelector("img").src = productObj.src;
            newCardElem.querySelector("#name").innerHTML = productObj.name;
            newCardElem.querySelector("#price").innerHTML = `price: $${productObj.price}`;
            productsListElem.appendChild(newCardElem);

        };
    };

    const addToCart = () => {
        const productsListElem = document.querySelector('.cart-list');
        const addCartBtnElems = document.querySelectorAll("#add_cart_btn");
        const totalElem = document.querySelector('#total-cart');
        
        const setQuantity = (arr) => {
            const inpElems = document.querySelectorAll('#product_quantity');
            inpElems.forEach((inp, i) => {
                inp.addEventListener('change', (e) => {
                    const target = e.target;
                    console.log(target.value);
                    console.log(e);
                    arr[i].quantity = parseInt(target.value);
                    console.log(arr);
                    getTotal(arr);
                });

            });
        };

        const getTotal = (arr) => {
            const total = arr.reduce((total, item, index) => {
                console.log(total);
                return total + (parseFloat(item.price) * item.quantity);
            }, 0);

            totalElem.innerHTML = `Total sum: $${total}`;
        }


        addCartBtnElems.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (!productsCartArr.find((item) => item.product_id === productsArr[i].product_id)) {
                    let template = document.querySelector("#product_cart");
                    let cartElem = template.content.cloneNode(true);
                    cartElem.querySelector("img").src = productsArr[i].src;
                    cartElem.querySelector("#product_name").innerHTML = `${productsArr[i].brand} / 
                    ${productsArr[i].name}`;
                    cartElem.querySelector("#product_price").innerHTML = `price: $ ${productsArr[i].price}`;
                    cartElem.querySelector("#product_color").innerHTML = `color: ${productsArr[i].color}`;
                    cartElem.querySelector("#product_size").innerHTML = `size:${productsArr[i].size}`;
                    productsListElem.appendChild(cartElem);
                    productsCartArr.push({
                        product_id: productsArr[i].product_id,
                        brand: productsArr[i].brand,
                        name: productsArr[i].name,
                        src: productsArr[i].src,
                        description: productsArr[i].description,
                        price: productsArr[i].price,
                        color: productsArr[i].color,
                        size: productsArr[i].size,
                        quantity: 1,
                    });
                    getTotal(productsCartArr);
                    setQuantity(productsCartArr);



                } else {
                    alert('This product have already added in cart');
                }

            });


        });

    };

    ///////////////#3
    const slider = () => {

        const btnNextElem = document.querySelector(".slider-button-next");
        const btnPrevElem = document.querySelector(".slider-button-prev");
        const imgElem = document.querySelector(".slider-img");
        const pElem = document.querySelector(".slider-p");
        let i = 0;
        console.log(productsArr[0].src);
        imgElem.src = productsArr[0].src;
        btnNextElem.onclick = () => {
            i++;
            if (i === productsArr.length - 1) {
                i = 0;
            }

            imgElem.src = productsArr[i].src;
            pElem.innerHTML = productsArr[i].name;
        };

        btnPrevElem.onclick = () => {
            i--;
            if (i < 0) {
                i = productsArr.length - 1;
            }

            imgElem.src = productsArr[i].src;
            pElem.innerHTML = productsArr[i].name;
        };
    };

    galery();
    renderProductsList();
    addToCart();
    slider();
});







