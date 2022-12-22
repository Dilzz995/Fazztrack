const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 1000);
  });
};

//---------- then Catch ------------
cekHariKerja("Minggu")
  //  then atau Method then() mengembalikan Promise resolve jika berhasil mengambil data
  .then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
  })
  //catch ini akan mengembalikan Promise Reject jika terjadi error
  .catch((error) => {
    console.log(error);
  });

// ------------ try catch -----------
//Async/Await adalah salah satu cara untuk mengatasai masalah asynchronous pada Javascript selain menggunakan callback dan promise.
async function cekHari() {
  try {
    //blok try jika tidak terjadi error
    const result = await cekHariKerja("Minggu");
    console.log(`Hari ${result} adalah hari kerja`);
  } catch (error) {
    // blok catch 1 jika tipe_error_1 terjadi pada blok try
    // variable_error_1 ini akan digunakan untuk mengetahui property dari error
    console.log(`Data Error ${error}`);
  } finally {
    //block finally digunakan untuk apapun yang terjadi pada blok try ataupun error
    console.log(`Proses Selesai`);
  }
}

cekHari();
