const username="Eralp";
const yas=22;

let result;
result=22;
result=Number("22");
result=parseInt("22");
result=parseFloat("22,2");
result=isNaN("a25"); //numara olup olmadığına bakıyoruz.

let=mynumber=10.2342;
result=mynumber.toPrecision(4) //kaç basamağı almak istediğimizi yazıyoruz.
result=mynumber.toFixed(2); //virgülden sonra kaç basamak alıcağına bakar.
result=Math.round(1.4);  //sayıyı yuvarlar
result=Math.ceil(1.4);   //sayıyı her zaman yukarı yuvarlar
result=Math.floor(1.4);  //sayıyı her zaman aşşağıdaki sayıya yuvarlar
result=Math.pow(5.3);  //5 üssü 3 ifadesi(5*5*5)
result=Math.sqrt(100); //karekökünü alır 
result=Math.abs(-25);  //mutlak değer alır
result=Math.max(10,1,9,7,20);  //en büyük değeri alır
result=Math.min(10,1,9,7,20);  //en küçük değeri alır

console.log(result);