const products = [
  { id: 1, name: "Mushroom Print Camp Shirt", category: "Pakaian", price: 389000, oldPrice: 459000, badge: "Best seller", rating: "4.9", color: "Cream / motif jamur", description: "Kemeja lengan pendek bermotif jamur dengan kerah santai dan bahan ringan. Potongan kasual yang nyaman untuk dipakai sehari-hari." },
  { id: 2, name: "Colorful Garden Camp Shirt", category: "Pakaian", price: 429000, oldPrice: 0, badge: "New", rating: "4.8", color: "Multicolor / motif floral", description: "Kemeja lengan pendek dengan motif floral warna-warni dan potongan santai. Pas untuk tampilan kasual yang cerah." },
  { id: 3, name: "Tree Stitch Casual Sneakers", category: "Sepatu", price: 799000, oldPrice: 0, badge: "", rating: "4.9", color: "Cream / 2 warna", description: "Sneakers bertali warna cream dengan detail jahitan dekoratif dan sol ringan. Nyaman untuk menemani aktivitas harian.", gallery: ["product-3-1.jpg", "product-3-2.jpg", "category-4.jpg", "showcase-img-7.jpg"] },
  { id: 4, name: "Wildflower Linen Trousers", category: "Pakaian", price: 529000, oldPrice: 0, badge: "Limited", rating: "4.7", color: "Natural / 2 warna", description: "Celana linen berpotongan longgar dengan aksen bordir bunga di bagian bawah. Ringan dan nyaman untuk tampilan santai.", gallery: ["product-4-1.jpg", "product-4-2.jpg", "category-5.jpg"] },
  { id: 5, name: "Tropical Patchwork Bucket Hat", category: "Aksesori", price: 259000, oldPrice: 0, badge: "", rating: "4.7", color: "Multicolor / patchwork", description: "Bucket hat bermotif patchwork dengan warna kontras. Aksesori ringan untuk melengkapi gaya sehari-hari.", gallery: ["product-5-1.jpg", "product-5-2.jpg", "category-8.jpg", "showcase-img-4.jpg"] },
  { id: 6, name: "Midnight Floral Camp Shirt", category: "Pakaian", price: 429000, oldPrice: 0, badge: "", rating: "4.8", color: "Navy / motif bunga", description: "Kemeja lengan pendek warna navy dengan motif bunga pink. Pas untuk tampilan santai dengan warna yang berani." },
  { id: 7, name: "Cat Print Long Sleeve Blouse", category: "Pakaian", price: 329000, oldPrice: 0, badge: "Popular", rating: "4.9", color: "Mauve / motif ilustrasi", description: "Blus lengan panjang bermotif ilustrasi dengan potongan nyaman. Mudah dipadukan untuk tampilan kasual." },
  { id: 8, name: "Colorblock Corduroy Overshirt", category: "Pakaian", price: 559000, oldPrice: 0, badge: "New", rating: "4.7", color: "Rust & blue / 1 warna", description: "Overshirt corduroy dengan panel warna rust dan biru serta kancing depan. Bisa dipakai sebagai atasan maupun lapisan luar.", gallery: ["product-8-1.jpg", "product-8-2.jpg", "showcase-img-9.jpg"] },
  { id: 9, name: "Botanical Print Camp Shirt", category: "Pakaian", price: 389000, oldPrice: 0, badge: "", rating: "4.7", color: "Cream & green / botanical", description: "Kemeja lengan pendek bermotif daun botanical warna hijau di atas dasar cream. Ringan untuk dipakai sehari-hari." },
  { id: 10, name: "Embroidered Flower Slides", category: "Sepatu", price: 649000, oldPrice: 0, badge: "", rating: "4.8", color: "Multicolor / aksen bunga", description: "Sandal slip-on dengan strap bermotif dan aksen bunga dekoratif. Pilihan ceria untuk dipakai saat santai." },
  { id: 11, name: "Dark Botanical Linen Trousers", category: "Pakaian", price: 559000, oldPrice: 0, badge: "Popular", rating: "4.8", color: "Natural & navy / motif botanical", description: "Celana panjang berpotongan longgar dengan motif botanical, tersedia dalam warna dasar natural dan navy. Nyaman untuk tampilan kasual yang tetap rapi.", gallery: ["product-11-1.jpg", "product-11-2.jpg", "category-7.jpg"] },
  { id: 12, name: "Watercolor Floral Blouse", category: "Pakaian", price: 329000, oldPrice: 0, badge: "", rating: "4.7", color: "White / motif watercolor", description: "Blus putih dengan motif watercolor floral di sisi depan. Potongannya ringan untuk tampilan lembut dan santai." },
  { id: 13, name: "Sage Daisy Crossbody Bag", category: "Aksesori", price: 479000, oldPrice: 0, badge: "New", rating: "4.8", color: "Sage / motif daisy", description: "Tas selempang compact berwarna sage dengan motif daisy dan tali yang dapat disesuaikan. Praktis untuk membawa barang penting.", image: "product-13-2.jpg", gallery: ["product-13-2.jpg", "category-2.jpg"] },
  { id: 14, name: "Blush Embroidered Shoulder Bag", category: "Aksesori", price: 549000, oldPrice: 0, badge: "New", rating: "4.8", color: "Blush / detail bordir", description: "Tas bahu warna blush dengan detail bordir dan aksen gantungan dekoratif. Ruang utama cukup untuk barang esensial sehari-hari.", image: "showcase-img-1.jpg" },
  { id: 15, name: "Botanical Cushion Cover", category: "Aksesori", price: 289000, oldPrice: 0, badge: "", rating: "4.7", color: "Multicolor / botanical", description: "Sarung bantal dekoratif bermotif daun tropis dan bunga dengan warna lembut. Aksen nyaman untuk ruang keluarga atau kamar.", image: "showcase-img-2.jpg", gallery: ["showcase-img-2.jpg", "category-6.jpg"] },
  { id: 16, name: "Mustard Mini Crossbody Pouch", category: "Aksesori", price: 329000, oldPrice: 0, badge: "", rating: "4.6", color: "Mustard / 1 warna", description: "Tas selempang mini warna mustard dengan tali panjang yang dapat dilepas. Praktis untuk membawa ponsel dan barang kecil.", image: "showcase-img-3.jpg" },
  { id: 17, name: "Blue Blossom Short-Sleeve Shirt", category: "Pakaian", price: 399000, oldPrice: 0, badge: "", rating: "4.8", color: "White & blue / motif bunga", description: "Kemeja lengan pendek putih dengan motif bunga biru dan kerah santai. Ringan untuk dipakai saat akhir pekan maupun bepergian.", image: "showcase-img-7.jpg" },
  { id: 18, name: "Olive Textured Chain Bag", category: "Aksesori", price: 499000, oldPrice: 0, badge: "", rating: "4.7", color: "Olive / detail rantai", description: "Tas bahu warna olive dengan tekstur timbul, detail rantai, dan penutup aksen kayu. Bentuk ringkas untuk kebutuhan harian.", image: "showcase-img-5.jpg" },
  { id: 19, name: "Autumn Floral Camp Shirt", category: "Pakaian", price: 429000, oldPrice: 0, badge: "New", rating: "4.8", color: "Cream / motif bunga autumn", description: "Kemeja lengan pendek berlatar cream dengan motif bunga bernuansa autumn dan potongan santai.", image: "showcase-img-6.jpg" },
  { id: 20, name: "Navy Geometric Print Blouse", category: "Pakaian", price: 379000, oldPrice: 0, badge: "", rating: "4.7", color: "Navy / motif geometris", description: "Blus lengan panjang warna navy dengan motif geometris warna-warni dan potongan longgar.", image: "product-7-2.jpg" },
];

