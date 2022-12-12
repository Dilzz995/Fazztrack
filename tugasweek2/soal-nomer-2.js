//Tugas Nomor 2

const biodata = {
  name: "Budi Santoso",
  age: 26,
  isMarried: false,
  hobbies: ["Bermain Game", "Bulu Tangkis", "Menontin Film"],
  school: [
    {
      namaSekolah: "SMA Khadijah Surabaya",
      yearIn: 2011,
      yearOut: 2014,
      jurusan: "IPA",
    },
    {
      namaSekolah: "UPN Veteran Jatim Surabaya",
      yearIn: 2014,
      yearOut: 2022,
      jurusan: "Akunatasi",
    },
  ],
  skill: [
    {
      HTML: "Advance",
      CSS: "Advance",
      JavaScript: "Beginner",
    },
  ],
};

// console.log(biodata.nama)
// console.log(biodata.alamat.jalan)
console.log(biodata.school[0].namaSekolah);
// console.log(biodata.sekolah[0].namaSekolah)

// biodata.school.map((sekolah, index)=> {
//     console.log(index, sekolah.jurusan)
// })
// biodata.hobbies.map((hobie)=> {
//     console.log(hobie)
// })

//berlaku untuk tipedata primitif
// console.log(typeof biodata.sekolah)
