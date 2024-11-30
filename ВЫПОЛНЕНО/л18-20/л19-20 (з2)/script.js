function saveToCookie() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    // ... другие поля ...
  
    let cookieData = JSON.stringify({name, email, birthdate: document.getElementById("birthdate").value, birthplace: document.getElementById("birthplace").value, hobbies: document.getElementById("hobbies").value});  // Преобразуем объект в строку JSON
  
    document.cookie = "userData=" + encodeURIComponent(cookieData) + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/"; // Устанавливаем срок действия куки (обратите внимание на UTC)
    alert("Данные сохранены в Cookie!");
  }
  
  
  function getCookieData() {
    let cookieData = getCookie("userData");
    let outputDiv = document.getElementById("cookieOutput");
    if (cookieData) {
      let data = JSON.parse(decodeURIComponent(cookieData)); // Преобразуем строку JSON обратно в объект
      outputDiv.innerHTML = "" + JSON.stringify(data, null, 2) + ""; // Выводим отформатированный JSON
    } else {
      outputDiv.innerHTML = "Cookie пустое.";
    }
  }
  
  
  function clearCookie() {
    document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie очищено!");
  }
  
  
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  
  
  // Local Storage functions
  function saveToLocalStorage() {
    let name = document.getElementById("lname").value;
    let email = document.getElementById("lemail").value;
  
    localStorage.setItem("userLData", JSON.stringify({name, email}));
    alert("Данные сохранены в Local Storage!");
  }
  
  function getLocalData() {
    let data = localStorage.getItem("userLData");
    let outputDiv = document.getElementById("localStorageOutput");
    if (data) {
      outputDiv.innerHTML = "" + JSON.stringify(JSON.parse(data), null, 2) + "";
    } else {
      outputDiv.innerHTML = "Local Storage пустое.";
    }
  }
  
  function clearLocalStorage() {
    localStorage.removeItem("userLData");
    alert("Local Storage очищено!");
  }