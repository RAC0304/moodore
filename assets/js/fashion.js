// Style data with products
const styleData = {
  "old-money": {
    title: "Old Money Style",
    description:
      "The Old Money aesthetic embraces timeless elegance with high-quality fabrics and classic silhouettes. This style features neutral color palettes, tailored pieces, and heritage elements that never go out of fashion.",
    products: [
      {
        name: "Cashmere Sweater",
        description: "Premium quality cashmere in a classic fit",
        image: "/api/placeholder/200/200",
        link: "https://example.com/cashmere-sweater",
      },
      {
        name: "Tailored Wool Blazer",
        description: "Structured wool blazer with subtle check pattern",
        image: "/api/placeholder/200/200",
        link: "https://example.com/tailored-blazer",
      },
      {
        name: "Penny Loafers",
        description: "Classic leather penny loafers in burgundy",
        image: "/api/placeholder/200/200",
        link: "https://example.com/penny-loafers",
      },
      {
        name: "Pleated Trousers",
        description: "High-waisted pleated trousers in beige",
        image: "/api/placeholder/200/200",
        link: "https://example.com/pleated-trousers",
      },
      {
        name: "Pearl Necklace",
        description: "Timeless freshwater pearl strand necklace",
        image: "/api/placeholder/200/200",
        link: "https://example.com/pearl-necklace",
      },
      {
        name: "Silk Scarf",
        description: "Patterned silk scarf with equestrian motifs",
        image: "/api/placeholder/200/200",
        link: "https://example.com/silk-scarf",
      },
    ],
  },
  korean: {
    title: "Korean Style",
    description:
      "Korean fashion combines modest cuts with contemporary trends, featuring oversized silhouettes, layering, and a harmonious blend of casual and formal elements. This style emphasizes clean lines and subtle details.",
    products: [
      {
        name: "Oversized Button-Up",
        description: "Loose-fit cotton button-up shirt in white",
        image: "/api/placeholder/200/200",
        link: "https://example.com/oversized-button-up",
      },
      {
        name: "Wide-Leg Pants",
        description: "High-waisted wide-leg trousers in black",
        image: "/api/placeholder/200/200",
        link: "https://example.com/wide-leg-pants",
      },
      {
        name: "Cardigan Set",
        description: "Matching knit cardigan and top set",
        image: "/api/placeholder/200/200",
        link: "https://example.com/cardigan-set",
      },
      {
        name: "Canvas Tote Bag",
        description: "Simple canvas tote with minimal graphics",
        image: "/api/placeholder/200/200",
        link: "https://example.com/canvas-tote-bag",
      },
      {
        name: "Minimal Sneakers",
        description: "Clean white leather sneakers",
        image: "/api/placeholder/200/200",
        link: "https://example.com/minimal-sneakers",
      },
      {
        name: "Beret Hat",
        description: "Wool beret in classic black",
        image: "/api/placeholder/200/200",
        link: "https://example.com/beret-hat",
      },
    ],
  },
  streetwear: {
    title: "Streetwear",
    description:
      "Streetwear combines urban culture with comfort and bold expression. This style features graphic elements, relaxed fits, and statement accessories that reflect contemporary subcultures and artistic influences.",
    products: [
      {
        name: "Graphic Hoodie",
        description: "Oversized hoodie with original graphic design",
        image: "/api/placeholder/200/200",
        link: "https://example.com/graphic-hoodie",
      },
      {
        name: "Cargo Pants",
        description: "Multi-pocket cargo pants with drawstring details",
        image: "/api/placeholder/200/200",
        link: "https://example.com/cargo-pants",
      },
      {
        name: "High-Top Sneakers",
        description: "Canvas high-tops with bold color accents",
        image: "/api/placeholder/200/200",
        link: "https://example.com/high-top-sneakers",
      },
      {
        name: "Bucket Hat",
        description: "Cotton bucket hat with embroidered logo",
        image: "/api/placeholder/200/200",
        link: "https://example.com/bucket-hat",
      },
      {
        name: "Crossbody Bag",
        description: "Utility crossbody with multiple compartments",
        image: "/api/placeholder/200/200",
        link: "https://example.com/crossbody-bag",
      },
      {
        name: "Statement Socks",
        description: "Colorful patterned crew socks",
        image: "/api/placeholder/200/200",
        link: "https://example.com/statement-socks",
      },
    ],
  },
  minimalist: {
    title: "Minimalist",
    description:
      "Minimalist fashion focuses on simplicity, clean lines, and a neutral color palette. This style emphasizes quality over quantity, with versatile pieces that can be mixed and matched effortlessly.",
    products: [
      {
        name: "Basic T-Shirt",
        description: "Premium cotton tee in black, white, or gray",
        image: "/api/placeholder/200/200",
        link: "https://example.com/basic-tshirt",
      },
      {
        name: "Slim Trousers",
        description: "Classic slim-fit trousers in navy",
        image: "/api/placeholder/200/200",
        link: "https://example.com/slim-trousers",
      },
      {
        name: "Leather Slip-Ons",
        description: "Simple leather slip-on shoes in tan",
        image: "/api/placeholder/200/200",
        link: "https://example.com/leather-slip-ons",
      },
      {
        name: "Structured Tote",
        description: "Clean-lined leather tote in black",
        image: "/api/placeholder/200/200",
        link: "https://example.com/structured-tote",
      },
      {
        name: "Crewneck Sweater",
        description: "Lightweight merino wool sweater",
        image: "/api/placeholder/200/200",
        link: "https://example.com/crewneck-sweater",
      },
      {
        name: "Simple Watch",
        description: "Minimalist watch with leather strap",
        image: "/api/placeholder/200/200",
        link: "https://example.com/simple-watch",
      },
    ],
  },
  vintage: {
    title: "Vintage Revival",
    description:
      "Vintage Revival incorporates elements from past decades with a modern twist. This style celebrates retro patterns, unique silhouettes, and nostalgic details that give a nod to fashion history.",
    products: [
      {
        name: "High-Waisted Jeans",
        description: "70s-inspired high-waisted flared jeans",
        image: "/api/placeholder/200/200",
        link: "https://example.com/high-waisted-jeans",
      },
      {
        name: "Printed Button-Up",
        description: "Short-sleeve button-up with retro patterns",
        image: "/api/placeholder/200/200",
        link: "https://example.com/printed-button-up",
      },
      {
        name: "Platform Boots",
        description: "Chunky platform boots with contrast stitching",
        image: "/api/placeholder/200/200",
        link: "https://example.com/platform-boots",
      },
      {
        name: "Corduroy Jacket",
        description: "Classic corduroy jacket with sherpa lining",
        image: "/api/placeholder/200/200",
        link: "https://example.com/corduroy-jacket",
      },
      {
        name: "Cat-Eye Sunglasses",
        description: "Retro-inspired cat-eye sunglasses with tinted lenses",
        image: "/api/placeholder/200/200",
        link: "https://example.com/cat-eye-sunglasses",
      },
    ],
  },
  genderless: {
    title: "Genderless",
    description:
      "Genderless fashion challenges traditional norms with versatile pieces that transcend conventional categories. This style focuses on comfort, self-expression, and inclusive design that works for everyone.",
    products: [
      {
        name: "Oversized Denim Jacket",
        description: "Unisex oversized denim jacket with minimal detailing",
        image: "/api/placeholder/200/200",
        link: "https://example.com/oversized-denim-jacket",
      },
      {
        name: "Wide-Cut Trousers",
        description: "Relaxed-fit trousers with elastic waistband",
        image: "/api/placeholder/200/200",
        link: "https://example.com/wide-cut-trousers",
      },
      {
        name: "Boxy T-Shirt",
        description: "Drop-shoulder tee in organic cotton",
        image: "/api/placeholder/200/200",
        link: "https://example.com/boxy-tshirt",
      },
      {
        name: "Utility Jumpsuit",
        description: "One-piece cotton twill jumpsuit with pockets",
        image: "/api/placeholder/200/200",
        link: "https://example.com/utility-jumpsuit",
      },
      {
        name: "Canvas Sneakers",
        description: "Classic canvas sneakers in neutral colors",
        image: "/api/placeholder/200/200",
        link: "https://example.com/canvas-sneakers",
      },
      {
        name: "Beanie Hat",
        description: "Slouchy knit beanie in gray",
        image: "/api/placeholder/200/200",
        link: "https://example.com/beanie-hat",
      },
    ],
  },
};

