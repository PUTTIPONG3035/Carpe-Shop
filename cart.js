let Item = document.querySelector('.item');
let subPrice = document.querySelector('.total-price');
let num = document.querySelector('.num');


let carts = JSON.parse(localStorage.getItem("CART")) || [];


updateCart();
// crape
function addCart(id) {

    if (id <= 15) {
        let vanila = document.getElementById('Vanila').checked;
        let charcoal = document.getElementById('Charcoal').checked
        let twotone = document.getElementById('TwoTone').checked;
        let cheese = document.getElementById('cheese').checked;
        let rainbow = document.getElementById('rainbow').checked;
        let mashmellow = document.getElementById('mashmellow').checked;
        let jelly = document.getElementById('jelly').checked;
        const item = products.find((product) => product.id == id)
        //vanila
        if (vanila) {
            if (cheese.checked && rainbow.checked && mashmellow.checked && jelly.checked) {
                carts.push({
                    ...item,
                    flour: "วนิลา",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่, เยลลี่",
                    topPrice: 25,
                })
            }

            else if (cheese && rainbow && mashmellow) {
                carts.push({
                    ...item,
                    flour: "วนิลา",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่",
                    topPrice: 20,
                })
            }
            else if (cheese && rainbow && jelly) {
                carts.push({
                    ...item,
                    flour: "วนิลา",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, เยลลี่",
                    topPrice: 20,
                })

            }
            else if (cheese && mashmellow && jelly) {
                carts.push({
                    ...item,
                    flour: "วนิลา",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, มาชเมลโล่, เยลลี่",
                    topPrice: 20,
                })
            }
            else if (cheese) {
                if (rainbow) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เรนโบว์",
                        topPrice: 15,
                    })
                }
                else if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, มาชเมลโล่",
                        topPrice: 15,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เยลลี่",
                        topPrice: 15,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส",
                        topPrice: 10,
                    })
                }
            }
            else if (rainbow) {
                if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, มาชเมลโล่",
                        topPrice: 10,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์",
                        topPrice: 5,
                    })
                }
            }
            else if (mashmellow) {
                if (jelly) {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "วนิลา",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่",
                        topPrice: 5,
                    })
                }
            }
            else if (jelly) {
                carts.push({
                    ...item,
                    flour: "วนิลา",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "เยลลี่",
                    topPrice: 5,
                })
            }

            else {
                carts.push({
                    ...item,
                    numberOfUnits: 1,
                    flour: "วนิลา",
                    ids: Math.random(),
                    topping: "ไม่มี",
                    topPrice: 0,
                })
            }

        }
        //charcoal
        else if (charcoal) {
            if (cheese.checked && rainbow.checked && mashmellow.checked && jelly.checked) {
                carts.push({
                    ...item,
                    flour: "ชาโคล",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่, เยลลี่",
                    topPrice: 25,
                })
            }

            else if (cheese && rainbow && mashmellow) {
                carts.push({
                    ...item,
                    flour: "ชาโคล",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่",
                    topPrice: 20,
                })
            }
            else if (cheese && rainbow && jelly) {
                carts.push({
                    ...item,
                    flour: "ชาโคล",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, เยลลี่",
                    topPrice: 20,
                })

            }
            else if (cheese && mashmellow && jelly) {
                carts.push({
                    ...item,
                    flour: "ชาโคล",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, มาชเมลโล่, เยลลี่",
                    topPrice: 20,
                })
            }
            else if (cheese) {
                if (rainbow) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เรนโบว์",
                        topPrice: 15,
                    })
                }
                else if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, มาชเมลโล่",
                        topPrice: 15,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เยลลี่",
                        topPrice: 15,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส",
                        topPrice: 10,
                    })
                }
            }
            else if (rainbow) {
                if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, มาชเมลโล่",
                        topPrice: 10,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์",
                        topPrice: 5,
                    })
                }
            }
            else if (mashmellow) {
                if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ชาโคล",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่",
                        topPrice: 5,
                    })
                }
            }
            else if (jelly) {
                carts.push({
                    ...item,
                    flour: "ชาโคล",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "เยลลี่",
                    topPrice: 5,
                })
            }
            else {
                carts.push({
                    ...item,
                    numberOfUnits: 1,
                    flour: "ชาโคล",
                    ids: Math.random(),
                    topping: "ไม่มี",
                    topPrice: 0,
                })
            }




        }
        // twotone
        else if (twotone) {
            if (cheese.checked && rainbow.checked && mashmellow.checked && jelly.checked) {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่, เยลลี่",
                    topPrice: 25,
                })
            }

            else if (cheese && rainbow && mashmellow) {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, มาชเมลโล่",
                    topPrice: 20,
                })
            }
            else if (cheese && rainbow && jelly) {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, เรนโบว์, เยลลี่",
                    topPrice: 20,
                })

            }
            else if (cheese && mashmellow && jelly) {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ชีส, มาชเมลโล่, เยลลี่",
                    topPrice: 20,
                })
            }
            else if (cheese) {
                if (rainbow) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เรนโบว์",
                        topPrice: 15,
                    })
                }
                else if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, มาชเมลโล่",
                        topPrice: 15,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส, เยลลี่",
                        topPrice: 15,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "ชีส",
                        topPrice: 10,
                    })
                }
            }
            else if (rainbow) {
                if (mashmellow) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, มาชเมลโล่",
                        topPrice: 10,
                    })
                }
                else if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "เรนโบว์",
                        topPrice: 5,
                    })
                }
            }
            else if (mashmellow) {
                if (jelly) {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่, เยลลี่",
                        topPrice: 10,
                    })
                }
                else {
                    carts.push({
                        ...item,
                        flour: "ทูโทน",
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topping: "มาชเมลโล่",
                        topPrice: 5,
                    })
                }
            }
            else if (jelly) {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "เยลลี่",
                    topPrice: 5,
                })
            }
            else {
                carts.push({
                    ...item,
                    flour: "ทูโทน",
                    numberOfUnits: 1,
                    ids: Math.random(),
                    topping: "ไม่มี",
                    topPrice: 0,
                })
            }

        }
        else {
            carts.push({
                ...item,
                flour: "วนิลา",
                numberOfUnits: 1,
                ids: Math.random(),
                topping: "ไม่มี",
                topPrice: 0,
            })
        }
    }
    // ชุดสุดคุ้ม เครป
    else if (id == 16 || id == 20) {
        const item = products.find((product) => product.id == id)
        let ham = document.getElementById('ham').checked;
        let carb = document.getElementById('carb').checked;
        let chili = document.getElementById('chili').checked;
        let egg = document.getElementById('egg').checked;
        if (ham) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 25,
                crape: "แฮม-หมูหยอง",
            });
        }
        else if (carb) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 30,
                crape: "ไส้กรอก-ปูอัด",
            });
        }
        else if (chili) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 35,
                crape: "พริกเผา-แฮม-หมูหยอง",
            });
        }
        else if (egg) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 40,
                crape: "ไข่-ปูอัด-หมูสับ",
            });
        }

    }
    // ชุดสุดคุ้ม เครป น้ำ โตเกียว
    else if (id == 18) {
        const item = products.find((product) => product.id == id)
        let cHam = document.getElementById('cHam').checked;
        let cSausage = document.getElementById('cSausage').checked;
        let cChili = document.getElementById('cChili').checked;
        let cEgg = document.getElementById('cEgg').checked;
        let tea = document.getElementById('tea').checked;
        let greentea = document.getElementById('greentea').checked;
        let coco = document.getElementById('coco').checked;
        let lemontea = document.getElementById('lemontea').checked;
        let tEgg = document.getElementById('tEgg').checked;
        let tChili = document.getElementById('tChili').checked;
        let tsausage = document.getElementById('tsausage').checked;
        let tHam = document.getElementById('tHam').checked;

        if (cHam) {
            if (tea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (greentea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (coco) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 40,
                        crape: "แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 40,
                        crape: "แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }

        }
        ///cSausage
        else if (cSausage) {
            if (tea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (greentea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชาเขียว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชาเขียว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (coco) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "โกโก้",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "โกโก้",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "โกโก้",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "โกโก้",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 45,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชามะนาว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "ไส้กรอก-ปูอัด",
                        water: "ชามะนาว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }

        }
        //cChili
        else if (cChili) {
            if (tea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (greentea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชาเขียว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (coco) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "โกโก้",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 50,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "พริกเผา-แฮม-หมูหยอง",
                        water: "ชามะนาว",
                        tokyo: "ไข่-แฮม-หมูหยอง",
                    });
                }
            }
        }
        //cEgg
        else {
            if (tea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชานมเย็น",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (greentea) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชาเขียว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชาเขียว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชาเขียว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else if (coco) {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "โกโก้",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "โกโก้",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "โกโก้",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 65,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "โกโก้",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }
            else {
                if (tEgg)
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ปูอัด",

                    });
                else if (tChili) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 55,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชามะนาว",
                        tokyo: "ไข่-พริกเผา",
                    });
                }
                else if (tsausage) {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชามะนาว",
                        tokyo: "ไข่-ไส้กรอก-หมูสับ",

                    });
                }
                else {
                    carts.push({
                        ...item,
                        numberOfUnits: 1,
                        ids: Math.random(),
                        topPrice: 60,
                        crape: "ไข่-ปูอัด-หมูสับ",
                        water: "ชามะนาว",
                        tokyo: "ไข่-แฮม-หมูหยอง",

                    });
                }
            }

        }

    }

    //ชุดสุดคุ้ม
    else if (id == 17 || id == 19) {
        const item = products.find((product) => product.id == id)
        carts.push({
            ...item,
            numberOfUnits: 1,
            ids: Math.random(),
            topPrice: 0,

        });
    }
    else if (id == 30) {
        const item = products.find((product) => product.id == id);
        let water = document.getElementById('water').checked;
        let waterRare = document.getElementById('waterRare').checked;
        if (water) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "น้ำเปล่า",
            });
        }
        else if (waterRare) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "น้ำแร่",
            });
        }
        else {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "น้ำเปล่า",
            });
        }
    }
    //น้ำอัดลม
    else if (id == 29) {
        const item = products.find((product) => product.id == id);
        let coke = document.getElementById('coke').checked;
        let sprite = document.getElementById('sprite').checked;
        let orange = document.getElementById('orange').checked;
        let strawberry = document.getElementById('strawberry').checked;
        let soda = document.getElementById('soda').checked;
        let grape = document.getElementById('grape').checked;
        // let sugar = document.getElementById('sugar').checked;
        if (coke) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "โค้ก",
            });
        }
        else if (sprite) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "สไปรท์",
            });
        }
        else if (orange) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "แฟนต้าน้ำส้ม",
            });
        }
        else if (strawberry) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "แฟนต้าสตอเบอร์รี่",
            });
        }
        else if (soda) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "แฟนต้าครีมโซดา",
            });
        }
        else if (grape) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "แฟนต้าน้ำองุ่น",
            });
        }
        else {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "โค้ก",
            });
        }
    }
    //เครื่องดืม
    else if (id > 20 && id <= 28) {
        const item = products.find((product) => product.id == id)

        let lowsweet = document.getElementById('lowSweet').checked;
        let defaulSweet = document.getElementById('defaulSweet').checked;
        let verySweet = document.getElementById('verySweet').checked;
        let superSweet = document.getElementById('superSweet').checked;
        if (lowsweet) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "หวานน้อย",
            });
        }
        else if (defaulSweet) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "หวานปกติ",
            });
        }
        else if (verySweet) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "หวานมาก",
            });
        }
        else if (superSweet) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "เบาหวาน",
            });
        }
        else {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                sweet: "หวานปกติ",
            });
        }

    }
    //tokyo
    else {
        const item = products.find((product) => product.id == id)

        // <input type="checkbox" id="egg" class="form-check-input">ไช่ (+5บาท) <br>
        // <input type="checkbox" id="pork" class="form-check-input">หมูสับ (+5บาท)<br>
        // <input type="checkbox" id="sausage" class="form-check-input">ไส้กรอก (+5บาท)<br>
        // <input type="checkbox" id="foithong" class="form-check-input">ฝอยทอง (+5บาท)<br>
        let small = document.getElementById('small').checked;
        let medium = document.getElementById('medium').checked;
        let big = document.getElementById('big').checked;
        let superBig = document.getElementById('veryBig').checked;
        if (small) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                size: "เล็ก",
                topPrice: 0,
            });
        }

        else if (medium) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                size: "กลาง",
                topPrice: 5,
            });
        }
        else if (big) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                size: "ใหญ่",
                topPrice: 10,
            });
        }
        else if (superBig) {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                size: "มโหราญ",
                topPrice: 15,
            });
        }

        else {
            carts.push({
                ...item,
                numberOfUnits: 1,
                ids: Math.random(),
                topPrice: 0,
                size: "เล็ก",
            });
        }
    }

    cart.classList.add("active");
    updateCart();

}

