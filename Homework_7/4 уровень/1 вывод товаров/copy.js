"use strict";


const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};


let buttonCollection = document.querySelectorAll('button');
let productPart = document.querySelector('.products');


buttonCollection.forEach(function (button) {
    button.addEventListener('click', clickHandler);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */


function clickHandler(event) {
    productPart.innerHTML = "";
    showCategory(event.target.dataset.type);
}

//вам нужно очищать содержимое .products

//в showCategory надо передать строку с типом категории, тип берите
//из атрибута data-type у кнопки, по которой кликнули.



/**
 * Функция берет товары (объекты) из соответствующего массива phones,
 * tablets или tv. Генерирует разметку, используя getProductMarkup
 * и вставляет в .products
 * @param {string} category сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 */


function showCategory(category) {

    let categoryProducts = products[category];
    let productsDiv = "";
    categoryProducts.forEach(function (product) {
        productsDiv += getProductMarkup(product);
    });
    productPart.insertAdjacentHTML('afterbegin', productsDiv);
}


/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара по аналогии из комментария
 * в верху этого файла.
 */


function getProductMarkup(product) {
    return `
   <div class="product">
   <div>${product.name}</div>
   <img src="${product.imageUrl
        } " alt=""><br>
   <div>${product.price}</div >
       <a href="https://example.com/producs/${product.id}">Подробнее</a>
   </div >
   `;
}
