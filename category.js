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
        function filterPrice(type) {
    let items = document.querySelectorAll(".product-item");
    let title = document.getElementById("category-title");

    items.forEach(item => {
        let price = parseInt(item.getAttribute("data-price"));
        let show = false;

        if (type === "all") {
            show = true;
        } else if (type === "under200") {
            show = price < 200000;
        } else if (type === "200to400") {
            show = price >= 200000 && price <= 400000;
        } else if (type === "above400") {
            show = price > 400000;
        }

        item.style.display = show ? "block" : "none";
    });

    let titleMap = {
        all: "Tất cả sản phẩm",
        under200: "Sản phẩm dưới 200.000đ",
        "200to400": "Sản phẩm từ 200.000đ đến 400.000đ",
        above400: "Sản phẩm trên 400.000đ"
    };

    title.innerText = titleMap[type] || "Danh mục sản phẩm";
}
