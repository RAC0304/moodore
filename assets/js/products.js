// Sample products data - in real implementation, this would come from an API
const products = [
  {
    id: 1,
    category: "electronics",
    title:
      "Smartphone Premium Plus X20 dengan Kamera 108MP dan Baterai Tahan Lama",
    image: "/api/placeholder/400/320",
    description:
      "Smartphone terbaru dengan teknologi kamera canggih, baterai tahan lama, dan performa super cepat untuk memenuhi kebutuhan digital Anda sehari-hari.",
    features: [
      "Kamera 108MP dengan Night Mode",
      "Baterai 5000mAh dengan fast charging 65W",
      "Prosesor Snapdragon 8 Gen 2",
      "RAM 12GB + ROM 256GB",
      "Layar AMOLED 6.7 inch 120Hz",
    ],
  },
  {
    id: 2,
    category: "electronics",
    title: "Smartwatch Pro Health Monitor dengan Fitur Canggih",
    image: "/api/placeholder/400/320",
    description:
      "Smartwatch canggih yang dapat memantau kesehatan Anda, dilengkapi dengan berbagai fitur olahraga dan notifikasi pintar.",
    features: [
      "Monitor detak jantung 24/7",
      "Pelacakan tidur otomatis",
      "Tahan air hingga 50m",
      "Baterai tahan 14 hari",
      "Kompatibel dengan Android & iOS",
    ],
  },
  {
    id: 3,
    category: "health",
    title: "Vitamin C 1000mg dengan Zinc Daya Tahan Tubuh",
    image: "",
    description:
      "Suplemen vitamin C berkualitas tinggi dengan tambahan Zinc untuk meningkatkan daya tahan tubuh dan kesehatan Anda.",
    features: [
      "Vitamin C 1000mg per tablet",
      "Dengan tambahan Zinc 15mg",
      "Antioksidan tinggi",
      "Meningkatkan imunitas",
      "90 tablet per botol",
    ],
  },
  {
    id: 4,
    category: "fashion",
    title: "Tas Ransel Anti Air dengan Port USB",
    image: "/api/placeholder/400/320",
    description:
      "Tas ransel modern dengan material anti air, dilengkapi port USB dan kompartemen laptop yang aman.",
    features: [
      "Material polyester anti air",
      "Port USB eksternal",
      "Kompartemen laptop hingga 15.6 inch",
      "Banyak kantong dan organizer",
      "Tali bahu ergonomis",
    ],
  },
  {
    id: 5,
    category: "home",
    title: "Air Fryer Digital 5.5L Hemat Minyak",
    image: "../assets/image/air-fryer.png",
    description:
      "Air fryer digital dengan kapasitas besar untuk memasak lebih sehat dengan sedikit atau tanpa minyak sama sekali.",
    features: [
      "Kapasitas 5.5 liter",
      "Layar sentuh digital",
      "8 program memasak otomatis",
      "Memasak dengan 90% lebih sedikit minyak",
      "Mudah dibersihkan",
    ],
  },
  {
    id: 6,
    category: "electronics",
    title: "Earbuds Nirkabel dengan Noise Cancelling",
    image: "/api/placeholder/400/320",
    description:
      "Earbuds wireless dengan fitur active noise cancelling untuk pengalaman mendengarkan musik yang lebih imersif.",
    features: [
      "Active Noise Cancelling",
      "Baterai hingga 30 jam",
      "Koneksi Bluetooth 5.2",
      "Tahan air IPX5",
      "Mikrofon dual untuk panggilan jernih",
    ],
  },
  {
    id: 7,
    category: "fashion",
    title: "Kaos Polos Katun Premium",
    image: "/api/placeholder/400/320",
    description:
      "Kaos polos berbahan katun premium yang nyaman dipakai sehari-hari.",
    features: [
      "Bahan katun 100%",
      "Tersedia dalam berbagai ukuran",
      "Nyaman dan tidak panas",
      "Cocok untuk pria dan wanita",
      "Pilihan warna beragam",
    ],
  },
  {
    id: 8,
    category: "fashion",
    title: "Celana Jeans Slim Fit",
    image: "/api/placeholder/400/320",
    description:
      "Celana jeans slim fit dengan desain modern untuk gaya kasual Anda.",
    features: [
      "Bahan denim berkualitas",
      "Potongan slim fit",
      "Tersedia dalam berbagai ukuran",
      "Cocok untuk acara santai",
      "Tahan lama dan mudah dicuci",
    ],
  },
  {
    id: 9,
    category: "fashion",
    title: "Sepatu Sneakers Kasual",
    image: "/api/placeholder/400/320",
    description:
      "Sepatu sneakers kasual yang stylish dan nyaman untuk aktivitas sehari-hari.",
    features: [
      "Desain modern dan trendi",
      "Sol karet anti slip",
      "Bahan breathable",
      "Ringan dan nyaman dipakai",
      "Tersedia dalam berbagai ukuran",
    ],
  },
  {
    id: 10,
    category: "fashion",
    title: "Jaket Hoodie Fleece",
    image: "/api/placeholder/400/320",
    description:
      "Jaket hoodie berbahan fleece yang hangat dan nyaman untuk cuaca dingin.",
    features: [
      "Bahan fleece berkualitas",
      "Tersedia kantong depan",
      "Desain unisex",
      "Tersedia dalam berbagai warna",
      "Cocok untuk musim dingin",
    ],
  },
  {
    id: 11,
    category: "fashion",
    title: "Sandal Kulit Casual",
    image: "/api/placeholder/400/320",
    description: "Sandal kulit casual yang cocok untuk gaya santai Anda.",
    features: [
      "Bahan kulit asli",
      "Desain ergonomis",
      "Sol anti slip",
      "Ringan dan nyaman",
      "Tersedia dalam berbagai ukuran",
    ],
  },
];

