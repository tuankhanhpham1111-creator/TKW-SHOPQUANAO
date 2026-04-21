// ===== LẤY & LƯU =====
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// ===== CẬP NHẬT SỐ =====
function updateCartCount() {
  const cart = getCart();
  const count = document.getElementById('cart-count');
  if (count) count.innerText = cart.length;
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// ===== THÊM GIỎ =====
function addToCartFromCard(product) {
  const cart = getCart();

  cart.push({
    name: product.name,
    price: product.price,
    size: "M", // mặc định (vì index chưa chọn size)
    quantity: 1
  });
  saveCart(cart);
  updateCartCount();

  showToast(name + " đã thêm vào giỏ 🛒");
}

// ===== LOAD =====
document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});
// ===== Header Scroll =====
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function searchProduct() {
  let keyword = document.querySelector(".search-box input").value.toLowerCase().trim();

  let products = document.querySelectorAll(".product-name");
  let title = document.getElementById("section-title");

  let found = false;

  products.forEach(product => {
    let text = product.innerText.toLowerCase();
    let card = product.closest(".col-lg-3");

    if (text.includes(keyword)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // 👉 Cập nhật tiêu đề
  if (keyword !== "") {
    title.innerText = "Sản phẩm nổi bật | " + keyword.charAt(0).toUpperCase() + keyword.slice(1);
  } else {
    title.innerText = "Sản phẩm nổi bật";
  }

  // 👉 Nếu không tìm thấy
  if (!found) {
    title.innerText = "Không tìm thấy sản phẩm";
  }
}
// Mở / đóng chat
function toggleChat() {
  const box = document.getElementById("chat-box");
  const icon = document.getElementById("chat-icon");

  if (!box || !icon) return;

  box.classList.toggle("open");
  icon.classList.toggle("active");
}


// Gửi tin nhắn
function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  if (!input || !chatBody) return;

  const message = input.value.trim();
  if (message === "") return;

  chatBody.innerHTML += `<div class="chat-msg user">${message}</div>`;

  setTimeout(() => {
    chatBody.innerHTML += `<div class="chat-msg shop">Cảm ơn bạn đã nhắn tin!</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Đăng ký nhận tin
function subscribe() {
  let email = document.querySelector(".newsletter input").value.trim();

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Vui lòng nhập email!");
  } else if (!regex.test(email)) {
    alert("Email không hợp lệ!");
  } else {
    alert("Đăng ký thành công 🎉");
  }
}
document.querySelector(".newsletter input")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      subscribe();
    }
  });


// ===== CHUYỂN SANG PRODUCT =====
function goToProduct(product) {
  localStorage.setItem("currentProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

localStorage.setItem("allProducts", JSON.stringify([
  {
    name: "Áo thun nam basic",
    price: 199000,
    old: 249000,
    images: ["anh/Quanao/aoDen.png","anh/Quanao/aoDennguoimac.png","anh/Quanao/aoDenNguoimacGOCXEO.png"]
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
]));