// DOM Elements
const stylesGrid = document.getElementById("stylesGrid");
const styleModal = document.getElementById("styleModal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const productsShowcase = document.getElementById("productsShowcase");
const styleSearch = document.getElementById("styleSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const productSearch = document.getElementById("productSearch");

// About Modal Elements
const aboutBtn = document.getElementById("about-btn");
const aboutModal = document.getElementById("aboutModal");
const closeAboutModal = aboutModal.querySelector(".close-modal");

// Mobile Menu Functionality
const mobileMenuToggle = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

mobileMenuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenuToggle.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
  const isClickInsideNav = nav.contains(e.target);
  const isClickOnToggle = mobileMenuToggle.contains(e.target);

  if (
    !isClickInsideNav &&
    !isClickOnToggle &&
    nav.classList.contains("active")
  ) {
    mobileMenuToggle.classList.remove("active");
    nav.classList.remove("active");
  }
});

// Event Listeners
styleSearch.addEventListener("input", filterStyles);
closeModal.addEventListener("click", () =>
  styleModal.classList.remove("active")
);

// Add event listeners to all style card buttons
document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const styleCard = this.closest(".style-card");
    const styleType = styleCard.dataset.style;
    openStyleModal(styleType);
  });
});

// Add event listeners to all style cards
document.querySelectorAll(".style-card").forEach((card) => {
  card.addEventListener("click", function () {
    const styleType = this.dataset.style;
    openStyleModal(styleType);
  });
});

