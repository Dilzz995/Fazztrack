const kata = "ha";
const palindrome = kata.toLocaleLowerCase();
let arr = "";
let hasil = "";

function kalimat() {
  for (let x = palindrome.length - 1; x >= 0; x--) {
    hasil += palindrome[x];
  }

  console.log(hasil);

  for (let i = kata.length; i <= 2; i++) {
    arr += kata.length;
    if (arr.length < 2) {
      return "Kata yang anda masukkan harus lebih dari 2 huruf";
    }
  }
  if (hasil === palindrome) {
    return "Kata yang anda masukkan adalah palindrome";
  } else if (hasil !== palindrome) {
    return "Kata yang anda masukkan bukan palindrome";
  }
}

console.log(kalimat(hasil));
