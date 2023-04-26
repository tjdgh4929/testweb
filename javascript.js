let priceInput = document.getElementById("price");

function formatPrice() {
  let price = priceInput.value.replace(/\D/g, "");
  price = Number(price).toLocaleString();
  priceInput.value = price;
}

function calculate() {
  let price = document.getElementById("price").value.replace(/\D/g, "");
  let taxRate = document.getElementById("taxRate").value;
  let tax = price * (taxRate / 100);
  let totalPrice = Number(price) + tax;
  let formattedTotalPrice = totalPrice.toLocaleString();
  document.getElementById("result").value = formattedTotalPrice;
}
