fetch('http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', { method: 'DELETE'});
let data1 = {};
data1.login = "";
data1.pass = "";
data1.name = "";
data1.flows = [];
data1.cart = [];
let datas_dop = [];
datas_dop.push(data1);
let data2_dop = {};
data2_dop.inf = datas_dop;
let dataJSON_dop = JSON.stringify(data2_dop);
fetch('https://cors-anywhere.herokuapp.com/http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', {
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