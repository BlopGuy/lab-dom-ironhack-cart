// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector("input");
  const subTotal = product.querySelector(".subtotal span");
  const subTotalValue = Number(price.innerText) * Number(quantity.value);
  subTotal.innerText = subTotalValue;
  return subTotalValue;
  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let productList = document.querySelectorAll("#cart .product");
  let totalValueActual = document.querySelector("#total-value span");
  let totalValue = 0;

  productList.forEach(product => {
    totalValue += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  totalValueActual.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
  });

  //... your code goes here
});
