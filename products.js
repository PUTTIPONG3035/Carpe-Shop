const products = [
  {
    "id": 1,
    "category": "เครป",
    "menu": "แฮม-ไส้กรอก-หมูหยอง",
    "description": "เนื้อเน้นๆ คนรักเนื้อห้ามพลาด",
    "price": 40,
    "img": "./img/crape1.webp"
  },
  {
    "id": 2,
    "category": "เครป",
    "menu": "ช็อกโกแลต-กล้วย-ฝอยทอง",
    "description": "ใครเลิฟกล้วยช็อค บอกเลยต้องลอง",
    "price": 45,
    "img": "./img/crape2.png"
  },
  {
    "id": 3,
    "category": "เครป",
    "menu": "ไข่-ปูอัด-หมูสับ",
    "description": "ปูและหมูคลุกเคล้าไข่หอม ๆ",
    "price": 40,
    "img": "./img/crape3.webp"
  },
  {
    "id": 4,
    "category": "เครป",
    "menu": "พิซซ่า-ปูอัด",
    "description": "ใครชอบกินพิซซ่าต้องร้องว้าว",
    "price": 35,
    "img": "./img/crape4.webp"
  },
  {
    "id": 5,
    "category": "เครป",
    "menu": "ไส้กรอก-ปูอัด",
    "description": "ไส้กรอกชิ้นโตๆ พร้อมกับปูอัดเนื้อเน้นๆ",
    "price": 30,
    "img": "./img/crape5.webp"
  },
  {
    "id": 6,
    "category": "เครป",
    "menu": "ไข่-ปูอัด-ไส้กรอก-หมูหยอง",
    "description": "ไส้เยอะล้นทะลัก คุ้มค่าเกินราคา",
    "price": 45,
    "img": "./img/crape6.webp"
  },
  {
    "id": 7,
    "category": "เครป",
    "menu": "เนย-นม-กล้วยหอม",
    "description": "ที่สุดของความหวานกำลังดี",
    "price": 40,
    "img": "./img/crape7.webp"
  },
  {
    "id": 8,
    "category": "เครป",
    "menu": "แฮม-หมูหยอง",
    "description": "สองเนื้อหมูยอดนิยม ใครได้กินก็ฟินจนต้องบอกต่อ",
    "price": 25,
    "img": "./img/crape8.webp"
  },
  {
    "id": 9,
    "category": "เครป",
    "menu": "เนย-นม-ซีเรียล",
    "description": "รักเนย คลั่งนม เลิฟโกโก้ครันช์ ครบองค์จบได้ในชิ้นเดียว",
    "price": 20,
    "img": "./img/crape9.webp"
  },
  {
    "id": 10,
    "category": "เครป",
    "menu": "พริกเผา-ปูอัด",
    "description": "ปูอัดชิ้นโตคลุกเคล้ากับพริกเผารสจัดจ้าน",
    "price": 30,
    "img": "./img/crape10.webp"
  },
  {
    "id": 11,
    "category": "เครป",
    "menu": "ผักโขม-แฮม-ไข่",
    "description": "รสผักโขมเย้ายวนใจ",
    "price": 40,
    "img": "./img/crape11.png"
  },
  {
    "id": 12,
    "category": "เครป",
    "menu": "พริกเผา-หมูหยอง-สาหร่าย",
    "description": "รสแซ่บชวนยั่วน้ำลาย สำหรับชีวิตสายจัดจ้าน",
    "price": 40,
    "img": "./img/crape12.webp"
  },
  {
    "id": 13,
    "category": "เครป",
    "menu": "เนย-นม-น้ำตาล",
    "description": "เพราะชีวิตขาดหวานไม่ได้",
    "price": 25,
    "img": "./img/crape13.webp"
  },
  {
    "id": 14,
    "category": "เครป",
    "menu": "พริกเผา-แฮม-หมูหยอง",
    "description": "เผ็ดร้อน อร่อยอย่างลงตัว",
    "price": 35,
    "img": "./img/crape14.webp"
  },
  {
    "id": 15,
    "category": "เครป",
    "menu": "ไข่-แฮม-ไส้กรอก-ปูอัด-ชีส",
    "description": "ชีสเน้นๆ ไส้เต็มจนทะลัก",
    "price": 50,
    "img": "./img/crape15.webp"
  },
  {
    "id": 16,
    "category": "ชุดสุดคุ้ม",
    "menu": "เครป-น้ำผึ้งมะนาว",
    "description": "เครปกรอบไส้ล้นทะลักฟิน ๆ คู่กับเครื่องดื่มเย็นสดชื่น",
    "price": "ลดราคาเครป 15 บาท",
    "img": "./img/Promo16.png"
  },
  {
    "id": 17,
    "category": "ชุดสุดคุ้ม",
    "menu": "เครปหน้าไส้กรอก-ปูอัด พร้อมโตเกียวไข่-ปูอัด",
    "description": "เอาใจคนรักปูอัด พลาดไม่ได้แม้แต่นาทีเดียว",
    "price": 45,
    "img": "./img/Promo17.png"
  },
  {
    "id": 18,
    "category": "ชุดสุดคุ้ม",
    "menu": "เครป-โตเกียว-น้ำ",
    "description": "เครปก็รัก โตเกียวก็ชอบ พร้อมน้ำให้สดชื่น บอกเลยพลาดไม่ได้",
    "price": "ลด 20 บาท",
    "img": "./img/Promo18.png"
  },
  {
    "id": 19,
    "category": "ชุดสุดคุ้ม",
    "menu": "เครปหน้าไข่-แฮม-ไส้กรอก-ปูอัด-ชีส พร้อมอเมริกาโน",
    "description": "ฟินๆ ช่วงเช้าให้สดชื่น เพิ่มพลังให้พร้อมสำหรับวันใหม่",
    "price": 100,
    "img": "./img/Promo19.png"
  },
  {
    "id": 20,
    "category": "ชุดสุดคุ้ม",
    "menu": "เครป1ชิ้น",
    "description": "อันเดียวไม่เคยพอ เพราะอร่อยฟินจนอยากกินต่อเรื่อย ๆ",
    "price": "แถม 1 ชิ้น (รสเดียวกัน)",
    "img": "./img/Promo20.png"
  },
  {
    "id": 21,
    "category": "เครื่องดื่ม",
    "menu": "ลาเต้เย็น",
    "description": "เพลิดเพลินไปกับรสลาเต้หอม นุ่ม ละมุนลิ้น",
    "price": 50,
    "img": "./img/drink21.png"
  },
  {
    "id": 22,
    "category": "เครื่องดื่ม",
    "menu": "ชานมเย็น",
    "description": "ชานมรสละมุนลิ้น กลมกล่อมเป็นที่หนึ่ง",
    "price": 25,
    "img": "./img/drink22.jpg"
  },
  {
    "id": 23,
    "category": "เครื่องดื่ม",
    "menu": "มัทฉะลาเต้",
    "description": "สัมผัสกับชาเขียวรสเข้มข้น",
    "price": 25,
    "img": "./img/drink23.png"
  },
  {
    "id": 24,
    "category": "เครื่องดื่ม",
    "menu": "ช็อกโกแลตเย็น",
    "description": "หอมกลิ่มช็อกโกแลตแท้ แฟนช็อกโกแลตห้ามพลาด",
    "price": 45,
    "img": "./img/drink24.png"
  },
  {
    "id": 25,
    "category": "เครื่องดื่ม",
    "menu": "ชามะนาว",
    "description": "ชามะนาวรสเปรี้ยว หวาน เย็นชื่นใจ",
    "price": 20,
    "img": "./img/drink25.png"
  },
  {
    "id": 26,
    "category": "เครื่องดื่ม",
    "menu": "น้ำมะนาว",
    "description": "น้ำมะนาวแท้ ดับกระหาย คลายร้อน",
    "price": 25,
    "img": "./img/drink26.webp"
  },
  {
    "id": 27,
    "category": "เครื่องดื่ม",
    "menu": "อเมริกาโน",
    "description": "ดื่มด่ำกาแฟรสเข้มข้น กลมกล่อม",
    "price": 60,
    "img": "./img/drink27.png"
  },
  {
    "id": 28,
    "category": "เครื่องดื่ม",
    "menu": "นมสดเย็น",
    "description": "นมวัวชั้นเยี่ยมสดๆ รสนุ่มละมุ่นดื่มแล้วจะต้องติดใจ",
    "price": 20,
    "img": "./img/drink28.png"
  },
  {
    "id": 29,
    "category": "เครื่องดื่ม",
    "menu": "น้ำอัดลม",
    "description": "ซาบซ่าน ชื่นใจจนลืมร้อน",
    "price": 25,
    "img": "./img/drink29.png"
  },
  {
    "id": 30,
    "category": "เครื่องดื่ม",
    "menu": "น้ำเปล่า",
    "description": "สดชื่น ชื่นใจ",
    "price": 15,
    "img": "./img/drink30.png"
  },
  {
    "id": 31,
    "category": "โตเกียว",
    "menu": "ไส้ครีม",
    "description": "ครีมเน้นๆ อร่อยถึงใจ",
    "price": 5,
    "img": "./img/tokyo31.webp"
  },
  {
    "id": 32,
    "category": "โตเกียว",
    "menu": "ไข่-ปูอัด",
    "description": "เนื้อปูอัดแท้ กรอบอร่อยได้ในหนึ่งคำ",
    "price": 15,
    "img": "./img/tokyo32.webp"
  },
  {
    "id": 33,
    "category": "โตเกียว",
    "menu": "ไข่-ไส้กรอก-หมูสับ",
    "description": "ไส้ล้นทะลัก กับขนาดที่พอดีคำ",
    "price": 20,
    "img": "./img/tokyo33.webp"
  },
  {
    "id": 34,
    "category": "โตเกียว",
    "menu": "ไข่-พริกเผา",
    "description": "ปูอัดชิ้นโต พร้อมพริกเผารสจัดจ้านและไข่หอมอร่อย",
    "price": 15,
    "img": "./img/tokyo34.webp"
  },
  {
    "id": 35,
    "category": "โตเกียว",
    "menu": "ช็อกโกแลต-ฝอยทอง",
    "description": "ได้รสช็อกเข้มข้น เหมาะกับคนชอบขนมหวาน",
    "price": 20,
    "img": "./img/tokyo35.webp"
  },
  {
    "id": 36,
    "category": "โตเกียว",
    "menu": "ไข่-หมูสับ",
    "description": "อร่อยง่ายๆ ด้วยหมูสับรสโอชา",
    "price": 15,
    "img": "./img/tokyo36.webp"
  },
  {
    "id": 37,
    "category": "โตเกียว",
    "menu": "ไข่-พริกเผา",
    "description": "พริกเผารสเผ็ดร้อน คู่กับไข่ได้อย่างเข้ากัน",
    "price": 15,
    "img": "./img/tokyo37.webp"
  },
  {
    "id": 38,
    "category": "โตเกียว",
    "menu": "ไส้สังขยา",
    "description": "สังขยาหวานอร่อย ด้วยราคาที่แสนถูก",
    "price": 5,
    "img": "./img/tokyo38.webp"
  },
  {
    "id": 39,
    "category": "โตเกียว",
    "menu": "ไข่-แฮม-หมูหยอง",
    "description": "เติมเต็มรสชาติหมูสูตรพิเศษ ที่รับประกันได้ว่ามันอร่อยมาก",
    "price": 20,
    "img": "./img/tokyo39.webp"
  },
  {
    "id": 40,
    "category": "โตเกียว",
    "menu": "วนิลา-ฝอยทอง",
    "description": "รสวนิลาหอมอร่อย ที่ฟินให้สุดได้ในคำเดียว",
    "price": 15,
    "img": "./img/tokyo40.webp"
  }
];