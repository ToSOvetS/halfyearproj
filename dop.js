fetch('https://api.allorigins.win/raw?url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', { method: 'DELETE'});
let data1_dop = {};
data1_dop.login = "";
data1_dop.pass = "";
data1_dop.name = "";
data1_dop.flows = [];
data1_dop.cart = [];
let datas_dop = [];
datas_dop.push(data1_dop);
let data2_dop = {};
data2_dop.inf = datas_dop;
let dataJSON_dop = JSON.stringify(data2_dop);
fetch('https://api.allorigins.win/raw?url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: dataJSON_dop
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
localStorage.clear();