let flows = [];
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://tosovets.github.io/halfyearproj/data.json', false);

try {
  xhr.send();
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    flows = data;
    console.log("Логин пользователя: ");
  } else {
    console.log("Ошибка! Статус: " + xhr.status);
  }
} catch (error) {
  console.log("Произошла сетевая ошибка, данные не получены.");
}