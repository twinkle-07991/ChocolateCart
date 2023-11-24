let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let countItem = 0;

openShopping.addEventListener('click', ()=>{
    console.log('akashhhhhhh');
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'CHOCOLATE 1',
        image: '1.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'CHOCOLATE 2',
        image: '2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'CHOCOLATE 3',
        image: '3.jpeg',
        price: 220000
    },
    {
        id: 4,
        name: 'CHOCOLATE 4',
        image: '4.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'CHOCOLATE 5',
        image: '5.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'CHOCOLATE 6',
        image: '6.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'CHOCOLATE 7',
        image: '7.jpeg',
        price: 120000
    },
    {
        id: 8,
        name: 'CHOCOLATE 8',
        image: '8.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'CHOCOLATE 9',
        image: '9.jpg',
        price: 120000
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(countItem<8){
        if(listCards[key] == null){
            // copy product form list to list card
            listCards[key] = JSON.parse(JSON.stringify(products[key]));
            listCards[key].quantity = 1;
            countItem++;
        }
        reloadCard();
    }
    else{
        alert("Not allowed to add more chocolate!");

    }

}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1},${ -1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1}, ${ 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity,check){

    if (check>0 && countItem<8){
        countItem = countItem+1;
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * products[key].price;
        }
        reloadCard();
    }
    else if(check>0){
        alert("Not allowed to add more chocolate!");
    }
    if(check<0){
        countItem = countItem-1;
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * products[key].price;
        }
        reloadCard();
    }

}