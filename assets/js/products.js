// Sample products data - in real implementation, this would come from an API
const products = [
  {
    id: 1,
    category: "electronics",
    title:
      "Smartphone Premium Plus X20 dengan Kamera 108MP dan Baterai Tahan Lama",
    image: "/api/placeholder/400/320",
    rating: 4.8,
    ratingCount: 456,
    currentPrice: 4599000,
    originalPrice: 5999000,
    discount: "23%",
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
    rating: 4.6,
    ratingCount: 289,
    currentPrice: 1299000,
    originalPrice: 1799000,
    discount: "28%",
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
    rating: 4.9,
    ratingCount: 712,
    currentPrice: 159000,
    originalPrice: 199000,
    discount: "20%",
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
    rating: 4.7,
    ratingCount: 345,
    currentPrice: 299000,
    originalPrice: 399000,
    discount: "25%",
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
    rating: 4.8,
    ratingCount: 523,
    currentPrice: 899000,
    originalPrice: 1299000,
    discount: "31%",
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
    rating: 4.5,
    ratingCount: 278,
    currentPrice: 849000,
    originalPrice: 1099000,
    discount: "23%",
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
];

// Format currency to IDR
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

// Generate star rating HTML
function generateStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += "★";
  }

  if (halfStar) {
    stars += "★";
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars += "☆";
  }

  return stars;
}

// Render products
function renderProducts(productsToRender) {
  const container = document.getElementById("productsContainer");
  container.innerHTML = "";

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-id", product.id);

    productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.title}">
                        ${
                          product.discount
                            ? `<span class="discount-badge">-${product.discount}</span>`
                            : ""
                        }
                    </div>
                    <div class="product-info">
                        <div class="product-category">${
                          product.category.charAt(0).toUpperCase() +
                          product.category.slice(1)
                        }</div>
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-rating">
                            <div class="stars">${generateStars(
                              product.rating
                            )}</div>
                            <div class="rating-count">(${
                              product.ratingCount
                            })</div>
                        </div>
                        <div class="product-price">
                            <div class="current-price">${formatRupiah(
                              product.currentPrice
                            )}</div>
                            <div class="original-price">${formatRupiah(
                              product.originalPrice
                            )}</div>
                        </div>
                        <div class="cta-buttons">
                            <button class="buy-now-btn">Beli Sekarang</button>
                            <button class="more-info-btn" data-id="${
                              product.id
                            }">Info</button>
                        </div>
                    </div>
                `;

    container.appendChild(productCard);
  });

  // Add event listeners to the more info buttons
  document.querySelectorAll(".more-info-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      openProductModal(productId);
    });
  });

  // Add event listeners to the buy now buttons
  document.querySelectorAll(".buy-now-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");
      const productId = productCard.getAttribute("data-id");
      redirectToAffiliate(productId);
    });
  });
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
                    <div class="product-rating">
                        <div class="stars">${generateStars(
                          product.rating
                        )}</div>
                        <div class="rating-count">(${
                          product.ratingCount
                        } ulasan)</div>
                    </div>
                    <p class="product-detail-description">${
                      product.description
                    }</p>
                    <div class="product-features">
                        <h3>Fitur Utama</h3>
                        <ul>${featuresHTML}</ul>
                    </div>
                    <div class="buy-section">
                        <div class="product-price">
                            <div class="current-price">${formatRupiah(
                              product.currentPrice
                            )}</div>
                            <div class="original-price">${formatRupiah(
                              product.originalPrice
                            )}</div>
                            <div class="discount-badge">-${
                              product.discount
                            }</div>
                        </div>
                        <button class="buy-now-btn" onclick="redirectToAffiliate(${
                          product.id
                        })">Beli Sekarang</button>
                    </div>
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

  let filteredProducts = products.filter((product) => {
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
    case "price-low":
      filteredProducts.sort((a, b) => a.currentPrice - b.currentPrice);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.currentPrice - a.currentPrice);
      break;
    case "newest":
      // In a real implementation, you would have a date field to sort by
      // For this example, we're just reversing the order as a placeholder
      filteredProducts.reverse();
      break;
    case "popular":
    default:
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderProducts(filteredProducts);
}

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

// Pagination (simplified for demo - in a real implementation this would use actual pagination)
document.getElementById("pagination").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    document.querySelectorAll("#pagination button").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // In a real implementation, you would load the appropriate page of products here
  }
});

// Initialize the page
window.onload = function () {
  renderProducts(products);
  document.querySelector("#pagination button").classList.add("active");
};
