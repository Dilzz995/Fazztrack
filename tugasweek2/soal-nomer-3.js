const nilaiMurid = [
  {
    mataPelajaran: "Matematika",
    nilai: 79,
  },
  {
    mataPelajaran: "Bahasa Indonesia",
    nilai: 79,
  },
  {
    mataPelajaran: "Bahasa Inggris",
    nilai: 79,
  },
  {
    mataPelajaran: "IPA",
    nilai: 79,
  },
];

let total = 0;
nilaiMurid.forEach((item) => {
  total += item.nilai;
});

console.log(total);
const nilaiRata2 = total / nilaiMurid.length;
console.log(nilaiRata2);

function nilaiRata2Murid() {
  if (nilaiRata2 >= 90 && nilaiRata2 <= 100) {
    return "Grade = A";
  } else if (nilaiRata2 >= 80 && nilaiRata2 <= 89) {
    return "Grade = B";
  } else if (nilaiRata2 >= 70 && nilaiRata2 <= 79) {
    return "Grade = C";
  } else if (nilaiRata2 >= 60 && nilaiRata2 <= 69) {
    return "Grade = D";
  } else {
    return "Grade = E";
  }
}

console.log(nilaiRata2Murid(nilaiRata2));
