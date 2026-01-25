let flows = [];
let xhr = new XMLHttpRequest();

// Связываем объект с методом и адресом.
xhr.open('GET', 'https://tosovets.github.io/halfyearproj/data.json', false);

try {
  // Отправляем запрос.
  xhr.send();
  
  // Проверяем статус ответа.
  if (xhr.status === 200) {
    // Преобразуем ответ из JSON в объект.
    let data = JSON.parse(xhr.responseText);
    
    // Получаем данные по ключу «login».
    flows = data;
    console.log("Логин пользователя: " + userLogin);
  } else {
    console.log("Ошибка! Статус: " + xhr.status);
  }
} catch (error) {
  console.log("Произошла сетевая ошибка, данные не получены.");
}