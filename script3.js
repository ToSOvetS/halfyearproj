let ind = 0;
if (sessionStorage.getItem("id_sait")){
    ind = sessionStorage.getItem("id_sait");
}
let templatecode = `<section class="main_inf">
            <img class="image" src="{{image}}" alt="">
            <div>
                <p class="name">{{name}}</p>
                <p class="price">{{price}}</p>
                <button class="to_cart">В корзину!</button>
            </div>
        </section>
        <section class="descr">
            <p class="description">{{des}}</p>
        </section>
`
let template = Handlebars.compile(templatecode);
main.innerHTML += template({
    name: flows[ind].name,
    price: flows[ind].price,
    image: `photos/${flows[ind].image}`,
    desc: flows[ind].description
});