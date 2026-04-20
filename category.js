        /* ===== FILTER ===== */
        function filterCategory(type) {
    let items = document.querySelectorAll(".product-item");
    let title = document.getElementById("category-title");

    let nameMap = {
        all: "Tất cả sản phẩm",
        ao: "Danh mục: Áo",
        quan: "Danh mục: Quần",
        hoodie: "Danh mục: Hoodie",
        giay: "Danh mục: Giày"
    };

    items.forEach(item => {
        item.style.display =
            (type === "all" || item.classList.contains(type))
                ? "block"
                : "none";
    });

    title.innerText = nameMap[type] || "Danh mục";
}

        /* ===== SEARCH ===== */
        function searchCategory() {
            let keyword = document.querySelector(".search-box input").value.toLowerCase();
            let items = document.querySelectorAll(".product-item");

            items.forEach(item => {
                let text = item.innerText.toLowerCase();
                item.style.display = text.includes(keyword) ? "block" : "none";
            });
        }

        /* ===== PAGINATION ===== */
        let currentPage = 1;
        const itemsPerPage = 4;

        function showPage(page) {
            let items = document.querySelectorAll(".product-item");

            items.forEach((item, index) => {
                let start = (page - 1) * itemsPerPage;
                let end = start + itemsPerPage;

                item.style.display = (index >= start && index < end) ? "block" : "none";
            });
        }

        function changePage(page) {
            currentPage = page;
            showPage(page);
        }

        document.addEventListener("DOMContentLoaded", function () {
            showPage(1);
        });