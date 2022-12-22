//--------------mengubah huruf vokal ke consonant -----------

//Cara 1
// let kata = "JAKARTA";
// let tolower = kata.toLocaleLowerCase();
// console.log(kata);

// function typeData() {
//   if (typeof tolower === "string") {
//     const vokal = tolower.replace(/a/g, "o");
//     return `${vokal} kata yang anda masukkan adalah ${typeof kata}`;
//   } else if (typeof tolower !== "string") {
//     return `kata yang anda masukkan bukan string tapi ${typeof kata}`;
//   } else {
//     console.log(tolower);
//   }
// }
// console.log(typeData(tolower));

// Cara 2
const kata = "jakarta";
let tolower = kata.toLocaleLowerCase();
let vokal = "o";
let hasil = "";

function mengubahVokal() {
  if (typeof tolower !== typeof "string") {
    console.log(`tipe data harus string`);
  } else {
    for (let i = 0; i <= tolower.length - 1; i++) {
      if (tolower[i] == "a") {
        hasil += vokal;
      } else {
        hasil += tolower[i];
      }
    }
  }
  console.log(hasil);
}
mengubahVokal(tolower);
