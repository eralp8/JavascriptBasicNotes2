let url="https://www.linkedin.com/in/eralpertan/"
let linkedin ="Eralp Ertan";
let result;

//! Karakter sayısı bul.
result = url.length;
result = linkedin.length;
result = linkedin.replace(" ","").length;

//! Linkedin kaç kelimeden oluşuyor.
result = linkedin.split("").length;
result = url.split(".").length;

//! Başlangıç adı
result=linkedin.startsWith("Eralp");
result=url.startsWith("https")
if(result){
    console.log("yapılıcaklar")
}else{
    console.log("false döndü")
}
console.log(result);

//! Kelime Kontrolü
if(linkedin.indexOf("Ertan")>1){
    console.log("çalıştı");
}
else{
    console.log("çalışmadı");
}

//! Url ve linkedin birleştirme
linkedin=linkedin.toLowerCase().replace(" ","-");
//url=url.replace("/","com/");

let newUrl=url.replace(url,url+linkedin);
newUrl = `${url}/${linkedin}`

console.log(newUrl);
