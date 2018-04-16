var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');
var cart = document.querySelector('#cart');
var checkoutBtn = document.querySelector('nav button');

var selectedArray = [];
var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100",
        alt: "image 100",
        title: "Off Season Beach Dwellers",
        cost: 100,
        desc: "Families enjoying time at the beach is a cool hazy day."
    },
    {
        img: "http://unsplash.it/256/256?image=206",
        alt: "image 206",
        title: "Farmhouse Sunrise",
        cost: 95,
        desc: "Morning sunlight casting long shadows over a grassy field."
    },
    {
        img: "http://unsplash.it/256/256?image=401",
        alt: "image 401",
        title: "Touch the Sky",
        cost: 75,
        desc: "Lifting off for a hot air balloon ride."
    },
    {
        img: "http://unsplash.it/256/256?image=998",
        alt: "image 998",
        title: "Travel Notes",
        cost: 115,
        desc: "Notes and photos bound together after a long trip."
    },
    {
        img: "http://unsplash.it/256/256?image=412",
        alt: "image 412",
        title: "Trees on the Lake",
        cost: 125,
        desc: "Hazy view of a tree lined reflection."
    }
];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        var item = `
        <li data-sku="${i}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3>${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
}

displayItems(itemArray);


function addListener(arr, objArr){
    for(var i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', function(evt, arr){
            this.classList.toggle('selected');
            
            // TERNARY OPERATOR // aka super awesome if statement
            /*
            (this.firstElementChild.checked) ?
                this.firstElementChild.checked = false : 
                this.firstElementChild.checked = true;
            */

            // REFACTOR THE TERNARY FOR ADDITIONAL FUNCTIONALITY
            if(!this.firstElementChild.checked){
                this.firstElementChild.checked = true;
                selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]);
            }else{
                this.firstElementChild.checked = false;
                selectedArray.pop(this.dataset.sku);
            }

            updateCart(selectedArray.length);
        });
    }
}

addListener(items.children, itemArray);

function updateCart(num){
    cart.lastElementChild.innerHTML = num;
}

checkoutBtn.addEventListener('click', function(evt, arr){
    checkout(selectedArray);
});

function checkout(arr){
    (!arr.length) ? console.log('no items') : console.log('you have items');
}

