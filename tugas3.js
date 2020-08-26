//SOAL 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kalimatHasil = kataPertama + " " + kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1) + " " + kataKetiga + " " + kataKeempat.toUpperCase();
console.log(kalimatHasil)

//Soal 2
var kata_Pertama = "1";
var kata_Kedua = "2";
var kata_Ketiga = "4";
var kata_Keempat = "5";

var number1 = Number(kata_Pertama);
var number2 = Number(kata_Kedua);
var number3 = Number(kata_Ketiga);
var number4 = Number(kata_Keempat);

var hasil = number1 + number2 + number3 + number4;
console.log(hasil)

//Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataKe1 = kalimat.substring(0, 3);
var kataKe2 = kalimat.substring(4, 14);
var kataKe3 = kalimat.substring(15, 18);
var kataKe4 = kalimat.substring(19, 24);
var kataKe5 = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataKe1); 
console.log('Kata Kedua: ' + kataKe2); 
console.log('Kata Ketiga: ' + kataKe3); 
console.log('Kata Keempat: ' + kataKe4); 
console.log('Kata Kelima: ' + kataKe5);

//Soal 4
var nilai;
nilai = 75;
if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70) {
    console.log("B")
} else if (nilai >= 60) {
    console.log("C")
} else if (nilai >= 50) {
    console.log("D")
} else {
    console.log("E")
}

//Soal 5
var tanggal = 7;
var bulan = 1;
var tahun = 1995;
switch(bulan) {
    case 1:   { console.log(tanggal + " Januari " + tahun); break; }
    case 2:   { console.log(tanggal + " Februari " + tahun); break; }
    case 3:   { console.log(tanggal + " Maret " + tahun); break; }
    case 4:   { console.log(tanggal + " April " + tahun); break; }
    case 5:   { console.log(tanggal + " Mei " + tahun); break; }
    case 6:   { console.log(tanggal + " Juni " + tahun); break; }
    case 7:   { console.log(tanggal + " Juli " + tahun); break; }
    case 8:   { console.log(tanggal + " Agustus " + tahun); break; }
    case 9:   { console.log(tanggal + " September " + tahun); break; }
    case 10:   { console.log(tanggal + " November " + tahun); break; }
    case 11:   { console.log(tanggal + " Oktober " + tahun); break; }
    case 12:   { console.log(tanggal + " Desember " + tahun); break; }
    default:  { console.log('Tidak terjadi apa-apa'); }}