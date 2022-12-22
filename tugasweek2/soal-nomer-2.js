//Tugas Nomor 2

const biodata = {
  name: "Muhammad Risky Fadillah",
  age: 26,
  isMarried: false,
  hobbies: ["Bermain Game", "Bulu Tangkis", "Menontin Film"],
  schoolList: [
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
      HTML: "Beginner",
      CSS: "Beginner",
      JavaScript: "Beginner",
    },
  ],
};

console.log(biodata);
console.log(biodata.school[0].namaSekolah);
// console.log(biodata.sekolah[0].namaSekolah)
