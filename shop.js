import prodact from "./prodact.js"

document.addEventListener('DOMContentLoaded', init)

function init() {
    localStorage.setItem('prodacts', JSON.stringify(prodact))
    function showProdact(arr = []) {
       let listprodact  =  document.querySelector('.prodact')
        let prodactall = arr.map(function (prodact) {
                return `
                <div class="box">
                <div class="cart" data-id='${prodact.id}'>
                    <div class="img"><img src="img/${prodact.img}"></div>
                    <div class="infoCrat">
                        <h3 class="title">${prodact.title}</h3>
                        <span class="price">${prodact.price.toLocaleString('en-US', { style: 'currency', currency: 'MAD' })}</span>
                    </div>

                </div>
                <footer>
                    <div class="add"> <i class="fa-solid fa-cart-shopping"></i> add to cart </div>
                </footer>
            </div>
                `
                
         })
        listprodact.insertAdjacentHTML('beforeend', prodactall.join(""))


     }

     showProdact(prodact)
 
     document.querySelectorAll(".cart").forEach((event) => {
        event.addEventListener("click", function (e) {
            let idProdact = e.currentTarget.dataset.id 
            localStorage.setItem('id', idProdact)
            window.location = 'cart.html'
        })
    })
    

}

