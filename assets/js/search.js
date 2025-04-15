document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const productCards = document.querySelectorAll(".product-card");

  // Fungsi untuk menangani pencarian
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah form submit default

    const query = searchInput.value.trim().toLowerCase();

    // Loop melalui semua kartu produk
    productCards.forEach((card) => {
      const title = card
        .querySelector(".product-title")
        .textContent.toLowerCase();
      const category = card
        .querySelector(".product-category")
        .textContent.toLowerCase();

      // Cek apakah judul atau kategori sesuai dengan query
      if (title.includes(query) || category.includes(query)) {
        card.style.display = "block"; // Tampilkan kartu jika cocok
      } else {
        card.style.display = "none"; // Sembunyikan kartu jika tidak cocok
      }
    });
  });
});
