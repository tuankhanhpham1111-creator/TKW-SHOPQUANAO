let product = JSON.parse(localStorage.getItem("currentProduct"));

let selectedSize = "";

const allProducts = [
  {
    name: "Áo thun nam basic",
    price: 199000,
    old: 249000,
    images: ["anh/Quanao/aoDen.png", "anh/Quanao/aoDenNguoimac.png","anh/Quanao/aoDenNguoimacGOCXEO.png"]
  },
  {
    name: "Quần jean nam",
    price: 299000,
    old: 349000,
    images: ["anh/Quanao/Quanden.png","anh/Quanao/QuandenNguoimac.png","anh/Quanao/QuandenNguoimacGOCXEO.png"]
  },
  {
    name: "Áo hoodie",
    price: 399000,
    old: 449000,
    images: ["anh/Quanao/Aohoodie.png","anh/Quanao/AohoodieNguoimac.png","anh/Quanao/AohoodieNguoimacGOCXEO.png"]
  },
  {
    name: "Giày sneaker",
    price: 499000,
    old: 599000,
    images: ["anh/Quanao/Giay.png","anh/Quanao/GiayGocxeo.png","anh/Quanao/GiayNguoimang.png"]
  }
];

document.addEventListener("DOMContentLoaded", function () {

  if (!product) {
    document.body.innerHTML = "<h2 style='text-align:center'>Không có sản phẩm</h2>";
    return;
  }

  // ===== HIỂN THỊ =====
  document.getElementById("name").innerText = product.name;
  document.getElementById("price").innerText = product.price.toLocaleString() + "đ";
  document.getElementById("old").innerText = product.old.toLocaleString() + "đ";

  // ===== ẢNH =====
  let main = document.getElementById("main-img");
  main.src = product.images[0];

  let thumbs = document.getElementById("thumbs");
  product.images.forEach(img => {
    let el = document.createElement("img");
    el.src = img;
    el.style.width = "60px";
    el.style.cursor = "pointer";

    el.onclick = () => main.src = img;

    thumbs.appendChild(el);
  });

  // ===== SIZE =====
  let sizes = ["S", "M", "L", "XL"];
  let sizeBox = document.getElementById("sizes");

  sizes.forEach(s => {
    let btn = document.createElement("button");
    btn.innerText = s;
    btn.className = "btn btn-outline-dark m-1";

    btn.onclick = () => {
      selectedSize = s;
      document.querySelectorAll("#sizes button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    sizeBox.appendChild(btn);
  });

  // ===== REVIEW LOAD =====
  loadReviews();

  // ===== RELATED =====
  loadRelated();
});


// ===== ADD CART =====
function addToCart() {
  if (!selectedSize) {
    alert("Vui lòng chọn size!");
    return;
  }

  let name = product.name + " - Size " + selectedSize;
  addToCartFromCard(name);
}


// ===== REVIEW =====
function loadReviews() {
  let data = JSON.parse(localStorage.getItem("reviews_" + product.name)) || [];
  let box = document.getElementById("reviews");

  box.innerHTML = "";

  data.forEach(r => {
    box.innerHTML += `<p>⭐ ${r}</p>`;
  });
}

function addReview() {
  let input = document.getElementById("review-input");
  let text = input.value.trim();

  if (!text) return;

  let key = "reviews_" + product.name;
  let data = JSON.parse(localStorage.getItem(key)) || [];

  data.push(text);
  localStorage.setItem(key, JSON.stringify(data));

  input.value = "";
  loadReviews();
}


// ===== RELATED =====
function loadRelated() {
  let box = document.getElementById("related");

  let related = allProducts.filter(p => p.name !== product.name);

  related.slice(0, 3).forEach(p => {
    box.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${p.images[0]}">
          <div class="card-body text-center">
            <h6>${p.name}</h6>
            <button class="btn btn-warning btn-sm"
              onclick='goToProduct(${JSON.stringify(p)})'>
              Xem
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function goToProductByIndex(index){
  let list = JSON.parse(localStorage.getItem("allProducts")) || [];

  let product = list[index];

  if(product){
    localStorage.setItem("currentProduct", JSON.stringify(product));
    window.location.href = "product.html";
  }
}function formatPrice(number) {
  return number.toLocaleString('vi-VN') + "đ";
}
document.addEventListener("DOMContentLoaded", () => {

    let product = JSON.parse(localStorage.getItem("currentProduct"));

    if (!product) {
        alert("Không có sản phẩm!");
        return;
    }

    function formatPrice(number) {
        return number.toLocaleString('vi-VN') + "đ";
    }

    document.getElementById("name").innerText = product.name;

    document.getElementById("price").innerText = formatPrice(product.price);
    document.getElementById("old").innerText = formatPrice(product.old);

});