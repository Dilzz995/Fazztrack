const checkNilai = (nilaiAwal, nilaAkhir, dataAngka) => {
  let sortData = dataAngka.sort(function (a, b) {
    return a - b;
  });
  if (typeof nilaiAwal !== "number" || typeof nilaAkhir !== "number") {
    console.log(`nilai harus number`);
  } else if (nilaiAwal > nilaAkhir) {
    console.log(`nilai awal harus lebih besar dari nilai akhir`);
  } else if (sortData.length <= 3) {
    console.log(`data harus lebih dari 3`);
  } else {
    let checkNumber = sortData.filter(
      //untuk mengambil data di antara nilaiAwal sama nilai akhir
      (angka) => angka > nilaiAwal && angka < nilaAkhir
    );
    //untuk mengecek apakah nilai awal dan nilai akhir itu ada di data
    if (checkNumber.every((nilaiAwal) => nilaiAwal < nilaAkhir) == true) {
      console.log(`data tidak ditemukan`);
    }
    console.log(checkNumber);
  }
  // return dataAngka(data);
};

let dataAngka = (checkNilai) => {
  return checkNilai;
};

checkNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
checkNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
checkNilai(4, 17, [2, 25, 4]);
checkNilai(5, 17, [2, 25, 4, 1, 30, 18]);
