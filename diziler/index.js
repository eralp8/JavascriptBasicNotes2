//!Array
const ürünler =["samsung","apple","huawei"]
const fıyatlar =["10","20","30"]
const urun1=["samsung","10"];

console.log(ürünler)
console.log(fıyatlar[0]);

//!Array Metod
let products =["samsung","apple","huawei"];
let result;


result=products.length;

result=products.toString(); //string'e çevir
result=products.join("/");  //ayırma
result=products.shift();   //ilk elemanı siler geri döndürür
result=products.pop();   //son elemanı siler geri döndürür
result=products.push("xiaomi");  //dizinin sonuna eleman ekleme
result=products.unshift("xiaomi")  //dizinin başına eleman ekleme

//dizi birleştirme
let urunler1=["bmw","mercedes"]
let urunler2=["audi","nissan"]
let urunler3=["fiat","toyata"]

result=urunler1.concat(urunler2,urunler3)

console.log(result);
console.log(products);