
btn.addEventListener("click", () => {
    document.querySelector(".error").innerText = "";
    un = document.getElementById("username").value;
    ps = document.getElementById("password").value;
    console.log(cps);
    if (! (un && ps)){
        document.querySelector(".error").innerText = "Вы не заполнили все поля!";
    } else{
        fetch('https://cors-anywhere.herokuapp.com/http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76')
            .then(function(response) {
                if (response.ok) {
                return response.json();
                } else {
                console.log("Ошибка! Код: " + response.status);
                }
            })
            .then(function(data) {
                let fu = false;
                let inde = 0;
                let datas = data.inf;
                console.log(datas);
                for (let i = 0; i < datas.length; i++){
                    if (un == datas[i]["login"]){
                        inde = i;
                        document.querySelector(".error").innerText = "Логин уже существует!";
                        fu = true;
                        break;
                    }
                }
                if (fu){
                    if (datas[i]["pass"] != ps){
                        document.querySelector(".error").innerText = "Введен неверный павроль!"
                    } else{
                        localStorage.setItem("isLogged", true);
                        localStorage.setItem("alls", JSON.stringify(data1));
                        window.open("https://tosovets.github.io/halfyearproj/index.html");
                    }
                }
            })
    }
})