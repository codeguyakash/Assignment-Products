const chocolates = [
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 10.5,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 15.5,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 12.58,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 25.15,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 150.25,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 22.9,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 11.8,
  },
  {
    name: "Chocolate A",
    img: "https://imgmedia.lbb.in/media/2023/07/64a529d41b90700d6016875e_1688545748899.jpg",
    price: 12.5,
  },
];

let totalPrice = 0;

function updateTotalPrice() {
  totalPrice = 0;
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkboxes.forEach((checkbox) => {
    const chocolateIndex = checkbox.value;
    totalPrice += chocolates[chocolateIndex].price;
  });

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

const chocolatesContainer = document.querySelector(".chocolates");

chocolates.forEach((chocolate, index) => {
  const chocolateItem = document.createElement("div");
  chocolateItem.className = "chocolate-item";
  chocolateItem.innerHTML = `<div>
                            <label>
  <input type="checkbox" value="${index}" onchange="updateTotalPrice()">
  ${chocolate.name} ($${chocolate.price.toFixed(2)})
 
  </label>
  <img src="${chocolate.img}" alt="product-img">
  </div>
    `;
  chocolatesContainer.appendChild(chocolateItem);
});

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  alert(`Total Price: $${totalPrice.toFixed(2)}`);
});
