
  function addToCart(productName) {
    const cart = document.getElementById("cart-items");
    const listItem = document.createElement("li");
    listItem.textContent = productName;
    cart.appendChild(listItem);
  }

  // Add to Cart buttons for each product
  const buyNowButtons = document.querySelectorAll(".buynow, .buynow1, .vocc");
  
  buyNowButtons.forEach(button => {
    button.addEventListener("click", function() {
      const productName = this.parentElement.querySelector("h1").textContent;
      addToCart(productName);
    });
  });
