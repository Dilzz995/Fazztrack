//2.Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

//1.Method Every
//Fungsi ini digunakan untuk melakukan pengecekan nilai dari array.apakah nilai yang ada di dalam kurang dari 20
// let alpha = [1,4,2,5,10];
// alpha.every(i => i < 20) // true

//2.method Pop
//Method pop adalah kebalikan dari push. Method pop digunakan untuk menghapus item terakhir dari sebuah array. Method pop tidak perlu menggunakan argumen.
const myNum = [1, 2, 3]
myNum.pop()
console.log(myNum)

//3.Method Unshift adalah Kalau push digunakan untuk menambah item baru di akhir sebuah array, maka method unshift digunakan untuk menambah item baru di awal sebuah array.
// const myNum = [3, 4]
// myNum.unshift(1, 2);
// console.log(myNum)

//4.Method kebalikan dari unshift.Digunakan untuk menghapus item pertama dari sebuah array.
// const myNum = [1, 2, 3]
// myNum.shift();
// console.log(myNum)

//5.Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.includes("apple"));

//6.Method indexOf  digunakan untuk mencari letak sebuah item dalam array. Bila item yang di maksud ada di dalam array, maka akan mereturn index dari item sebaliknya akan mereturn -1
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.indexOf("mango"));

//7.Method Concat digunakan untuk menggabungkan 2 atau lebih array.
// const debian = ['ubuntu', 'mint', 'kali']
// const redhat = ['rhel', 'centos']
// const arch = ['manjaro', 'chakra']
// const linuxDistro = debian.concat(redhat, arch)
// console.log(linuxDistro)

//8.Method Slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.slice(0, 2));

//9.Method Splice bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
//- Contoh menghapus item
// const fruits = ['apple', 'banana', 'cherry']
// console.log(fruits.splice(0, 2));
//- Contoh mereplace item dengan method splice
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1, "Lemon");
// console.log(fruits);
//- contoh menambah item
// const fruits = ["apple", "banana", "cherry"];
// fruits.splice(0, 0, "mango");
// console.log(fruits);

//10.Method Sort Sesuai namanya, method sort digunakan untuk mengurutkan item dalam sebuah array. Uratannya bisa numeric atau alphabetic, bisa ascending (keatas) atau descending (kebawah).
// Urutkan secara acsending(keatas)
// const myNum = [11, 25, 100, 18, 30]
// console.log(myNum.sort(function(a,b){return a- b}))
// Urutkan secara descending(keatas)
// const myNum = [11, 18, 100, 25, 30];
// console.log(
//   myNum.sort(function (a, b) {
//     return b - a;
//   })
// );
