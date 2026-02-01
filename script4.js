let data = {};
data.login = "MSHP1";
data.theme = "dark";
let data1 = {}
data1.inf = [data];
let dataJSON = JSON.stringify(data1);
fetch('http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: dataJSON
})
  .then(function(response) {
    if (response.status === 201) {
      console.log("Данные успешно отправлены!");
      return response.json();
    } else {
      console.log("Ошибка! Код: " + response.status);
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log("Ошибка соединения!");
});
fetch('http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76')
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Ошибка! Код: " + response.status);
    }
  })
  .then(function(data) {
    console.log("Логин пользователя: " + data.inf);
  })
  .catch(function(error) {
    console.log("Ошибка соединения!");
  });