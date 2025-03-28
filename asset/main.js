const list = [
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
  { id: 1, name: "DJI Phantom 2 Vision", price: 599, img: "product.png" },
];
loaddata();

function showMenu() {
  var element = document.getElementById("menuMobile");
  element.classList.toggle("my-menu");
}
function loaddata() {
  document.getElementById("listProduct").innerHTML = "";
  list.forEach((item) => {
    document.getElementById("listProduct").innerHTML += `
      <div class="item-product">
      <img src="./asset/img/${item.img}" />
      <p>${item.name}</p>
      <span>$ ${item.price}</span>
    </div>
    `;
  });
}
