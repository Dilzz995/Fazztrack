//--------------mengubah huruf vokal ke consonant -----------

//--------------mengubah huruf vokal ke consonant -----------

const kata = `Jakarta`;

function typeData() {
  const tipeData = typeof kata;
  if (tipeData === typeof "") {
    return `kata yang anda masukkan adalah ${tipeData}`;
  } else if (tipeData !== typeof "") {
    return `kata yang anda masukkan bukan string tapi ${tipeData}`;
  }
}
console.log(typeData(kata));

if (kata) {
  const vokal = kata.replace(/[aiueo]/gi, "o");
  console.log(vokal);
} else {
  console.log(kata);
}