const itemsPerPage = 9;
let currentPage = 1;
let filteredProducts = products; // Initialize filteredProducts with all products

// Format currency to IDR
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

// Render products with pagination
function renderProducts(productsToRender, page = 1) {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = productsToRender.slice(startIndex, endIndex);

  paginatedProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-id", product.id);

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-info">
        <div class="product-category">${
          product.category.charAt(0).toUpperCase() + product.category.slice(1)
        }</div>
        <h3 class="product-title">${product.title}</h3>
        <div class="cta-buttons">
          <button class="buy-now-btn">Beli Sekarang</button>
          <button class="more-info-btn" data-id="${product.id}">Info</button>
        </div>
      </div>
    `;

    container.appendChild(productCard);
  });

  // Add event listeners to buttons
  document.querySelectorAll(".more-info-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      openProductModal(productId);
    });
  });

  document.querySelectorAll(".buy-now-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productId = productCard.getAttribute("data-id");
      redirectToAffiliate(productId);
    });
  });
}

// Render pagination buttons
function renderPagination(totalItems) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      currentPage = i;
      renderProducts(filteredProducts, currentPage);
      renderPagination(filteredProducts.length);
    });
    paginationContainer.appendChild(button);
  }
}

// Open product modal
function openProductModal(productId) {
  const product = products.find((p) => p.id == productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const productDetail = document.getElementById("productDetail");

  let featuresHTML = "";
  product.features.forEach((feature) => {
    featuresHTML += `<li>${feature}</li>`;
  });

  productDetail.innerHTML = `
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-detail-info">
                    <h2 class="product-detail-title">${product.title}</h2>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-features">
                        <h3>Fitur Utama</h3>
                        <ul>${featuresHTML}</ul>
                    </div>
                    <button class="buy-now-btn" onclick="redirectToAffiliate(${product.id})">Beli Sekarang</button>
                </div>
            `;

  modal.style.display = "block";
}

// Close modal when clicking the close button
document.querySelector(".close-modal").addEventListener("click", function () {
  document.getElementById("productModal").style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("productModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Redirect to affiliate link
function redirectToAffiliate(productId) {
  // In a real implementation, this would redirect to the actual affiliate link
  alert(`Redirecting to affiliate purchase page for product ID: ${productId}`);
  // window.location.href = `https://affiliate-partner.com/buy/product${productId}?ref=youraffiliateID`;
}

// Filter and search functionality
function filterProducts() {
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;
  const sortFilter = document.getElementById("sortFilter").value;

  filteredProducts = products.filter((product) => {
    // Category filter
    if (categoryFilter !== "all" && product.category !== categoryFilter) {
      return false;
    }

    // Search filter
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery)) {
      return false;
    }

    return true;
  });

  // Sort the filtered products
  switch (sortFilter) {
    case "oldmoney":
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "koreanstyle":
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "streetwear":
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
    case "minimalist":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case "vintage":
      filteredProducts.reverse();
      break;
    case "genderless":
      filteredProducts.sort((a, b) => b.features.length - a.features.length);
      break;
    default:
      break; // No sorting for "Semua Gaya"
  }

  renderProducts(filteredProducts, currentPage);
  renderPagination(filteredProducts.length);
}

// Initialize the page
window.onload = function () {
  filteredProducts = products; // Initialize filteredProducts with all products
  renderProducts(filteredProducts, currentPage);
  renderPagination(filteredProducts.length);
};

// Event listeners for filters
document
  .getElementById("searchInput")
  .addEventListener("input", filterProducts);
document
  .getElementById("categoryFilter")
  .addEventListener("change", filterProducts);
document
  .getElementById("sortFilter")
  .addEventListener("change", filterProducts);
