/*
    Array of objects where i can store data about each food option.
    Later i can iterate each food card's value by matching the ids
*/
const foodData = [
    { id: 0, price: 19.99, food: "Frango Frito" },
    { id: 1, price: 29.99, food: "Contra-Filé" },
    { id: 2, price: 21.99, food: "Strogonoff" },
    { id: 3, price: 11.99, food: "Porção de Queijo" },
    { id: 4, price: 5.99, food: "Legumes" },
    { id: 5, price: 9.99, food: "Calabresa" }
];


//currency formatter
let formatter = new Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'});



function calculate_and_show_order() {

    const clientName = document.getElementById("client-name").value;    //grabbing the client's name
    const quantities = document.getElementsByName("quantity");          //returns a NodeList (very much like an array) of all quantities
    const orderContainer = document.getElementById("client_order");     //this is the div where the ouput is gonna be placed in

    //total Value (starts at 0, of course)
    let totalValue = 0;



    //This code is so unnecessary convoluted, I'm shocked it even works!
    orderContainer.innerHTML = `<p>Olá, <strong>${clientName}</strong>,</p> <br> <p>Este é o seu pedido:</p> <br>`;

    for (let element of quantities) {

        //only calculates the price for values above 0
        if (element.value > 0) {

            //inserting the quantity of food, it's type and the the sum
            orderContainer.innerHTML += `<ul><li>${element.value}x ${foodData[element.id].food}: ${formatter.format(element.value * foodData[element.id].price)}</li></ul>`;

            //adds the iterated value to our total value
            totalValue += element.value * foodData[element.id].price;
        }
    }
    //inserts the order's total value
    orderContainer.innerHTML += `<br><p>O valor total do seu pedido é de <strong>${formatter.format(totalValue)}</strong></p>`;
}


//with this button and event I call the above function and display the info 
const button = document.getElementById("calculate_button");
button.addEventListener("click", calculate_and_show_order);