function updateCart() {
    renderCartItems();
    renderSubtotal();
    localStorage.setItem("CART", JSON.stringify(carts));
}
function renderSubtotal() {
    let totalPrice = 0;
    let totalItem = 0;
    carts.forEach((item) => {
        if (item.id == 18 || item.id == 16 || item.id == 20) {
            totalPrice += (item.topPrice * item.numberOfUnits);
            totalItem += item.numberOfUnits;
        }
        else {
            totalPrice += (item.price + item.topPrice) * item.numberOfUnits;
            totalItem += item.numberOfUnits;
        }
    });
    subPrice.innerHTML = `รวม  ${totalPrice}  บาท ทั้งหมด ${totalItem} ชิ้น`;

    if(totalItem == 0){
        num.style.display = "none";
    }
    else{
        num.innerHTML = totalItem;
        num.style.display = "block";
    }
}

function renderCartItems() {
    Item.innerHTML = "";
    // var Vanila = document.querySelector('#Vanila').checked;
    // var Charcoal = document.querySelector('#Charcoal').checked;
    // var TwoTone = document.querySelector('#TwoTone').checked;


    carts.forEach((item) => {
        //เครป
        if (item.category == "เครป") {
            let money = (item.topPrice + item.price) * item.numberOfUnits;
            Item.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.img}" alt="" class="cart-img">
                    <div class="cart-text">
                        <h4>${item.menu}</h4>
                        <p>แป้ง : ${item.flour}</p>
                        <p>ท้อปปิ้ง : ${item.topping}</p>
                    </div>
                </div>
                <div class="units">
                    <div class="unit-price">${money} บาท </div>
                    <div class="cart-num">
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                        <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                    </div>
                </div>
            </div>
            `
        }
        //เครื่องดื่ม
        else if (item.id == 29 || item.id == 30) {
            let money = (item.topPrice + item.price) * item.numberOfUnits;

            Item.innerHTML += `
            <div class="cart-item">
            <div class="item-info">
                <img src="${item.img}" alt="" class="cart-img">
                <div class="cart-text">
                    <h4>${item.menu}</h4>
                    <p>${item.sweet}</p>
                </div>
            </div>
            <div class="units">
                <div class="unit-price">${money} บาท </div>
                <div class="cart-num">
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                    <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                </div>
            </div>
        </div>
            `
        }

        else if (item.category == "เครื่องดื่ม") {
            let money = (item.topPrice + item.price) * item.numberOfUnits;
            Item.innerHTML += `
            <div class="cart-item">
            <div class="item-info">
                <img src="${item.img}" alt="" class="cart-img">
                <div class="cart-text">
                    <h4>${item.menu}</h4>
                    <p>${item.sweet}</p>
                </div>
            </div>
            <div class="units">
                <div class="unit-price">${money} บาท </div>
                <div class="cart-num">
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                    <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                </div>
            </div>
        </div>
            `
        }
        //โตเกียว
        else if (item.category == "โตเกียว") {
            let money = (item.topPrice + item.price) * item.numberOfUnits;
            // console.log(money);
            Item.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.img}" alt="" class="cart-img">
                    <div class="cart-text">
                        <h4>${item.menu}</h4>
                        <p>size : ${item.size}</p>
                    </div>
                </div>
                <div class="units">
                    <div class="unit-price">${money} บาท </div>
                    <div class="cart-num">
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                        <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                    </div>
                </div>
            </div>
            `
        }
        // ชุดสุดคุ้ม
        else if (item.id == 16 || item.id == 20) {
            let money = item.topPrice * item.numberOfUnits;
            Item.innerHTML += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.img}" alt="" class="cart-img">
                    <div class="cart-text">
                        <h4>${item.menu}</h4>
                        <p>เครป : ${item.crape}</p>
                    </div>
                </div>
                <div class="units">
                    <div class="unit-price">${money} บาท </div>
                    <div class="cart-num">
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                        <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                    </div>
                </div>
            </div>
        </div>
                `
        }
        else if (item.id == 18) {
            let money = item.topPrice * item.numberOfUnits;
            Item.innerHTML += `
            <div class="cart-item">
            <div class="item-info">
                <img src="${item.img}" alt="" class="cart-img">
                <div class="cart-text">
                    <h4>${item.menu}</h4>
                    <p>เครป : ${item.crape}</p>
                    <p>โตเกียว : ${item.tokyo}</p>
                    <p>น้ำ : ${item.water}</p>
                </div>
            </div>
            <div class="units">
                    <div class="unit-price">${money} บาท </div>
                    <div class="cart-num">
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                        <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                    </div>
                </div>
        </div>
                `
        }
        else {
            let money = item.price * item.numberOfUnits;
            Item.innerHTML += `
            <div class="cart-item">
            <div class="item-info">
                <img src="${item.img}" alt="" class="cart-img">
                <div class="cart-text">
                    <h4>${item.menu}</h4>
                </div>
            </div>
            <div class="units">
                    <div class="unit-price">${money} บาท </div>
                    <div class="cart-num">
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.ids})"><p class="text-cart">+</p></div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.ids})"><p class="text-cart">-</p></div>
                        <div class="bx bxs-trash-alt cart-remove" onclick="removeItemFromCart(${item.ids})"></div>
                    </div>
                </div>
        </div>
                `
        }


    })
}
function removeItemFromCart(ids) {
    carts = carts.filter((item) => item.ids != ids)
    updateCart();
}

function changeNumberOfUnits(action, ids) {
    carts = carts.map((item) => {

        let numberOfUnits = item.numberOfUnits;

        if (item.ids == ids) {
            if (action == "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }
            else if (action == "plus") {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}