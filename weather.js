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
localStorage.setItem(
  "tokenKeyEncryted",
  EncryptStringAES("b99c3dd733d7b532e423e732f33abf88")
);
