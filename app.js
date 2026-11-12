// 100.Quyidagi namunani kuzatgan holda funksiya yasang.

// function Namuna(str) {
//   let number = 0;
//   let result = "";
//   let arr = str.split("*");
//   for (let i of arr) {
//     if (isNaN(i)) {
//       result += `<${i}></${i}>`;
//     } else {
//       number += Number(i);
//     }
//   }
//   return result.repeat(number);
// }

// console.log(Namuna("div*2"));
// console.log(Namuna("p*1"));
// console.log(Namuna("li*3"));
// =================================================================================================
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// function yegindi(son) {
//   let yegindi = 0;
//   for (let i = 1; i <= son; i++) {
//     yegindi += i;
//   }
//   return yegindi;
// }
// console.log(yegindi(3));
// console.log(yegindi(10));
// console.log(yegindi(7));
// ===============================================================================================
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// function Namuna(son, { min, max }) {
//   if (son >= [min] && son <= [max]) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(Namuna(4, { min: 0, max: 5 }));
// console.log(Namuna(4, { min: 4, max: 5 }));
// console.log(Namuna(4, { min: 6, max: 10 }));
// console.log(Namuna(5, { min: 5, max: 5 }));
// =============================================================================================
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// function kvadrat(son) {
//   if ((son * son) % 10 === son % 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(kvadrat(1));
// console.log(kvadrat(3));
// console.log(kvadrat(6));
// console.log(kvadrat(95));
//===================================================================================================
// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// massiv qaytarsin.
// function Namuna(arr) {
//   let yangi = [];

//   for (let i = 0; i < arr.length; i++) {
//     yangi.push(arr[i] + i);
//   }

//   return yangi;
// }
// console.log(Namuna([0, 0, 0, 0, 0]));
// console.log(Namuna([1, 2, 3, 4, 5]));
// console.log(Namuna([5, 4, 3, 2, 1]));
// ===============================================================================================
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// shakari bor ichimliklar ro’yxati:
// cola fanta
// function ichimlik(arr) {
//   let yangi = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "fanta" && arr[i] !== "cola") {
//       yangi.push(arr[i]);
//     }
//   }

//   return yangi;
// }
// console.log(ichimlik(["fanta", "cola", "water"]));
// console.log(ichimlik(["fanta", "cola"]));
// console.log(ichimlik(["lemonade", "beer", "water"]));
// ================================================================================================
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// raqam borligini qaytarsin.
// function nechtaRaqam(son) {
//   return String(son).length;
// }
// console.log(nechtaRaqam(123));
// console.log(nechtaRaqam(56));
// console.log(nechtaRaqam(7154));
// console.log(nechtaRaqam(61217311514));
// console.log(nechtaRaqam(0));
// ==================================================================================================
// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// bo’lgan sonni qaytarsin.
// function Namuna(n) {
//   let arr = String(n).split("");
//   let newArr = [];
//   for (let i = arr.length; i > 0; i--) {
//     let max = Math.max(...arr);
//     newArr.push(max);
//     arr.splice(arr.indexOf(String(max)), 1);
//   }
//   return Number(newArr.join(""));
// }
// console.log(Namuna(123));
// console.log(Namuna("001"));
// console.log(Namuna(999));
// console.log(Namuna(784));

// =================================================================================================
// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// oraliqdan bironta random son qaytarsin.
// function random(x, y) {
//   let son = Math.floor(Math.random() * 10);
//   if (son >= x && son <= y) {
//     return son;
//   } else {
//     return random(x, y);
//   }
// }
// console.log(random(5, 9));
// console.log(random(5, 9));
// console.log(random(5, 9));
// ===============================================================================================
// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// degani sonning har bir raqamini sonning uzunligi miqdorida
// darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// function narissistik(num) {
//   let arr = String(num).split("");
//   let sum = 0;

//   for (let i of arr) {
//     sum += Number(i) ** arr.length;
//   }

//   if (sum === num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(narissistik(153));
// console.log(narissistik(370));
// console.log(narissistik(1652));
//===================================================================================================
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// nechta katta harf ishtirok etganin qaytarsin.
// function katta(harf) {
//   let son = 0;
//   for (let i = 0; i < harf.length; i++) {
//     if (harf[i] !== harf[i].toLowerCase()) {
//       son++;
//     }
//   }
//   return son;
// }

// console.log(katta("fvLzpxmgXSDrobbgMVrc"));
// console.log(katta("JMZWCneOTFLWYwBWxyFw"));
// console.log(katta("mqeytbbjwqemcdrdsyvq"));
