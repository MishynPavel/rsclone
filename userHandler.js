"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify([]));
  }
  
  let users = getRecord();
  let time = localStorage.getItem("time");
  if (time) {
    saveRecord();
  }

});
//ajax запрос
function getRecord(){
  $.ajax( {
        url : "https://fe.it-academy.by/AjaxStringStorage2.php", 
        type : 'POST', cache : false, dataType:'json',
        data : {f: "READ", n: "users" },
        success : getReady, error : errorHandler}
       );
}
//сохраняем
function saveRecord(){
   $.ajax({
       url : "https://fe.it-academy.by/AjaxStringStorage2.php", 
       type : 'POST', cache : false, dataType:'json',
       data : {f: "LOCKGET", n: "users", p: "password" },
       success : lockGetReady, error : errorHandler    
   });
}
//чтение строки и планирование её изменения
 function lockGetReady(callresult) {
     if ( callresult.error!=undefined )
         alert("lockGetReadyError " + callresult.error);
     else {
       let users = JSON.parse(callresult.result);
       let userName = localStorage.getItem("userName");
       let time = localStorage.getItem("time");
       if (time) {
          users.push({ userName, time });
          localStorage.removeItem('time');
        }
        let html = '';
        users.sort((a, b) => {
          if (!a.time || !b.time) return -1;
          a = a.time.split(':');
          a = a[0] * 100 + a[1] * 1;
          b = b.time.split(':');
          b = b[0] * 100 + b[1] * 1;
          return a - b
        })
        users.length = Math.min(users.length, 5);
        for (const { userName, time } of users) html +=
          ` <tr>
              <td>${userName}</td>
              <td>${time}</td>
            </tr>`;
       document.querySelector('table tbody').innerHTML = html;
       $.ajax( {
        url : "https://fe.it-academy.by/AjaxStringStorage2.php", 
        type : 'POST', cache : false, dataType:'json',
        data : {f: "UPDATE", n: "users", p: "password", v: JSON.stringify(users) },
        success : updateReady, error : errorHandler}
       );
     }
 }

 function getReady(callresult) {
    if ( callresult.error!=undefined )
      alert("getReady " + callresult.error);

      let users = JSON.parse(callresult.result);
        let html = '';
        users.sort((a, b) => {
          if (!a.time || !b.time) return -1;
          a = a.time.split(':');
          a = a[0] * 100 + a[1] * 1;
          b = b.time.split(':');
          b = b[0] * 100 + b[1] * 1;
          return a - b
        })
        users.length = Math.min(users.length, 5);
        for (const { userName, time } of users) html +=
          ` <tr>
              <td>${userName}</td>
              <td>${time}</td>
            </tr>`;
       document.querySelector('table tbody').innerHTML = html;
 }
//обновляем
 function updateReady(callresult) {
    if ( callresult.error!=undefined )
      alert("updateReady " + callresult.error);
 }
//ошибка
 function errorHandler(jqXHR,statusStr,errorStr) {
     alert("Error " + statusStr+' '+errorStr);
 }