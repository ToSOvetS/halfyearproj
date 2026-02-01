for (let i = 0; i < flows.length; i++){

    let templatecode = `
                <div class="card" id="{{id}}">
                    <img class="card_img" src="{{image}}" alt="">
                    <p class="card_name">{{name}}</p>
                    <div class="card_price">
                        <p class="card_price_num">{{price}}</p>
                        <button class="card_to_cart">В корзину!</button>
                    </div>
                    <p class="card_info">Подробнее</p>
                </div>
    `
    let template = Handlebars.compile(templatecode);
    cards.innerHTML += template({
        id: "i" + String(i),
        name: flows[i].name,
        price: flows[i].price,
        image: `photos/${flows[i].image}`
    });
    
}

document.querySelectorAll(".card_info").forEach(function(button) {
    button.addEventListener("click", function() {
        sessionStorage.setItem("id_sait", Number(button.parentElement.id.substring(1)));
        window.open("https://tosovets.github.io/halfyearproj/desc.html");
    });
})

document.querySelectorAll(".card_to_cart").forEach(function(button) {
    button.addEventListener("click", function() {
        carts.push(flows[button.parentElement.parentElement.id.substring(1)])
        console.log(carts);
        etch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76')
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
                for (let i = 0; i < datas.length; i++){
                    if (localStorage.getItem("alls")["login"] == datas[i]["login"]){
                        datas[i]["cart"] = carts;
                        let ano = {};
                        ano.inf = datas;
                        let dataJSON123 = JSON.stringify(ano);
                        fetch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', { method: 'DELETE'});
                        fetch('https://corsproxy.io/?key=c637c1f5&url=http://web4.informatics.ru:82/api/a0badc6d515368d213e8edad8fc39c76', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: dataJSON123
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
                    }
                }
            });
    });
})