let showMenu = document.querySelector('.contain');


function addToCart(value) {
    showMenu.innerHTML = "";
    document.querySelector('.footer').innerHTML = "";
    
    products.forEach((product) => {
        if (product.id == value) {
            if (value <= 15) {
                //crap
                showMenu.innerHTML += `<div class="menu-container">
                <div class="picmenu">
                    <!-- left container -->
                    <img src="${product.img}" width="70%">
                    <br><br>
                    <label for="name"><b>${product.menu}</b></label><hr>
                    <br>
                    <label for="detail">${product.description}</label>
                </div>
                <div class="optionmain">
                    <!-- right container -->
                    แป้งเครป
                    <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" onclick="swax(1)" width="20px" align="right" id="drop1" class="dropdown">
                    <hr>
                    <div id="flour">
                        <input type="radio" name="flour" class="form-check-input" id="Vanila" checked>วนิลา<br>
                        <input type="radio" name="flour" class="form-check-input" id="Charcoal">ชาโคล<br>
                        <input type="radio" name="flour" class="form-check-input" id="TwoTone">ทูโทน<br>
                    </div>
                        <br>
                        ท้อปปิ้ง
                        <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                        <hr>
                        <div id="topping">
                            <input type="checkbox" name="topping1" class="form-check-input" id="cheese">ชีส (+10 บาท)<br>
                            <input type="checkbox" name="topping2" class="form-check-input" id="rainbow">เรนโบว์ (+5 บาท)<br>
                            <input type="checkbox" name="topping3" class="form-check-input" id="jelly">เยลลี่ (+5 บาท)<br>
                            <input type="checkbox" name="topping4" class="form-check-input" id="mashmellow">มาชเมลโล่ (+5บาท)<br>
                        </div>
                        <div id="count">
                            <br>
                            จำนวน 1 ชิ้น
                        </div>
                        <div id="add">
                            <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                        </div>
                    </div>
                </div>
            `;
            }
            else if (value == 18) {
                // combo set
                showMenu.innerHTML += `<div class="menu-container">
            <div class="picmenu">
                <!-- left container -->
                <img src="${product.img}" width="70%">
                <br><br>
                <label for="name"><b>${product.menu}</b></label><hr>
                <br><label for="detail">${product.description}</label>
            </div>
            <div class="optionmain">
                <!-- right container -->
                เครป
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png"
                    onclick="swax(1)" width="20px" align="right" id="drop1" class="dropdown">
                <hr>
                <div id="flour">
                    <input type="radio" name="crepe" id="cHam" class="form-check-input" checked>แฮม-หมูหยอง(+25)<br>
                    <input type="radio" name="crepe" id="cSausage" class="form-check-input">ไส้กรอก-ปูอัด(+30)<br>
                    <input type="radio" name="crepe" id="cChili" class="form-check-input">พริกเผา-แฮม-หมูหยอง(+35)<br>
                    <input type="radio" name="crepe" id="cEgg" class="form-check-input">ไข่-ปูอัด-หมูสับ(+40)<br>
                </div>
                น้ำ
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png"
                width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                <hr>
                <div id="topping">
                    <input type="radio" name="tea" id="tea" class="form-check-input" checked>ชานมเย็น(+25)<br>
                    <input type="radio" name="tea" id="greentea" class="form-check-input">ชาเขียว(+25)<br>
                    <input type="radio" name="tea" id="coco" class="form-check-input">โกโก้(+25)<br>
                    <input type="radio" name="tea" id="lemontea" class="form-check-input">ชามะนาว(+20)<br>
                </div>
                โตเกียว
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png"
                    onclick="swax(3)" width="20px" align="right" id="drop3" class="dropdown">
                <hr>
                <div id="tokyo">
                    <input type="radio" name="t" id="tEgg" class="form-check-input" checked>ไข่-ปูอัด(+15)<br>
                    <input type="radio" name="t" id="tChili" class="form-check-input">ไข่-พริกเผา(+15)<br>
                    <input type="radio" name="t" id="tsausage" class="form-check-input">ไข่-ไส้กรอก-หมูสับ(+20)<br>
                    <input type="radio" name="t" id="tHam" class="form-check-input">ไข่-แฮม-หมูหยอง(+20)<br>
                </div>
                <div id="count">
                    <br>
                    จำนวน 1 ชุด
                </div>
                <div id="add">
                    <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                </div>
            </div>
        </div>
        `;
            }
            else if (value == 17 || value == 19) {
                showMenu.innerHTML += `<div class="menu-container">
                <div class="picmenu">
                    <!-- left container -->
                    <img src="${product.img}" width="70%">
                    <br><br>
                    <label for="name"><b>${product.menu}</b></label><hr>
                    <br>
                    <label for="detail">${product.description}</label>
                </div>
                <div class="optionmain">
                    <!-- right container -->
                    เครป
                    <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png"
                        onclick="swax(1)" width="20px" align="right" id="drop1" class="dropdown">
                    <hr>
                    <div id="count">
                        <br>
                        จำนวน 1 ชุด
                    </div>
                    <div id="add">
                        <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                    </div>
                </div>
            </div>
            `;
            }

            else if (value == 20 || value == 16) {
                // combo set
                showMenu.innerHTML += `<div class="menu-container">
                <div class="picmenu">
                    <!-- left container -->
                    <img src="${product.img}" width="70%">
                    <br><br>
                    <label for="name"><b>${product.menu}</b></label><hr>
                    <br>
                    <label for="detail">${product.description}</label>
                </div>
                <div class="optionmain">
                    <!-- right container -->
                    เครป
                    <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png"
                        onclick="swax(1)" width="20px" align="right" id="drop1" class="dropdown">
                    <hr>
                    <div id="flour">
                        <input type="radio" name="c" id="ham" class="form-check-input" checked>แฮม-หมูหยอง(+25)<br>
                        <input type="radio" name="c" id="carb" class="form-check-input">ไส้กรอก-ปูอัด(+30)<br>
                        <input type="radio" name="c" id="chili" class="form-check-input">พริกเผา-แฮม-หมูหยอง(+35)<br>
                        <input type="radio" name="c" id="egg" class="form-check-input">ไข่-ปูอัด-หมูสับ(+40)<br>
                    </div>
                    <div id="count">
                        <br>
                        จำนวน 1 ชุด
                    </div>
                    <div id="add">
                        <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                    </div>
                </div>
            </div>
            `;

            } else if (value <= 28) {
                // beverage
                showMenu.innerHTML += `<div class="menu-container">
    <div class="picmenu">
        <!-- left container -->
        <img src="${product.img}" width="70%">
        <br><br>
        <label for="name"><b>${product.menu}</b></label><hr>
        <br><br><label for="detail">${product.description}</label>
    </div>
    <div class="optionmain">
        <!-- right container -->
    <br>
    ความหวาน
    <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
    <hr>
    <div id="topping">
        <input type="radio" name="sweet" id="lowSweet" class="form-check-input">หวามน้อย<br>
        <input type="radio" name="sweet" id="defaulSweet" class="form-check-input" checked>หวานปกติ<br>
        <input type="radio" name="sweet" id="verySweet" class="form-check-input">หวานมาก<br>
        <input type="radio" name="sweet" id="superSweet" class="form-check-input">เบาหวาน<br>
    </div>
    <div id="count">
        <br>
        จำนวน 1 แก้ว
    </div>
    <div id="add">
        <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
    </div>
</div>
</div>
`;



            }
            else if (value == 29) {
                showMenu.innerHTML += `<div class="menu-container">
                <div class="picmenu">
                    <!-- left container -->
                    <img src="${product.img}" width="70%">
                    <br><br>
                    <label for="name"><b>${product.menu}</b></label><hr>
                    <br><br>
                    <label for="detail">${product.description}</label>
                </div>
                <div class="optionmain">
                    <!-- right container -->
                <br>
                ชนิดน้ำ
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                <hr>
                <div id="topping">
                    <input type="radio" id="coke" name="water" class="form-check-input" checked>โค้ก<br>
                    <input type="radio" id="sprite" name="water" class="form-check-input">สไปรท์<br>
                    <input type="radio" id="orange" name="water" class="form-check-input">แฟนต้าน้ำส้ม<br>
                    <input type="radio" id="strawberry" name="water" class="form-check-input">แฟนต้าน้ำสตอเบอรี่<br>
                    <input type="radio" id="soda" name="water" class="form-check-input">แฟนต้าครีมโซดา<br>
                    <input type="radio" id="grape" name="water" class="form-check-input">แฟนต้าน้ำองุ่น<br>
                </div>
                <div id="count">
                    <br>
                    จำนวน 1 ขวด
                </div>
                <div id="add">
                    <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                </div>
            </div>
        </div>
    `;
            }
            else if (value == 30) {
                showMenu.innerHTML += `<div class="menu-container">
                    <div class="picmenu">
                        <!-- left container -->
                        <img src="${product.img}" width="70%">
                        <br><br>
   <br>                     <label for="name"><b>${product.menu}</b></label><hr>
                        <br>
                        <label for="detail">${product.description}</label>
                    </div>
                    <div class="optionmain">
                        <!-- right container -->
                    <br>
                    ชนิดน้ำ
                    <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                    <hr>
                    <div id="topping">
                        <input type="radio" name="water" id="water" class="form-check-input" checked>น้ำเปล่า<br>
                        <input type="radio" name="water" id="waterRare" class="form-check-input">น้ำแร่<br>
                    </div>
                    <div id="count">
                        <br>
                        จำนวน 1 ขวด
                    </div>
                    <div id="add">
                        <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                    </div>
                </div>
                </div>
                `;
            }
            else {
                // tokyo
                showMenu.innerHTML += `<div class="menu-container">
            <div class="picmenu">
                <!-- left container -->
                <img src="${product.img}" width="70%">
                <br><br>
                <label for="name"><b>${product.menu}</b></label><hr>
                <br>    <label for="detail">${product.description}</label>
            </div>
            <div class="optionmain">
                <!-- right container -->
                <br>
                ขนาด
                <img src="https://media.discordapp.net/attachments/892267785244254229/1033705703786958868/bleach.png" width="20px" align="right" onclick="swax(2)" class="dropdown" id="drop2">
                <hr>
                <div id="topping">
                    <input type="radio" name="size" id="small" class="form-check-input" checked>เล็ก<br>
                    <input type="radio" name="size" id="medium" class="form-check-input">กลาง (+5 บาท)<br>
                    <input type="radio" name="size" id="big" class="form-check-input">ใหญ่ (+10 บาท)<br>
                    <input type="radio" name="size" id="veryBig" class="form-check-input">มโหราญ (+15 บาท)<br>
                </div>
                <div id="count">
                    <br>
                    จำนวน 1 ชิ้น
                </div>
                <div id="add">
                    <button class="bt" onclick="addCart(${product.id})">เพิ่ม</button>
                </div>
            </div>
        </div>
        `;

            }
        }

    })
}


var count1 = 0;
var count2 = 0;
var count3 = 0;

function swax(a) {
    if (a == 1) {
        if (count1 == 0) {
            document.getElementById('drop1').style.transform = 'rotate(180deg)';
            document.getElementById('flour').style.display = "none";
            count1 = 1;
        } else if (count1 == 1) {
            document.getElementById('drop1').style.transform = 'rotate(360deg)';
            document.getElementById('flour').style.display = "block";
            count1 = 0;
        }
    }
    if (a == 2) {
        if (count2 == 0) {
            document.getElementById('drop2').style.transform = 'rotate(180deg)';
            document.getElementById('topping').style.display = "none";
            count2 = 1;
        } else if (count2 == 1) {
            document.getElementById('drop2').style.transform = 'rotate(360deg)';
            document.getElementById('topping').style.display = "block";
            count2 = 0;
        }
    }
    if (a == 3) {
        if (count3 == 0) {
            document.getElementById('drop3').style.transform = 'rotate(180deg)';
            document.getElementById('tokyo').style.display = "none";
            count3 = 1;
        } else if (count3 == 1) {
            document.getElementById('drop3').style.transform = 'rotate(360deg)';
            document.getElementById('tokyo').style.display = "block";
            count3 = 0;
        }
    }
}