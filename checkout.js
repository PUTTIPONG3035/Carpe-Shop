let info = document.querySelector('.container-2');
let sum = document.querySelector('.box');
var pricesum = 0;
var forCheck = localStorage.getItem('CART');
let cartt = document.querySelector('.cart');
cartt.style.display = "none";

if (localStorage.getItem('CART').length > 3) {
    carts.forEach((item) => {
        var count = item.numberOfUnits;
        var price = item.price;
        if (item.id <= 15) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>เครป${item.menu}</p>แป้ง : ${item.flour}
    <br>ท้อปปิ้ง : ${item.topping}</div>
    <div class="info-price"><p id='ckeckout-menu'>${price+item.topPrice} x ${item.numberOfUnits} = ${count * (item.topPrice+price)}</p></div></div>
            `
            pricesum += count * (item.topPrice+price);
        }
        else if (item.id == 16) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>ชุดสุดคุ้ม ${item.menu}</p>ไส้เครป : ${item.menu}</div>
    <div class="info-price"><p id='ckeckout-menu'>${item.topPrice} x ${item.numberOfUnits} = ${count * item.topPrice}</p></div></div>
            `
            pricesum += count * item.topPrice;
        }
        else if (item.id == 17) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>ชุดสุดคุ้ม ${item.menu}</p></div>
    <div class="info-price"><p id='ckeckout-menu'>${item.price} x ${item.numberOfUnits} = ${count * price}</p></div></div>
            `
            pricesum += count * price;
        }
        else if (item.id == 18) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>ชุดสุดคุ้ม ${item.menu}</p>ไส้เครป : ${item.crape}
        <br>โตเกียว : ${item.tokyo}<br>น้ำ : ${item.water}</div>
    <div class="info-price"><p id='ckeckout-menu'>${item.topPrice} x ${item.numberOfUnits} = ${count * item.topPrice}</p></div></div>
            `
            pricesum += count * item.topPrice;
        }
        else if (item.id == 19) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>ชุดสุดคุ้ม ${item.menu}</p></div>
    <div class="info-price"><p id='ckeckout-menu'>${item.price} x ${item.numberOfUnits} = ${count * item.price}</p></div></div>
            `
            pricesum += count * item.price;
        }
        else if (item.id == 20) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>ชุดสุดคุ้ม ${item.menu}</p>ไส้เครป : ${item.crape}</div>
    <div class="info-price"><p id='ckeckout-menu'>${item.topPrice} x ${item.numberOfUnits} = ${count * item.topPrice}</p></div></div>
            `
            pricesum += count * item.topPrice;
        }
        else if (item.id <= 29) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>เครื่องดื่ม ${item.menu}</p>ความหวาน : ${item.sweet}</div>
    <div class="info-price"><p id='ckeckout-menu'>${price} x ${item.numberOfUnits} = ${count * price}</p></div></div>
            `
            pricesum += count * price;

        }
        else if (item.id == 30) {
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>เครื่องดื่ม ${item.menu}</p>${item.sweet}</div>
    <div class="info-price"><p id='ckeckout-menu'>${price} x ${item.numberOfUnits} = ${count * price}</p></div></div>
            `
            pricesum += count * price;

        } else if (item.id > 30){
            info.innerHTML += `<div class="info"><div class="info-menu"><p id='ckeckout-menu'>โตเกียว${item.menu}</p>ขนาด : ${item.size}</div>
    <div class="info-price"><p id='ckeckout-menu'>${item.topPrice+price} x ${item.numberOfUnits} = ${count * (item.topPrice+price)}</p></div></div>
            `
            pricesum += count * (item.topPrice+price);
        }
    })
} else {
    info.innerHTML += `<div class="emptyCart">ท่านยังไม่ได้ทำการเลือกสินค้า</div>
        `

}

sum.innerHTML += `${pricesum} บาท`;
function clearData() {
    if (localStorage.getItem('CART').length > 3) {
        window.localStorage.clear();
        alert("คุณได้ทำการสั่งซื้อสินค้าเรียบร้อย รอรับสินค้าได้เลย");
        updateCart();
    }
    else {
        alert("กรุณาเลือกสินค้าก่อนทำการสั่งซื้อ");
    }
}
