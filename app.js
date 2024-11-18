window.addEventListener('load', function () {
    const navBtn = document.getElementById("nav-mobile-toggle");
const navLinks = document.getElementById("mobile-nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

    let carBody = document.querySelector('#carBody')
    let all = document.querySelector('#all')
    let name = document.querySelector('name')
    let price = document.querySelector('price')
    let id = document.querySelector('id')
    let count = document.querySelector('count')
    let totalPrice = document.querySelector('#totalPrice');
    let totalCount = document.querySelector('#totalCount');
    let delateAll = document.querySelector('.del-all');
    let clear = document.querySelector('.clear')
    let storeData = localStorage.getItem('cart') 
    // JSON.parse(this.localStorage.getItem('goodsInfo')) || 
    let data = JSON.parse(this.localStorage.getItem('cart'))
function init() {
    let htmlStr = '',
    count = 0,
    total = 0
    data.forEach(function (value,index) {
        htmlStr += `
        <div class="cart">
        <div class="cart-item">
            <input id="${index}" type="checkbox" class="ckh" ${value.state?'checked':''} type="checkbox">
            <div class="cart-item-info">
                <div class="cart-item-name">${value.name}</div>
                <div class="cart-item-price">${value.count * value.price}</div>
                <div class="cart-item-quantity">
                     <button class="add" id="${index}">+</button>
                        <input type="text" style="width:40px" value="${value.count}" />
                        <button class="reduce" id="${index}" >-</button>
                </div>
                <div class="cart-item-remove" id="${index}">
                <div class="del" id="${index}">&times</div>
                </div>
            </div>
           </div>
    </div>

        `

        // 
        if (value.state) {
            count++
            total += value.count * value.price;
        }
    });
    carBody.innerHTML = htmlStr

    all.checked = data.length > 0 && count === data.length;
    totalCount.innerHTML =  count;
    totalPrice.innerHTML = '$' + total
}
    init()
    save()

    carBody.addEventListener('click', function(e) {
        
        if (e.target.className === 'add') {
            data[e.target.id].count++;
            init();
            save()
        } else if (e.target.className === 'reduce') {
            if (data[e.target.id].count == 1) {
                return
            }
            data[e.target.id].count--;
            init();
            save()
        } else if (e.target.className === 'del') {
            data.splice(e.target.id,1)
            init()
            save()
        } else if (e.target.className === 'ckh') {
            data[e.target.id].state = !data[e.target.id].state
            init()
            save()
        } 
    })

    all.addEventListener('click', function() {
    data.forEach(function (value, index) {
        value.state = all.checked
    })
    init();
    save()
    })

    delateAll.addEventListener('click', function () {
        data = data.filter(function (value, index) {
            return !value.state
        })
        init()
        save()
    })

    clear.addEventListener('click', function () {
        console.log(data);
        data = []
        init()
        save()
    })

    function save() {
        this.localStorage.setItem('cart',JSON.stringify(data))
    }

    let addCart = document.querySelector('.addCart')

})

function addToCart (product, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let found = false;

    for(let i = 0; i < cart.length; i++) {
        if (cart[i].product === product) {
            cart[i].quantity += 1;
            found = true;
            break;
        }
    }

    if (!found) {
        cart.push({product:product,price:price,quantity:1});
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cart');
    cartDiv = '';

    if (cart.length === 0) {
        cartDiv.innerHTML = `<p>Your cart is empty</p>`
    } else {
        cartDiv.innerHTML += '<h3>Cart</h3>';
        cartDiv.innerHTML += '<ul>'
        for (let item of cart) {
            cartDiv.innerHTML += `<li>item.product-item.pricex{item.quantity}`
        }
        cartDiv.innerHTML += '<ul>'
        cartDiv.innerHTML += '<p>Total:{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>';

    }
}

window.onload = updateCartUI; 