const categories = [
  { name: "Pakaian", image: "category-1.jpg" },
  { name: "Sepatu", image: "category-3.jpg" },
  { name: "Aksesori", image: "category-2.jpg" },
];

const iconPaths = {
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M5 21a7 7 0 0 1 14 0"></path>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"></path><path d="M9 9V6a3 3 0 0 1 6 0v3"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
  close: '<path d="m6 6 12 12M18 6 6 18"></path>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"></path>',
  truck: '<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"></path><circle cx="7.5" cy="19" r="1.5"></circle><circle cx="17.5" cy="19" r="1.5"></circle>',
  return: '<path d="M3 11a9 9 0 1 0 2.6-6.4L3 7"></path><path d="M3 3v4h4"></path>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"></path><path d="m9 12 2 2 4-4"></path>',
  leaf: '<path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z"></path><path d="M4 21c2-5 6-9 12-12"></path>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><path d="M17.5 6.5h.01"></path>',
};

function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.arrow}</svg>`;
}

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Tidak dapat membaca data ${key} dari penyimpanan browser.`, error);
    return fallback;
  }
}

function saveStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Tidak dapat menyimpan data ${key} ke penyimpanan browser.`, error);
    showToast("Penyimpanan browser tidak tersedia. Perubahan mungkin tidak tersimpan.");
    return false;
  }
}

let cart = readStore("nova-cart", []);
let wishlist = readStore("nova-wishlist", []);
let comparison = readStore("nova-compare", []);
let toastTimer;
let scrollRevealObserver;

const money = (amount) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
const imagePath = (file) => `assets/img/${file}`;
const productImage = (product, alternate = false) => imagePath(alternate ? (product.alternateImage || `product-${product.id}-2.jpg`) : (product.image || `product-${product.id}-1.jpg`));
const productImages = (product) => product.gallery
  ? product.gallery.map(imagePath)
  : [productImage(product), ...(product.alternateImage || product.id <= 13 ? [productImage(product, true)] : [])];
const findProduct = (id) => products.find((product) => product.id === Number(id));

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function updateBadges() {
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const wishCount = wishlist.length;
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = cartCount;
    badge.hidden = cartCount === 0;
  });
  document.querySelectorAll("[data-wish-count]").forEach((badge) => {
    badge.textContent = wishCount;
    badge.hidden = wishCount === 0;
  });
}

function headerMarkup(page) {
  const selectedCategory = page === "shop" ? new URLSearchParams(window.location.search).get("category") : null;
  const navLinks = [
    ["index.html", "Beranda", "home"],
    ["shop.html", "Belanja", "all"],
    ["shop.html?category=Pakaian", "Pakaian", "Pakaian"],
    ["shop.html?category=Aksesori", "Aksesori", "Aksesori"],
  ];
  const activeShopCategory = ["Pakaian", "Aksesori"].includes(selectedCategory) ? selectedCategory : "all";
  return `<div class="header-inner">
    <a class="brand" href="index.html" aria-label="Kembali ke beranda"><img class="brand-logo" src="assets/img/logo.svg" alt="Svara" /></a>
    <nav class="nav" id="main-nav" aria-label="Navigasi utama">${navLinks.map(([href, label, key]) => {
      const isActive = page === "home" ? key === "home" : page === "shop" && key === activeShopCategory;
      return `<a href="${href}" data-nav-key="${key}" class="${isActive ? "is-active" : ""}">${label}</a>`;
    }).join("")}</nav>
    <div class="header-actions">
      <button class="icon-button" type="button" data-action="toggle-search" aria-label="Cari produk">${icon("search")}</button>
      <a class="icon-button account-action" href="login-register.html" aria-label="Akun">${icon("user")}</a>
      <a class="icon-button" href="wishlist.html" aria-label="Wishlist">${icon("heart")}<span class="count-badge" data-wish-count hidden></span></a>
      <a class="icon-button" href="cart.html" aria-label="Keranjang">${icon("bag")}<span class="count-badge" data-cart-count hidden></span></a>
      <button class="icon-button menu-toggle" type="button" data-action="toggle-menu" aria-label="Buka menu" aria-expanded="false">${icon("menu")}</button>
    </div>
  </div>
  <div class="search-panel container" id="search-panel" hidden><form class="newsletter-form search-form" action="shop.html"><input type="search" name="q" placeholder="Cari produk favoritmu..." aria-label="Cari produk" required /><button class="button" type="submit">Cari ${icon("search")}</button></form></div>`;
}

function footerMarkup() {
  return `<section class="newsletter reveal">
    <span class="eyebrow">Stay in the loop</span>
    <h2>Hal baik, langsung ke inbox.</h2>
    <p>Daftar untuk mendapatkan kabar produk baru dan penawaran spesial.</p>
    <form class="newsletter-form" data-form="newsletter"><input type="email" name="email" placeholder="Alamat email kamu" aria-label="Alamat email" required /><button class="button" type="submit">Daftar ${icon("arrow")}</button></form>
  </section>
  <div class="footer">
    <div class="container">
      <div class="footer-grid">
        <div><a class="brand" href="index.html" aria-label="Kembali ke beranda"><img class="brand-logo" src="assets/img/logo.svg" alt="Svara" /></a><p class="footer-about">Pilihan esensial yang dibuat dengan niat baik — untuk keseharian yang terasa lebih berarti.</p></div>
        <div><h4>Jelajahi</h4><div class="footer-links"><a href="shop.html">Semua produk</a><a href="shop.html?category=Pakaian">Pakaian</a><a href="shop.html?category=Sepatu">Sepatu</a><a href="shop.html?category=Aksesori">Aksesori</a></div></div>
        <div><h4>Bantuan</h4><div class="footer-links"><a href="accounts.html">Akun saya</a><a href="cart.html">Keranjang</a><a href="wishlist.html">Wishlist</a><a href="compare.html">Bandingkan</a><a href="checkout.html">Pembayaran</a></div></div>
        <div><h4>Hubungi kami</h4><div class="footer-links"><a href="mailto:evarastore@gmail.com">evarastore@gmail.com</a><a href="#">Senin – Jumat, 09.00–17.00</a><a href="#">Depok, Indonesia</a></div></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Evara Studio. Dibuat dengan penuh perhatian.</span><span>Privasi&nbsp;&nbsp; · &nbsp;&nbsp;Syarat &amp; Ketentuan</span></div>
    </div>
  </div>`;
}

function cardMarkup(product, index = 0) {
  const liked = wishlist.includes(product.id);
  return `<article class="product-card" style="animation-delay:${Math.min(index * 45, 250)}ms">
    <div class="product-image-wrap">
      <a href="details.html?id=${product.id}" aria-label="Lihat ${product.name}"><img src="${productImage(product)}" alt="${product.name}" loading="lazy" /></a>
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      <button class="product-wish ${liked ? "is-liked" : ""}" type="button" data-action="wishlist" data-id="${product.id}" aria-label="${liked ? "Hapus dari" : "Tambahkan ke"} wishlist">${icon("heart")}</button>
      <button class="quick-add" type="button" data-action="add-cart" data-id="${product.id}">Tambah ke keranjang</button>
    </div>
    <div class="product-info"><span class="product-category">${product.category}</span><h3><a href="details.html?id=${product.id}">${product.name}</a></h3><div class="product-price">${money(product.price)}${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : ""}</div></div>
  </article>`;
}

function sectionHeading(eyebrow, title, subtitle, href, link = "Lihat semua") {
  return `<div class="section-heading"><div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ""}</div>${href ? `<a class="text-link" href="${href}">${link} ${icon("arrow")}</a>` : ""}</div>`;
}

function homePage() {
  const featured = products;
  const arrivals = products.slice(18, 20);
  return `<section class="home-hero"><div class="hero-inner">
    <div class="hero-copy"><span class="eyebrow">Made for your everyday</span><h1>Less, but <em>better.</em></h1><p>Temukan esensial pilihan yang dibuat dengan penuh perhatian, untuk menemani setiap versi dirimu.</p><a class="button" href="shop.html">Jelajahi koleksi ${icon("arrow")}</a></div>
    <div class="hero-visual"><img src="${imagePath("home-img.png")}" alt="Pilihan outfit minimalis Evara" /><div class="hero-stamp">PILIHAN<br /><strong>01</strong><br />SEASON</div></div>
  </div></section>
  <div class="container benefits">
    <div class="benefit"><span class="benefit-icon">${icon("truck")}</span><span><strong>Gratis ongkir</strong><small>Untuk belanja min. Rp500rb</small></span></div>
    <div class="benefit"><span class="benefit-icon">${icon("return")}</span><span><strong>14 hari retur</strong><small>Belanja tanpa khawatir</small></span></div>
    <div class="benefit"><span class="benefit-icon">${icon("shield")}</span><span><strong>Bayar aman</strong><small>Transaksi terlindungi</small></span></div>
    <div class="benefit"><span class="benefit-icon">${icon("leaf")}</span><span><strong>Lebih mindful</strong><small>Dibuat untuk bertahan</small></span></div>
  </div>
  <section class="section container reveal">${sectionHeading("Find your kind", "Belanja berdasarkan kategori", "Temukan potongan yang cocok untuk ritme harianmu.", "shop.html")}
    <div class="category-grid">${categories.map((category) => `<a href="shop.html?category=${encodeURIComponent(category.name)}" class="category-card"><img src="${imagePath(category.image)}" alt="Koleksi ${category.name}" loading="lazy" /><div class="category-overlay"><div><h3>${category.name}</h3><span>${products.filter((product) => product.category === category.name).length} pilihan</span></div><span class="category-arrow">${icon("arrow")}</span></div></a>`).join("")}</div>
  </section>
  <section class="section section-tight container reveal" id="featured-products">${sectionHeading("The everyday edit", "Favorit minggu ini", "Potongan timeless yang terus jadi andalan.", "shop.html")}
    <div class="tabs" role="tablist" aria-label="Filter produk"><button class="tab-button is-active" type="button" data-home-category="Semua">Semua</button><button class="tab-button" type="button" data-home-category="Pakaian">Pakaian</button><button class="tab-button" type="button" data-home-category="Sepatu">Sepatu</button><button class="tab-button" type="button" data-home-category="Aksesori">Aksesori</button></div>
    <div class="product-grid home-product-grid">${featured.map(cardMarkup).join("")}</div>
  </section>
  <section class="container section-tight">  <div class="sale-strip reveal"><div class="sale-copy"><span class="eyebrow">A little something for you</span><h2>Simple pieces.<br />Better days.</h2><p>Temukan item pilihan dengan harga spesial, selama persediaan masih ada.</p><a class="button" href="shop.html?sort=discount">Shop the edit ${icon("arrow")}</a></div><div class="sale-image"><img src="${imagePath("deals-1.jpg")}" alt="Kemeja motif jamur pilihan Evara" loading="lazy" /><img class="sale-secondary-image" src="${imagePath("deals-2.png")}" alt="Koleksi tas dan aksesori Evara" loading="lazy" /></div></div></section>
  <section class="section container reveal">${sectionHeading("Just arrived", "Baru di Evara", "Kenalan dengan favoritmu berikutnya.", "shop.html", "Lihat koleksi")}
    <div class="arrival-grid"><a class="arrival-feature" href="details.html?id=19"><img src="${imagePath("showcase-img-6.jpg")}" alt="Kemeja bermotif bunga autumn Evara" loading="lazy" /><div class="arrival-label"><div><h3>Autumn Floral Camp Shirt</h3><span>Kemeja bunga lengan pendek</span></div>${icon("arrow")}</div></a><div class="arrival-side">${arrivals.map(cardMarkup).join("")}</div></div>
  </section>
  <section class="container section-tight"><div class="review-band reveal"><div class="review-quote"><span class="stars">★★★★★</span><blockquote>“Akhirnya menemukan barang sehari-hari yang terasa istimewa — kualitasnya bagus dan mudah dipadu-padankan.”</blockquote><div class="review-author"><small>Rani P.</small></div></div><div class="review-metric"><strong>4.9<span class="stars">★</span></strong><span>Rata-rata dari 2.400+ ulasan</span></div></div></section>`;
}

function pageHero(title, description, crumbs = []) {
  const links = [`<a href="index.html">Beranda</a>`, ...crumbs.map((crumb) => `<span>/</span><span>${crumb}</span>`)].join("");
  return `<section class="page-hero"><div class="container"><div class="breadcrumb">${links}</div><h1 class="page-title">${title}</h1>${description ? `<p class="page-description">${description}</p>` : ""}</div></section>`;
}

function shopPage() {
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category") || "Semua";
  const searchText = params.get("q") || "";
  const categoryOptions = ["Semua", "Pakaian", "Sepatu", "Aksesori"];
  const queryString = searchText ? ` untuk “${searchText.replace(/[<>]/g, "")}”` : "";
  return `${pageHero("Semua pilihan", `Temukan esensial pilihan untuk dirimu${queryString}.`)}
  <section class="section container"><div class="shop-layout">
    <aside class="shop-sidebar">
      <div class="filter-group"><h3>Kategori</h3><div class="category-filter">${categoryOptions.map((category) => `<button type="button" data-shop-category="${category}" class="${selectedCategory === category ? "is-active" : ""}">${category}<small>${category === "Semua" ? products.length : products.filter((product) => product.category === category).length}</small></button>`).join("")}</div></div>
      <div class="filter-group"><h3>Rentang harga</h3><input class="price-range" id="price-range" type="range" min="100000" max="900000" step="50000" value="900000" aria-label="Harga maksimum" /><div class="filter-value">Hingga <span id="price-label">${money(900000)}</span></div></div>
    </aside>
    <div class="shop-main"><div class="shop-toolbar"><p><span id="result-count">${products.length}</span> produk tersedia</p><select id="sort-products" aria-label="Urutkan produk"><option value="featured">Urutkan: Pilihan</option><option value="price-low">Harga: rendah ke tinggi</option><option value="price-high">Harga: tinggi ke rendah</option><option value="discount">Diskon terbesar</option></select></div><div class="product-grid shop-product-grid"></div></div>
  </div></section>`;
}

function cartPage() {
  return `${pageHero("Keranjang belanja", "Barang pilihanmu, siap jadi bagian dari keseharian.", ["Keranjang"])}<section class="section container"><div id="cart-content"></div></section>`;
}

function renderCart() {
  const target = document.querySelector("#cart-content");
  if (!target) return;
  if (!cart.length) {
    target.innerHTML = `<div class="empty-state">${icon("bag")}<h3>Keranjangmu masih kosong</h3><p>Sepertinya belum ada yang dipilih. Yuk, temukan sesuatu yang kamu suka.</p><a href="shop.html" class="button">Mulai belanja ${icon("arrow")}</a></div>`;
    return;
  }
  const subtotal = cart.reduce((total, item) => total + (findProduct(item.id)?.price || 0) * item.qty, 0);
  const shipping = subtotal >= 500000 ? 0 : 25000;
  target.innerHTML = `<div class="cart-layout"><div><div class="cart-head"><span>Produk</span><span>Harga</span><span>Jumlah</span><span></span></div>${cart.map((item) => {
    const product = findProduct(item.id);
    if (!product) return "";
    return `<div class="cart-row"><div class="cart-product"><a href="details.html?id=${product.id}"><img src="${productImage(product)}" alt="${product.name}" /></a><div><h3><a href="details.html?id=${product.id}">${product.name}</a></h3><small>${item.size ? `Ukuran: ${item.size}` : product.color}</small></div></div><span class="cart-price">${money(product.price)}</span><div class="cart-qty"><button type="button" data-action="cart-qty" data-id="${product.id}" data-change="-1" aria-label="Kurangi jumlah">−</button><span>${item.qty}</span><button type="button" data-action="cart-qty" data-id="${product.id}" data-change="1" aria-label="Tambah jumlah">+</button></div><button class="cart-remove" type="button" data-action="remove-cart" data-id="${product.id}">Hapus</button></div>`;
  }).join("")}</div><aside class="cart-summary"><h2>Ringkasan pesanan</h2><div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>Pengiriman</span><strong>${shipping ? money(shipping) : "Gratis"}</strong></div>${subtotal < 500000 ? `<div class="summary-line"><span>Belanja ${money(500000 - subtotal)} lagi untuk gratis ongkir</span></div>` : ""}<div class="summary-line summary-total"><span>Total</span><strong>${money(subtotal + shipping)}</strong></div><a class="button" href="checkout.html">Lanjut ke pembayaran ${icon("arrow")}</a><p class="secure-note">Pembayaran aman &amp; data terlindungi</p></aside></div>`;
}

function wishlistPage() {
  return `${pageHero("Wishlist", "Simpan item yang kamu suka, dan kembali kapan saja.", ["Wishlist"])}<section class="section container"><div class="product-grid" id="wishlist-grid"></div></section>`;
}

function renderWishlist() {
  const grid = document.querySelector("#wishlist-grid");
  if (!grid) return;
  const items = wishlist.map(findProduct).filter(Boolean);
  grid.innerHTML = items.length ? items.map(cardMarkup).join("") : `<div class="empty-state">${icon("heart")}<h3>Belum ada wishlist</h3><p>Simpan item favoritmu dengan menekan ikon hati.</p><a class="button" href="shop.html">Jelajahi produk ${icon("arrow")}</a></div>`;
}

function detailsPage() {
  const product = findProduct(new URLSearchParams(window.location.search).get("id")) || products[0];
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const images = productImages(product);
  return `${pageHero("Detail produk", product.name, ["Produk", product.name])}
  <section class="section container"><div class="details-layout">
    <div class="detail-gallery"><div class="detail-thumbs">${images.map((image, index) => `<button class="detail-thumb ${index === 0 ? "is-active" : ""}" type="button" data-image="${image}"><img src="${image}" alt="${product.name}, ${index === 0 ? "tampak depan" : `tampak ${index + 1}`}" /></button>`).join("")}</div><div class="detail-main-image"><img id="detail-image" src="${images[0]}" alt="${product.name}" /></div></div>
    <div class="detail-copy"><span class="eyebrow">${product.category} · Evara essentials</span><h1>${product.name}</h1><div class="detail-rating"><span class="stars">★★★★★</span><span>${product.rating} / 5 · 32 ulasan</span></div><div class="product-price">${money(product.price)}${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : ""}</div><p class="detail-description">${product.description}</p><div class="detail-meta"><span><strong>Warna</strong>${product.color}</span><span><strong>Ketersediaan</strong>Siap dikirim</span><span><strong>SKU</strong>EVR-${String(product.id).padStart(3, "0")}</span></div>
      <div class="option-label">Pilih ukuran</div><div class="size-options">${["S", "M", "L", "XL"].map((size, index) => `<button type="button" class="size-option ${index === 1 ? "is-active" : ""}" data-size="${size}">${size}</button>`).join("")}</div>
      <div class="detail-actions"><div class="quantity-control"><button type="button" data-action="detail-qty" data-change="-1" aria-label="Kurangi jumlah">−</button><span id="detail-qty">1</span><button type="button" data-action="detail-qty" data-change="1" aria-label="Tambah jumlah">+</button></div><button type="button" class="button" data-action="detail-add" data-id="${product.id}">Tambah ke keranjang ${icon("bag")}</button><button type="button" class="icon-button" data-action="wishlist" data-id="${product.id}" aria-label="Tambahkan ke wishlist">${icon("heart")}</button></div>
      <div class="detail-actions"><button type="button" class="button button-outline" data-action="compare" data-id="${product.id}">Bandingkan produk</button></div><div class="detail-assurance"><span>${icon("truck")} Estimasi 2–4 hari</span><span>${icon("return")} Retur 14 hari</span><span>${icon("shield")} Pembayaran aman</span></div>
    </div>
  </div></section>
  ${related.length ? `<section class="section section-tight container">${sectionHeading("You may also like", "Lengkapi pilihanmu", "", "shop.html?category=${encodeURIComponent(product.category)}")}<div class="product-grid">${related.map(cardMarkup).join("")}</div></section>` : ""}`;
}

function checkoutPage() {
  return `${pageHero("Pembayaran", "Satu langkah lagi menuju pilihan barumu.", ["Keranjang", "Pembayaran"])}<section class="section container"><div id="checkout-content"></div></section>`;
}

function renderCheckout() {
  const target = document.querySelector("#checkout-content");
  if (!target) return;
  if (!cart.length) {
    target.innerHTML = `<div class="empty-state">${icon("bag")}<h3>Keranjangmu masih kosong</h3><p>Tambahkan produk sebelum melanjutkan pembayaran.</p><a class="button" href="shop.html">Lihat produk ${icon("arrow")}</a></div>`;
    return;
  }
  const subtotal = cart.reduce((total, item) => total + (findProduct(item.id)?.price || 0) * item.qty, 0);
  const shipping = subtotal >= 500000 ? 0 : 25000;
  target.innerHTML = `<form class="checkout-layout" data-form="checkout"><div>
    <div class="checkout-section"><h2>Informasi kontak</h2><div class="form-grid"><div class="form-field"><label for="checkout-name">Nama lengkap</label><input id="checkout-name" name="name" autocomplete="name" required /></div><div class="form-field"><label for="checkout-email">Email</label><input id="checkout-email" name="email" type="email" autocomplete="email" required /></div><div class="form-field full"><label for="checkout-phone">Nomor telepon</label><input id="checkout-phone" name="phone" type="tel" autocomplete="tel" required /></div></div></div>
    <div class="checkout-section"><h2>Alamat pengiriman</h2><div class="form-grid"><div class="form-field full"><label for="checkout-address">Alamat lengkap</label><textarea id="checkout-address" name="address" autocomplete="street-address" required></textarea></div><div class="form-field"><label for="checkout-city">Kota</label><input id="checkout-city" name="city" autocomplete="address-level2" required /></div><div class="form-field"><label for="checkout-postal">Kode pos</label><input id="checkout-postal" name="postal" inputmode="numeric" autocomplete="postal-code" required /></div></div></div>
    <div class="checkout-section"><h2>Metode pembayaran</h2><label class="payment-option"><input type="radio" name="payment" value="transfer" checked /> Transfer bank virtual account</label><label class="payment-option"><input type="radio" name="payment" value="ewallet" /> E-wallet (QRIS)</label><label class="payment-option"><input type="radio" name="payment" value="cod" /> Bayar di tempat (COD)</label><img class="payment-methods" src="${imagePath("payment-method.png")}" alt="Visa, Mastercard, Maestro, dan American Express" loading="lazy" /></div>
    </div><aside class="cart-summary"><h2>Pesananmu</h2><div class="checkout-items">${cart.map((item) => {
    const product = findProduct(item.id);
    return product ? `<div class="checkout-item"><img src="${productImage(product)}" alt="${product.name}" /><div><strong>${product.name}</strong><small>Jumlah: ${item.qty}${item.size ? ` · ${item.size}` : ""}</small></div><span>${money(product.price * item.qty)}</span></div>` : "";
  }).join("")}</div><div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>Pengiriman</span><strong>${shipping ? money(shipping) : "Gratis"}</strong></div><div class="summary-line summary-total"><span>Total</span><strong>${money(subtotal + shipping)}</strong></div><button class="button" type="submit">Buat pesanan ${icon("arrow")}</button><p class="secure-note">Demo toko — tidak ada pembayaran nyata.</p></aside></form>`;
}

function comparePage() {
  const items = comparison.map(findProduct).filter(Boolean).slice(0, 3);
  const columns = items.length ? items.map((product) => `<td><div class="compare-product"><img src="${productImage(product)}" alt="${product.name}" /><strong>${product.name}</strong><small>${product.category}</small><p>${money(product.price)}</p><button class="button" data-action="add-cart" data-id="${product.id}" type="button">Tambah ke keranjang</button><p><button class="cart-remove" data-action="remove-compare" data-id="${product.id}" type="button">Hapus</button></p></div></td>`).join("") : `<td class="empty-state" colspan="3"><h3>Belum ada produk pembanding</h3><p>Buka detail produk dan pilih “Bandingkan produk”.</p><a class="text-link" href="shop.html">Jelajahi produk ${icon("arrow")}</a></td>`;
  return `${pageHero("Bandingkan produk", "Lihat produk pilihanmu berdampingan.", ["Bandingkan"])}<section class="section container"><div class="table-wrap"><table class="compare-table"><tbody><tr><th>Produk</th>${columns}</tr>${items.length ? `<tr><th>Deskripsi</th>${items.map((product) => `<td>${product.description}</td>`).join("")}</tr><tr><th>Warna</th>${items.map((product) => `<td>${product.color}</td>`).join("")}</tr><tr><th>Rating</th>${items.map((product) => `<td><span class="stars">★★★★★</span> ${product.rating}/5</td>`).join("")}</tr>` : ""}</tbody></table></div><p class="page-description">Produk yang dibandingkan: ${items.length}/3</p></section>`;
}

function authPage() {
  return `${pageHero("Selamat datang", "Masuk atau buat akun untuk pengalaman belanja yang lebih personal.", ["Akun"])}<section class="section container"><div class="auth-card">
    <div class="auth-tabs" role="tablist"><button type="button" class="auth-tab is-active" data-auth-tab="login">Masuk</button><button type="button" class="auth-tab" data-auth-tab="register">Buat akun</button></div>
    <form class="auth-form" data-form="login"><div class="form-field"><label for="login-email">Alamat email</label><input id="login-email" type="email" name="email" autocomplete="email" required /></div><div class="form-field"><label for="login-password">Kata sandi</label><input id="login-password" type="password" name="password" autocomplete="current-password" required minlength="6" /></div><button class="button" type="submit">Masuk ke akun ${icon("arrow")}</button><p class="auth-note">Demo UI — akun belum terhubung ke layanan autentikasi.</p></form>
    <form class="auth-form" data-form="register" hidden><div class="form-field"><label for="register-name">Nama lengkap</label><input id="register-name" name="name" autocomplete="name" required /></div><div class="form-field"><label for="register-email">Alamat email</label><input id="register-email" type="email" name="email" autocomplete="email" required /></div><div class="form-field"><label for="register-password">Kata sandi</label><input id="register-password" type="password" name="password" autocomplete="new-password" required minlength="6" /></div><button class="button" type="submit">Buat akun ${icon("arrow")}</button><p class="auth-note">Demo UI — pendaftaran belum menyimpan data akun.</p></form>
  </div></section>`;
}

function accountsPage() {
  return `${pageHero("Akun saya", "Selamat datang kembali. Kelola detail dan pesananmu di sini.", ["Akun"])}<section class="section container"><div class="account-layout"><nav class="account-nav" aria-label="Menu akun"><a class="is-active" href="#overview">Ringkasan akun</a><a href="cart.html">Pesanan saya</a><a href="wishlist.html">Wishlist</a><a href="login-register.html">Keluar / Masuk</a></nav><div class="account-panel" id="overview"><span class="eyebrow">Your Evara space</span><h2>Senang melihatmu di sini.</h2><p>Halaman akun ini adalah pratinjau storefront. Masuk dan data pesanan belum terhubung ke backend.</p><div class="account-stats"><div class="account-stat"><strong>${cart.length}</strong><span>Item di keranjang</span></div><div class="account-stat"><strong>${wishlist.length}</strong><span>Item tersimpan</span></div><div class="account-stat"><strong>${comparison.length}</strong><span>Produk dibandingkan</span></div></div><a class="button" href="shop.html">Lanjut belanja ${icon("arrow")}</a></div></div></section>`;
}

function renderShopResults() {
  const grid = document.querySelector(".shop-product-grid");
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  const search = (params.get("q") || "").trim().toLocaleLowerCase("id");
  const selected = document.querySelector("[data-shop-category].is-active")?.dataset.shopCategory || params.get("category") || "Semua";
  const maxPrice = Number(document.querySelector("#price-range")?.value || 900000);
  const sort = document.querySelector("#sort-products")?.value || params.get("sort") || "featured";
  const matches = products.filter((product) => {
    const categoryMatches = selected === "Semua" || product.category === selected;
    const searchMatches = !search || `${product.name} ${product.category} ${product.description}`.toLocaleLowerCase("id").includes(search);
    return categoryMatches && searchMatches && product.price <= maxPrice;
  });
  if (sort === "price-low") matches.sort((a, b) => a.price - b.price);
  if (sort === "price-high") matches.sort((a, b) => b.price - a.price);
  if (sort === "discount") matches.sort((a, b) => (b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0) - (a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0));
  const count = document.querySelector("#result-count");
  if (count) count.textContent = matches.length;
  grid.innerHTML = matches.length ? matches.map(cardMarkup).join("") : `<div class="no-results">Produk tidak ditemukan. Coba ubah kata kunci atau filter.</div>`;
  attachRevealObserver();
}

function renderHomeCategory(category) {
  const grid = document.querySelector(".home-product-grid");
  if (!grid) return;
  const filtered = category === "Semua" ? products.slice(0, 4) : products.filter((product) => product.category === category).slice(0, 4);
  grid.innerHTML = filtered.map(cardMarkup).join("");
  document.querySelectorAll("[data-home-category]").forEach((button) => button.classList.toggle("is-active", button.dataset.homeCategory === category));
  attachRevealObserver();
}

function refreshPage() {
  renderCart();
  renderWishlist();
  renderCheckout();
  renderShopResults();
  updateBadges();
}

function addToCart(id, quantity = 1, size = "") {
  const product = findProduct(id);
  if (!product) return showToast("Produk tidak ditemukan.");
  const current = cart.find((item) => item.id === product.id && item.size === size);
  if (current) current.qty += quantity;
  else cart.push({ id: product.id, qty: quantity, size });
  saveStore("nova-cart", cart);
  refreshPage();
  showToast(`${product.name} ditambahkan ke keranjang.`);
}

function toggleWishlist(id) {
  const product = findProduct(id);
  if (!product) return;
  const exists = wishlist.includes(product.id);
  wishlist = exists ? wishlist.filter((item) => item !== product.id) : [...wishlist, product.id];
  saveStore("nova-wishlist", wishlist);
  refreshPage();
  showToast(exists ? "Produk dihapus dari wishlist." : "Produk disimpan ke wishlist.");
}

function updateCartQuantity(id, change) {
  const item = cart.find((entry) => entry.id === Number(id));
  if (!item) return;
  item.qty += Number(change);
  cart = cart.filter((entry) => entry.qty > 0);
  saveStore("nova-cart", cart);
  refreshPage();
}

function attachRevealObserver() {
  const elements = document.querySelectorAll(".reveal, .category-grid > *, .product-grid > *, .benefits > *, .arrival-side > *");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
      if (!element.matches(".reveal")) element.classList.add("scroll-pop");
    });
    return;
  }
  if (!scrollRevealObserver) {
    scrollRevealObserver = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  }
  elements.forEach((element) => {
    if (element.dataset.scrollObserved) return;
    element.dataset.scrollObserved = "true";
    if (!element.matches(".reveal")) {
      element.classList.add("scroll-pop");
      const peers = Array.from(element.parentElement.children).filter((sibling) => sibling.matches(".category-card, .product-card, .benefit"));
      element.style.setProperty("--delay", `${Math.max(0, Math.min(peers.indexOf(element), 4)) * 75}ms`);
    } else {
      element.style.removeProperty("--delay");
    }
    scrollRevealObserver.observe(element);
  });
}

function showAuthTab(tab) {
  document.querySelectorAll("[data-auth-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.authTab === tab));
  document.querySelectorAll('[data-form="login"], [data-form="register"]').forEach((form) => { form.hidden = form.dataset.form !== tab; });
}

function initialize() {
  const page = document.body.dataset.page || "home";
  const header = document.querySelector("#site-header");
  const main = document.querySelector("#page-content");
  const footer = document.querySelector("#site-footer");
  if (!header || !main || !footer) {
    console.error("Struktur halaman Evara tidak lengkap: elemen header, main, atau footer tidak ditemukan.");
    return;
  }
  header.innerHTML = headerMarkup(page);
  footer.innerHTML = footerMarkup();
  const pages = {
    home: homePage,
    shop: shopPage,
    details: detailsPage,
    cart: cartPage,
    wishlist: wishlistPage,
    compare: comparePage,
    checkout: checkoutPage,
    "login-register": authPage,
    accounts: accountsPage,
  };
  const render = pages[page] || homePage;
  main.innerHTML = render();
  const titles = { home: "Evara — Essentials for everyday", shop: "Shop — Evara", details: "Product details — Evara", cart: "Your bag — Evara", wishlist: "Wishlist — Evara", compare: "Compare — Evara", checkout: "Checkout — Evara", "login-register": "Sign in — Evara", accounts: "My account — Evara" };
  document.title = titles[page] || titles.home;

  const sort = document.querySelector("#sort-products");
  const requestedSort = new URLSearchParams(window.location.search).get("sort");
  if (sort && ["price-low", "price-high", "discount"].includes(requestedSort)) sort.value = requestedSort;
  const priceRange = document.querySelector("#price-range");
  const priceLabel = document.querySelector("#price-label");
  if (priceRange) priceRange.addEventListener("input", () => {
    if (priceLabel) priceLabel.textContent = money(Number(priceRange.value));
    renderShopResults();
  });
  if (sort) sort.addEventListener("change", renderShopResults);
  renderShopResults();
  renderCart();
  renderWishlist();
  renderCheckout();
  updateBadges();
  attachRevealObserver();
}

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-action], [data-shop-category], [data-home-category], [data-size], [data-image], [data-auth-tab]") : null;
  if (!target) return;
  if (target.matches("[data-action='toggle-menu']")) {
    const nav = document.querySelector("#main-nav");
    const isOpen = nav?.classList.toggle("is-open") || false;
    target.setAttribute("aria-expanded", String(isOpen));
    return;
  }
  if (target.matches("[data-action='toggle-search']")) {
    const panel = document.querySelector("#search-panel");
    if (panel) {
      panel.hidden = !panel.hidden;
      if (!panel.hidden) panel.querySelector("input")?.focus();
    }
    return;
  }
  if (target.matches("[data-action='wishlist']")) return toggleWishlist(target.dataset.id);
  if (target.matches("[data-action='add-cart']")) return addToCart(target.dataset.id);
  if (target.matches("[data-action='remove-cart']")) {
    cart = cart.filter((item) => item.id !== Number(target.dataset.id));
    saveStore("nova-cart", cart);
    refreshPage();
    showToast("Produk dihapus dari keranjang.");
    return;
  }
  if (target.matches("[data-action='cart-qty']")) return updateCartQuantity(target.dataset.id, target.dataset.change);
  if (target.matches("[data-action='detail-qty']")) {
    const quantity = document.querySelector("#detail-qty");
    if (quantity) quantity.textContent = Math.max(1, Number(quantity.textContent) + Number(target.dataset.change));
    return;
  }
  if (target.matches("[data-action='detail-add']")) {
    const quantity = Number(document.querySelector("#detail-qty")?.textContent || 1);
    const size = document.querySelector(".size-option.is-active")?.dataset.size || "";
    return addToCart(target.dataset.id, quantity, size);
  }
  if (target.matches("[data-action='compare']")) {
    const id = Number(target.dataset.id);
    if (comparison.includes(id)) return showToast("Produk ini sudah ada di daftar pembanding.");
    if (comparison.length >= 3) return showToast("Maksimal 3 produk bisa dibandingkan.");
    comparison.push(id);
    saveStore("nova-compare", comparison);
    showToast("Produk ditambahkan. Buka halaman Bandingkan dari footer.");
    return;
  }
  if (target.matches("[data-action='remove-compare']")) {
    comparison = comparison.filter((id) => id !== Number(target.dataset.id));
    saveStore("nova-compare", comparison);
    window.location.reload();
    return;
  }
  if (target.matches("[data-shop-category]")) {
    document.querySelectorAll("[data-shop-category]").forEach((button) => button.classList.toggle("is-active", button === target));
    const selectedCategory = ["Pakaian", "Aksesori"].includes(target.dataset.shopCategory) ? target.dataset.shopCategory : "all";
    document.querySelectorAll("#main-nav [data-nav-key]").forEach((link) => link.classList.toggle("is-active", link.dataset.navKey === selectedCategory));
    return renderShopResults();
  }
  if (target.matches("[data-home-category]")) return renderHomeCategory(target.dataset.homeCategory);
  if (target.matches("[data-size]")) {
    document.querySelectorAll("[data-size]").forEach((button) => button.classList.toggle("is-active", button === target));
    return;
  }
  if (target.matches("[data-image]")) {
    const image = document.querySelector("#detail-image");
    if (image) image.src = target.dataset.image;
    document.querySelectorAll("[data-image]").forEach((button) => button.classList.toggle("is-active", button === target));
    return;
  }
  if (target.matches("[data-auth-tab]")) return showAuthTab(target.dataset.authTab);
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (form.matches('[data-form="newsletter"]')) {
    event.preventDefault();
    showToast("Terima kasih sudah bergabung dengan Evara.");
    form.reset();
  }
  if (form.matches('[data-form="checkout"]')) {
    event.preventDefault();
    cart = [];
    saveStore("nova-cart", cart);
    refreshPage();
    showToast("Pesanan demo berhasil dibuat. Terima kasih!");
    window.setTimeout(() => { window.location.href = "index.html"; }, 1400);
  }
  if (form.matches('[data-form="login"], [data-form="register"]')) {
    event.preventDefault();
    showToast("Fitur akun belum terhubung ke server.");
  }
});

document.addEventListener("DOMContentLoaded", initialize);
