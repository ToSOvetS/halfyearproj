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
    let ind = document.getElementById("i" + String(i));
    ind.addEventListener("click", () => {
        sessionStorage.setItem("id_sait", i);
        window.open("https://tosovets.github.io/halfyearproj/desc.html");
    });
}