
btn.addEventListener("click", () => {
    document.querySelector(".error").innerText = "";
    fn = document.getElementById("fullName").value;
    un = document.getElementById("username").value;
    ps = document.getElementById("password").value;
    cps = document.getElementById("confirmPassword").value;
    console.log(cps);
    if (! (fn && un && ps && cps)){
        document.querySelector(".error").innerText = "Вы не заполнили все поля!";
    } else if (ps !== cps){
        document.querySelector(".error").innerText = "Пароли не совпадают!";
    } else{
        fetch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76')
            .then(function(response) {
                if (response.ok) {
                return response.json();
                } else {
                console.log("Ошибка! Код: " + response.status);
                }
            })
            .then(function(data) {
                let fu = true;
                let datas = data.inf;
                console.log(datas);
                for (let i = 0; i < datas.length; i++){
                    if (un == datas[i]["login"]){
                        document.querySelector(".error").innerText = "Логин уже существует!";
                        fu = false;
                        break;
                    }
                }
                if (fu){
                    let data1 = {};
                    data1.login = un;
                    data1.pass = ps;
                    data1.name = fn;
                    data1.cart = [];
                    let flows = [];
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', 'https://tosovets.github.io/halfyearproj/data.json', false);
                    try {
                    xhr.send();
                    if (xhr.status === 200) {
                        let data2 = JSON.parse(xhr.responseText);
                        flows = data2;
                    } else {
                        console.log("Ошибка! Статус: " + xhr.status);
                    }
                    } catch (error) {
                        console.log("Произошла сетевая ошибка, данные не получены.");
                    }
                    data1.flowrs = flows;
                    datas.push(data1);
                    let data2 = {};
                    data2.inf = datas;
                    let dataJSON = JSON.stringify(data2);
                    fetch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', { method: 'DELETE'});
                    fetch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', {
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
                    localStorage.setItem("isLogged", true);
                    localStorage.setItem("alls", JSON.stringify(data1));
                    window.open("https://tosovets.github.io/halfyearproj/index.html");
                }
            })
    }
})