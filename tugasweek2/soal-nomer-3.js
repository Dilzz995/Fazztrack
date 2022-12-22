const nilaiMurid = [
  {
    mataPelajaran: "Matematika",
    nilai: 200,
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

// console.log(...nilaiMurid);

function nilaiRata2Murid() {
  let total = 0;
  nilaiMurid.forEach((item) => {
    if (typeof item.nilai !== typeof 0 || item.nilai === null) {
      console.log(`nilai harus nomor dan harus terisi`);
    } else {
      total += item.nilai;
    }
  });
  const nilaiRata2 = total / nilaiMurid.length;
  console.log(nilaiRata2);
  if (nilaiRata2 >= 90 && nilaiRata2 <= 100) {
    console.log("Grade = A");
  } else if (nilaiRata2 >= 80 && nilaiRata2 <= 89) {
    console.log("Grade = B");
  } else if (nilaiRata2 >= 70 && nilaiRata2 <= 79) {
    console.log("Grade = C");
  } else if (nilaiRata2 >= 60 && nilaiRata2 <= 69) {
    console.log("Grade = D");
  } else if (nilaiRata2 >= 0 && nilaiRata2 <= 59) {
    console.log("Grade = E");
  } else if (nilaiRata2 >= 100) {
    console.log("angka yang anda input terlalu besar");
  }
}

nilaiRata2Murid();
// console.log(nilaiMurid[0].mataPelajaran);
