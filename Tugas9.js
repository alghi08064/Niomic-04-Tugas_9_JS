function cekguru() {
  var guru = {
    Nama: "Raisa Gutjob",
    ID : 1014452,
    MataPleajaran : {
        Kelas4 : "Bahasa Indonesia",
        Kelas5 : "Bahasa Inggris",
        Kelas6 : " Muatan Lokal"
    }
  }
for (var x in guru) {
  console.log(guru[x])
}
}
 cekguru();
