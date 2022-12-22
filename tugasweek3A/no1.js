// Variables adalah penanda identitas yang digunakan untuk menampung suatu nilai.

//Var & Let bedanya var itu scopenya global atau function dan bisa di hoisting sedangkan let dan const itu scope blok.var dapat diperbarui dan di deklarasikan ulang di dalam scopenya sedangkat let dapat diperbarui namun tidak dapat dideklarasikan ulang variable const juga tidak dapat di deklarasi ulang maupun diperbarui ulang

//contoh var
var hello = "Hello World";
var hello = "Hello Risky";
console.log(hello);

//contoh let
// let Hello = "Hellow World";
// let Hello = "Hello Risky";
// Hello = "Hello Semua";

//contoh const
// const Hello = "Hello Risky";
// Hello = "Hello World";
// console.log(Hello);

// --------- Scope ----------
//Scope digunakan untuk membatasi penagaksesan suatu variable
//ada 3 jenis scope yaitu
//1.Block Scope biasanya berlaku jika terdapat variable yang dideklarasi di dalam {} dan variable tidak bisa di akses dari luar block

// function test() {
//   let y = 100;
//   console.log("nilai local y: ", y);

//   if (y > 99) {
//     let y = 1000;
//     console.log("nilai block y: ", y);
//   }
// }

// test();
// console.log("nilai global y: ", y);

//2.Local Scope ruang lingkup dalam sebuah fungsi dalam javascript. Local scope juga sering disebut function scope. Variabel yang dideklarasikan dalam local scope hanya bisa di akses dalam scope tersebut dan tidak dapat diakses secara global atau local scope yang lain.

// function test() {
//   let y = 100;
//   console.log("nilai local y: ", y);
// }

// test();
// console.log("nilai global y: ", y);

//3.Global Scope Variable yang dideklarasikan diluar function atau block (Global), dapat diakses dari manapun (Block, Local, or function, etc)variable dapat dideklarasikan dengan var, let dan const.

// let x = 10;

// function test() {
//    console.log('nilai x: ',x)
//    x = 9
//    console.log('nilai perubahan x: ',x)
// }

// test()
// console.log('nilai global x: ',x)