// Add click event to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    filterStyles();
  });
});

// Event Listeners for About Modal
aboutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  aboutModal.classList.add("active");
});

closeAboutModal.addEventListener("click", function () {
  aboutModal.classList.remove("active");
});

// Close about modal when clicking outside of content
window.addEventListener("click", function (e) {
  if (e.target === aboutModal) {
    aboutModal.classList.remove("active");
  }
});

// Add about modal to Escape key handler
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (styleModal.classList.contains("active")) {
      styleModal.classList.remove("active");
    }
    if (aboutModal.classList.contains("active")) {
      aboutModal.classList.remove("active");
    }
  }
});

// Functions
function openStyleModal(styleType) {
  const style = styleData[styleType];
  if (!style) return;

  modalImage.src = document.querySelector(
    `.style-card[data-style="${styleType}"] .style-image`
  ).src;
  modalTitle.textContent = style.title;
  modalDescription.textContent = style.description;

  // Clear previous products
  productsShowcase.innerHTML = "";

  // Add products to showcase
  style.products.forEach((product) => {
    const productCard = createProductCard(product);
    productsShowcase.appendChild(productCard);
  });

  // Reset product search
  productSearch.value = "";

  // Add event listener to product search
  productSearch.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const productCards = productsShowcase.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      const productName = card.querySelector("h4").textContent.toLowerCase();
      const productDesc = card.querySelector("p").textContent.toLowerCase();

      if (
        productName.includes(searchTerm) ||
        productDesc.includes(searchTerm)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Show modal
  styleModal.classList.add("active");
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <a href="${product.link}" class="affiliate-btn" target="_blank">Shop Now</a>
                </div>
            `;

  return productCard;
}

function filterStyles() {
  const searchTerm = styleSearch.value.toLowerCase();
  const activeFilter =
    document.querySelector(".filter-btn.active").dataset.filter;

  // Clear no results message if it exists
  const existingNoResults = document.querySelector(".no-results");
  if (existingNoResults) {
    existingNoResults.remove();
  }

  // Filter style cards
  const styleCards = document.querySelectorAll(".style-card");
  let visibleCount = 0;

  styleCards.forEach((card) => {
    const styleType = card.dataset.style;
    const styleTitle = card.querySelector("h3").textContent.toLowerCase();
    const styleDescription = card.querySelector("p").textContent.toLowerCase();

    // Check if style matches search term
    const matchesSearch =
      styleTitle.includes(searchTerm) || styleDescription.includes(searchTerm);

    // Check if style matches active filter
    const matchesFilter = activeFilter === "all" || styleType === activeFilter;

    // Show or hide card based on filters
    if (matchesSearch && matchesFilter) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Show no results message if needed
  if (visibleCount === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `
                    <h3>No styles found</h3>
                    <p>Try adjusting your search or filters to see more results.</p>
                `;
    stylesGrid.appendChild(noResults);
  }
}

// Close modal when clicking outside of content
window.addEventListener("click", function (e) {
  if (e.target === styleModal) {
    styleModal.classList.remove("active");
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && styleModal.classList.contains("active")) {
    styleModal.classList.remove("active");
  }
});

// Initialize
filterStyles();
