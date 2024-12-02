const abrirCompra = document.querySelector('.shopping');
const fecharCompra = document.querySelector('.closeShopping');
const body = document.querySelector('body');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const quantidade = document.querySelector('.quantity');

abrirCompra.addEventListener('click', () => {
    if(body.classList == "active"){
        body.classList.remove("active");
    }else{
    body.classList.add("active");
    }
});


const products = [{
    id: 1,
    name: "Album Élvis Fool",
    img: "elvis-fool.jpg",
    price: 120
},{
    id: 2,
    name: "Album Élvis Aloha Hawaii",
    img: "elvis-aloha.jpg",
    price: 90
},
{
    id: 3,
    name: "Album Branco",
    img: "white-album.jpg",
    price: 320
},
{
    id: 3,
    name: "Album Abbey Road",
    img: "abbey-road.jpg",
    price: 350
},
{
    id: 3,
    name: "Album Please Please Me",
    img: "please-me.jpg",
    price: 290
},
{
    id: 3,
    name: "Album One",
    img: "one.jpg",
    price: 300
}
];
const listaCard = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="imgs/${value.img}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">R$${value.price.toLocaleString()},00</div>
            <button onclick="addToCard(${key})">Adicionar ao Carrinho</button>
        `;
        list.appendChild(newDiv);
    });
};

initApp();

const addToCard = key => {
    if (listaCard[key] == null) {
        listaCard[key] = JSON.parse(JSON.stringify(products[key]));
        listaCard[key].quantidade = 1;
    } else {
        listaCard[key].quantidade++;
    }
    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listaCard.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantidade;
            count += value.quantidade;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>
                    <img src="imgs/${value.img}" alt="${value.name}">
                </div>
                <div class="cardTitle">
                    <h3>${value.name}</h3>
                </div>
                <div class="cardPrice">R$${value.price},00</div>
                <div>
                    <button class="remove" onclick="changeQuantity(${key}, ${value.quantidade - 1})"> - </button>
                    <div class="count">${value.quantidade}</div>
                    <button class="add" onclick="changeQuantity(${key}, ${value.quantidade + 1})"> + </button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });
    total.innerHTML = "Total: R$" + totalPrice.toLocaleString() + ",00";
    quantidade.innerHTML = count;
};

const changeQuantity = (key, quantity) => {
    if (quantity === 0) {
        delete listaCard[key];
    } else {
        listaCard[key].quantidade = quantity;
    }
    reloadCard();
}
