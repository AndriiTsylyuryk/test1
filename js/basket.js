const PRODUCT_LS = "basket";
const container = document.querySelector(".js-list")
const totalPrice = document.querySelector(".js-total-price")
const clear = document.querySelector(".js-clear");
const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || []; 
let totalCost;

if (products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, {qty, price }) => acc += qty * price, 0)
}
// console.log(totalCost)
totalPrice.textContent = totalCost ? `price ${totalCost} ` : "Empty"


container.insertAdjacentHTML("beforeend", createMarkup(products))

function createMarkup(arr) {
    return arr.map(({ img, name, price, qty }) =>
        `<li class ="cart-item">
        <img src = ${img} alt="${name} class="product-image">
        <h2>${name}</h2>
        <p>Quantity${qty}</p>
        <p>proce${price * qty}</p>
         </li>
        `
    ).join("");
}

clear.addEventListener("click", handleClick)

function handleClick() {
    localStorage.removeItem(PRODUCT_LS);
    window.location.href = "shop.html"
}