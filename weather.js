const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".container input");
const message = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

// genelde token her requestte kullanıldığından bir storage içerisinde kullanmalısın.
// localStorage.setItem("tokenKey", "b99c3dd733d7b532e423e732f33abf88");

// ama böyle tokenı açık kullanmak doğru değil.
// (reactta => .env ya da config içerisinde tutulur)
// (javascriptte=> aes256 şifreleme algoritması var ve kullanımı Extentions.js içerisindeli ilk function gelen string ifade encrypt olurken diğer function da ise gelen string ifade decrypt olur )
// böylelikle bu key şifreleme algoritması ile tutulur. Ve bu token consolede anlamsız characterler ile görünür.
// bir kereye mahsus yapıp storageden anlamsız charları almalısın ve tekrar api key olarak set etmelisin.
// localStorage.setItem(
//   "tokenKeyEncryted",
//   EncryptStringAES("b99c3dd733d7b532e423e732f33abf88")
// );

// şifrelenmiş token key localstorageye kayıt olunur.
localStorage.setItem(
  "tokenKey",
  "TedQEZxvfj0DDPYuSmX389ROEaTvFzh4u/U4C7AVoo30zk63m9v0V4+NqgWLvQIt"
);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // event nerede kullanılıyorsa orada eventi prevent yapmalısın.
  getWeatherDataFromApi();
});

// Get Api Func (http methods = verbs)
const getWeatherDataFromApi = () => {
  // const tokenKey =
};
