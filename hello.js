"use strict";

//форма работы с пользователем
document.addEventListener("DOMContentLoaded", function () {
  let user = localStorage.getItem("userName");
  let title = user ? `Привет ${user}!` : `Введите имя или выберите из списка:`;
  let h1 = document.querySelector("h1");
  h1.textContent = title;
  let newname = document.querySelector("[name='newname']");
  newname.hidden = !user;
  let username = document.querySelector("[name='username']");
  username.hidden = user;
  user && (username.value = user);
  let form = document.querySelector("form");
  form.addEventListener("click", event => {
    let { target } = event;
    let txt = username.value.trim();
    if (target == newname) {
      event.preventDefault();
      localStorage.removeItem('userName');
      h1.textContent = `Введите своё имя.`;
      newname.hidden = true;
      username.value = "";
      username.hidden = false;
    } else if (txt) {
      localStorage.setItem("userName", txt);
      form.action = 'play.html'//переход на страницу игры
    } else event.preventDefault()

  })
});
