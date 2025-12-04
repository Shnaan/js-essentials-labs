let amount1;
let amount2;
let amount3;

function calculateGroceryTotal(){


amount1 = parseFloat(document.getElementById('amount1').value);
amount2 = parseFloat(document.getElementById('amount2').value);
amount3 = parseFloat(document.getElementById('amount3').value);

if (isNaN(amount1) || isNaN(amount2) || isNaN(amount3)) {
    alert("Please enter all 3 grocery amounts.");
    return;
}


let totalAmount = amount1 + amount2 + amount3;

document.getElementById('result').innerText = `The total amount is :$ ${totalAmount.toFixed(2)}`;


}


