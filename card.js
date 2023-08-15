import prodact from "./prodact.js"

document.addEventListener('DOMContentLoaded', init)
function init() {
  let prodactcart = document.querySelector('.container')

    let id = Number(localStorage.getItem('id'))

let findProdact = prodact.find( (prodacts) =>  prodacts.id === id)

let Livraison = 50
let totalPriceWithShipping  =  findProdact.price + Livraison

let showcart = `

<div class="perent">
<div class="prodactcart">
    <div class="cart-img">
        <img src="img/${findProdact.img}">
    </div>

    <div class="info">
        <h3 class="title">${findProdact.title}</h3>
        <span class="price">${findProdact.price.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })}</span>
        <div class="prenet">
            <div class="btn-num">
                <span id="increment" class="increment">-</span>
                <div id="counting" class="num">1</div>
                <span id="decrement" class="decrement">+</span>

            </div>
            <div class="add"> <i class="fa-solid fa-cart-shopping"></i> add to cart </div>
        </div>


    </div>
</div>

<div class="total-price">
    <div class="subTotal">
        <h4>subTotal</h4>
        <span>${findProdact.price.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })}</span>
    </div>
    <div class="Livraison">
        <h4>Livraison</h4>
        <span>MAD 50</span>
    </div>
    <div class="total">
        <h4>total</h4>
        <span>${totalPriceWithShipping.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })}</span>
    </div>
</div>
</div>


`

prodactcart.insertAdjacentHTML('beforeend', showcart)


let num = 0;
 document.getElementById('increment').addEventListener('click', function () {

  if(num > 0) {
    num--
    apdataPrice()
  }
  

 })

document.getElementById('decrement').addEventListener("click", function () {


  if(counting.innerText >= 10) {
      return 0
  }else {
    num++
    apdataPrice()
  }
})

function apdataPrice() {
let counting = document.getElementById("counting")

let subTotal = document.querySelector(".subTotal span")

let total = document.querySelector(".total span")


  counting.innerText = num + 1
   let price =  findProdact.price * ( num + 1) 
  document.querySelector(".price").innerText = price.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })
 subTotal.textContent = price.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })

 let totalPriceWithShipping  =  price + Livraison
 total.textContent = totalPriceWithShipping.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })
}




}


