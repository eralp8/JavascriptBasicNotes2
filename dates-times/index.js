let tarih = new Date();

let result;

result = tarih.getDate(); //!gün
result = tarih.getDay(); //! 0=pazar,6=cumartesi
result = tarih.getFullYear(); //! yıl
result = tarih.getHours(); //!saat
result = tarih.getTime(); //!milisaniye


//!Tarih güncelleme metodları-Set Methods
tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);

result=tarih;

//!Doğum Tarihi
let dogumTarihi = new Date(2001,3,2);
result=tarih.getFullYear()-dogumTarihi.getFullYear();  



console.log(result);