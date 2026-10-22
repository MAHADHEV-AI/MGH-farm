/**
 * THE DAILY BUTCHER - MODERN MEAT SHOP LOGIC
 * High-performance vanilla JS store controller
 */

// 1. PRODUCT CATALOG DATA
const PRODUCTS = [
  {
    id: 'naatu-curry',
    name: 'Fresh Country Chicken (Naatu Kozhi)',
    category: 'country',
    badge: 'Authentic Naatu Kozhi',
    badgeClass: 'naatu',
    desc: 'Free-range village rooster raised naturally. Distinct firm texture and deep rich flavor for legendary Chettinad gravies and bone broths.',
    protein: '27g Protein/100g',
    rating: '★ 4.9 (340+)',
    image: 'images/country_chicken_cut.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g', price: 290, originalPrice: 330, cut: 'Bone-in Curry Cut' },
      { weight: '1kg', price: 560, originalPrice: 640, cut: 'Bone-in Curry Cut' }
    ],
    cutOptions: ['Flame-Singed Skin', 'Skinless Cut']
  },
  {
    id: 'naatu-whole',
    name: 'Country Chicken (Naatu Kozhi) Whole Dressed',
    category: 'country',
    badge: 'Whole Farm Bird',
    badgeClass: 'naatu',
    desc: 'Fully dressed and traditionally singed whole bird. Perfect for slow roasting, whole pot curries, or custom home butchery.',
    protein: '26g Protein/100g',
    rating: '★ 4.8 (190+)',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '1.2 - 1.4kg', price: 680, originalPrice: 750, cut: 'Whole Dressed' }
    ],
    cutOptions: ['Traditional Singed Skin', 'Skinless Whole']
  },
  {
    id: 'chicken-curry-skinless',
    name: 'Farm Chicken Curry Cut (Skinless)',
    category: 'curry',
    badge: 'Bestseller',
    badgeClass: 'bestseller',
    desc: 'Tender, antibiotic-free bone-in chicken mix of breast, thigh, and wing pieces. Sized to soak in rich masala curries evenly.',
    protein: '25g Protein/100g',
    rating: '★ 4.9 (820+)',
    image: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g', price: 165, originalPrice: 195, cut: 'Skinless Curry Cut' },
      { weight: '1kg', price: 310, originalPrice: 370, cut: 'Skinless Curry Cut' }
    ],
    cutOptions: ['Medium Curry Pieces', 'Small Gravy Cut']
  },
  {
    id: 'chicken-curry-skin-on',
    name: 'Farm Chicken Curry Cut (With Skin)',
    category: 'curry',
    badge: 'Juicy Gravy Cut',
    badgeClass: '',
    desc: 'Classic cut retaining the clean skin layer for maximum natural juices and deeply aromatic, flavorful curries and roasts.',
    protein: '24g Protein/100g',
    rating: '★ 4.8 (410+)',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g', price: 155, originalPrice: 185, cut: 'Skin-on Curry Cut' },
      { weight: '1kg', price: 295, originalPrice: 350, cut: 'Skin-on Curry Cut' }
    ],
    cutOptions: ['Skin-on Medium', 'Biryani Cut']
  },
  {
    id: 'chicken-breast-boneless',
    name: 'Premium Tender Chicken Breast (Boneless)',
    category: 'boneless',
    badge: '100% Lean',
    badgeClass: 'bestseller',
    desc: 'Single-source tender chicken breasts, trimmed of all excess fat. Extra tender, succulent, and high in lean muscle-building protein.',
    protein: '31g Protein/100g',
    rating: '★ 4.9 (650+)',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g', price: 199, originalPrice: 240, cut: 'Whole Fillets' },
      { weight: '1kg', price: 380, originalPrice: 460, cut: 'Whole Fillets' }
    ],
    cutOptions: ['Whole Fillets', 'Bite-Sized Cubes', 'Strips']
  },
  {
    id: 'chicken-biryani-cut',
    name: 'Special Chicken Biryani Cut',
    category: 'curry',
    badge: "Chef's Cut",
    badgeClass: 'bestseller',
    desc: 'Generous large bone-in cuts specially crafted for Dum Biryani. Retains juiciness and will not crumble during long dum cooking.',
    protein: '25g Protein/100g',
    rating: '★ 4.9 (530+)',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g', price: 175, originalPrice: 210, cut: 'Large Biryani Cuts' },
      { weight: '1kg', price: 330, originalPrice: 390, cut: 'Large Biryani Cuts' }
    ],
    cutOptions: ['Skinless Biryani Cut', 'Skin-On Biryani Cut']
  },
  {
    id: 'chicken-drumsticks',
    name: 'Juicy Chicken Drumsticks & Thighs',
    category: 'legs',
    badge: 'Juicy & Tender',
    badgeClass: '',
    desc: 'Prime leg portions trimmed and cleaned. Ideal for tandoori marinades, barbecue roasting, fried chicken, or rich gravies.',
    protein: '24g Protein/100g',
    rating: '★ 4.8 (390+)',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '500g (4-5 pcs)', price: 189, originalPrice: 225, cut: 'Drumsticks' },
      { weight: '1kg (8-10 pcs)', price: 360, originalPrice: 430, cut: 'Drumsticks' }
    ],
    cutOptions: ['Skinless Slit Legs', 'Skin-On Legs']
  },
  {
    id: 'chicken-keema',
    name: 'Fresh Chicken Mince / Keema',
    category: 'boneless',
    badge: 'Finely Minced',
    badgeClass: '',
    desc: 'Double-minced 100% boneless chicken breast and tender thigh meat. Makes mouthwatering keema fry, cutlets, kebabs, and momos.',
    protein: '28g Protein/100g',
    rating: '★ 4.8 (280+)',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '450g', price: 195, originalPrice: 235, cut: 'Fine Keema' },
      { weight: '900g', price: 370, originalPrice: 450, cut: 'Fine Keema' }
    ],
    cutOptions: ['Fine Ground', 'Coarse Keema']
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop & Winglets',
    category: 'legs',
    badge: 'Party Cut',
    badgeClass: '',
    desc: 'Frenched chicken wing cuts shaped into neat lollipops with exposed bone handle. Ready for spicy batter coating and crispy deep fry.',
    protein: '22g Protein/100g',
    rating: '★ 4.9 (460+)',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: '10 Pieces (~400g)', price: 179, originalPrice: 215, cut: 'Frenched Lollipops' },
      { weight: '20 Pieces (~800g)', price: 340, originalPrice: 410, cut: 'Frenched Lollipops' }
    ],
    cutOptions: ['Frenched Lollipops', 'Classic Winglets']
  },
  {
    id: 'naatu-eggs',
    name: 'Farm Country Eggs (Naatu Muttai)',
    category: 'eggs',
    badge: '100% Free Range',
    badgeClass: 'naatu',
    desc: 'Naturally pasture-raised country chicken eggs with deep golden yolk and high nutrient density. Zero hormones, freshly collected daily.',
    protein: '7g Protein/Egg',
    rating: '★ 4.9 (610+)',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: 'Pack of 6', price: 75, originalPrice: 90, cut: 'Brown Shell Eggs' },
      { weight: 'Pack of 12', price: 145, originalPrice: 175, cut: 'Brown Shell Eggs' },
      { weight: 'Tray of 30', price: 350, originalPrice: 420, cut: 'Brown Shell Eggs' }
    ],
    cutOptions: ['Naturally Sanitized']
  },
  {
    id: 'farm-white-eggs',
    name: 'Classic Farm Fresh Table Eggs',
    category: 'eggs',
    badge: 'Daily Essential',
    badgeClass: '',
    desc: 'Freshly candled and carefully packed premium farm eggs. Guaranteed spotless shells and rich yellow yolks for wholesome breakfast meals.',
    protein: '6.5g Protein/Egg',
    rating: '★ 4.8 (370+)',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=700&q=80',
    variants: [
      { weight: 'Pack of 6', price: 48, originalPrice: 60, cut: 'Table Eggs' },
      { weight: 'Pack of 12', price: 92, originalPrice: 115, cut: 'Table Eggs' },
      { weight: 'Tray of 30', price: 220, originalPrice: 270, cut: 'Table Eggs' }
    ],
    cutOptions: ['Cushioned Tray Pack']
  }
];

// 2. STATE STORE
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let selectedWeightIndex = {}; // productId -> variant index
let selectedCutOption = {};   // productId -> cutOption string
let appliedCoupon = null;
let deliverySlot = 'Morning (7:30 AM - 9:30 AM)';

const STORE_WHATSAPP = '918489542722'; // Store contact number
const FREE_DELIVERY_THRESHOLD = 499;
const EXPRESS_DELIVERY_FEE = 40;
const PACKAGING_FEE = 20;

// Initialize selections
PRODUCTS.forEach(p => {
  selectedWeightIndex[p.id] = 0;
  selectedCutOption[p.id] = p.cutOptions ? p.cutOptions[0] : '';
});

// Load cart from LocalStorage
try {
  const savedCart = localStorage.getItem('butcher_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.error('LocalStorage error', e);
}

// 3. DOM ELEMENTS
const productGridEl = document.getElementById('product-grid');
const categoryTabs = document.querySelectorAll('.tab-btn');
const headerSearchInput = document.getElementById('header-search-input');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsBody = document.getElementById('cart-items-body');
const cartCountBadges = document.querySelectorAll('.cart-count-badge');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartGrandTotalEl = document.getElementById('cart-grand-total');
const cartDeliveryFeeEl = document.getElementById('cart-delivery-fee');
const cartDiscountRow = document.getElementById('cart-discount-row');
const cartDiscountAmountEl = document.getElementById('cart-discount-amount');
const tierProgressFill = document.getElementById('tier-progress-fill');
const tierProgressText = document.getElementById('tier-progress-text');
const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
const successModalOverlay = document.getElementById('success-modal-overlay');

// 4. RENDER PRODUCTS
function renderProducts() {
  if (!productGridEl) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = (activeCategory === 'all' || p.category === activeCategory);
    const matchesSearch = !searchQuery || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productGridEl.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-secondary);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🍗</div>
        <h3 style="color: #fff; margin-bottom: 8px;">No cuts found for "${searchQuery}"</h3>
        <p>Try searching for Naatu Kozhi, Boneless Breast, Drumsticks or Eggs.</p>
        <button onclick="clearSearch()" class="btn-primary" style="margin-top: 16px; padding: 8px 18px; font-size: 0.85rem;">View All Fresh Cuts</button>
      </div>
    `;
    return;
  }

  productGridEl.innerHTML = filtered.map(product => {
    const activeVarIdx = selectedWeightIndex[product.id] || 0;
    const currentVariant = product.variants[activeVarIdx] || product.variants[0];
    const activeCut = selectedCutOption[product.id] || (product.cutOptions ? product.cutOptions[0] : '');

    // Check if this specific variant is already in cart
    const cartItem = cart.find(item => item.id === product.id && item.weight === currentVariant.weight && item.cut === activeCut);
    const cartQty = cartItem ? cartItem.qty : 0;

    return `
      <article class="product-card" id="card-${product.id}">
        <div class="card-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='${product.fallbackImage || product.image}'">
          ${product.badge ? `<span class="card-badge ${product.badgeClass}">${product.badge}</span>` : ''}
          <span class="protein-pill">${product.protein}</span>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-rating">${product.rating}</span>
            <span>Chilled at 0-4°C</span>
          </div>

          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>

          <div class="variant-selector-wrap">
            <div class="variant-label">
              <span>Select Pack Size</span>
              <span>${currentVariant.weight}</span>
            </div>
            <div class="weight-chips">
              ${product.variants.map((v, idx) => `
                <button 
                  type="button"
                  class="weight-chip ${idx === activeVarIdx ? 'active' : ''}" 
                  onclick="selectVariant('${product.id}', ${idx})">
                  ${v.weight}
                </button>
              `).join('')}
            </div>

            ${product.cutOptions && product.cutOptions.length > 1 ? `
              <div class="cut-style-row">
                ${product.cutOptions.map(cutOpt => `
                  <button 
                    type="button"
                    class="cut-pill ${cutOpt === activeCut ? 'active' : ''}"
                    onclick="selectCut('${product.id}', '${cutOpt}')">
                    ${cutOpt}
                  </button>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="card-footer">
            <div class="price-wrap">
              <span class="current-price">₹${currentVariant.price}</span>
              ${currentVariant.originalPrice ? `<span class="original-price">₹${currentVariant.originalPrice}</span>` : ''}
            </div>

            <div id="btn-wrap-${product.id}">
              ${cartQty > 0 ? `
                <div class="qty-controller">
                  <button class="qty-btn" onclick="updateQty('${product.id}', '${currentVariant.weight}', '${activeCut}', -1)">-</button>
                  <span class="qty-val">${cartQty}</span>
                  <button class="qty-btn" onclick="updateQty('${product.id}', '${currentVariant.weight}', '${activeCut}', 1)">+</button>
                </div>
              ` : `
                <button class="card-action-btn" onclick="addToCart('${product.id}')">
                  <span>+ Add</span>
                </button>
              `}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. VARIANT & CUT SELECTION
window.selectVariant = function(productId, variantIndex) {
  selectedWeightIndex[productId] = variantIndex;
  renderProducts();
};

window.selectCut = function(productId, cutName) {
  selectedCutOption[productId] = cutName;
  renderProducts();
};

window.clearSearch = function() {
  searchQuery = '';
  if (headerSearchInput) headerSearchInput.value = '';
  renderProducts();
};

// 6. CART OPERATIONS
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const varIdx = selectedWeightIndex[productId] || 0;
  const variant = product.variants[varIdx];
  const cut = selectedCutOption[productId] || (product.cutOptions ? product.cutOptions[0] : '');

  const existingIndex = cart.findIndex(item => item.id === productId && item.weight === variant.weight && item.cut === cut);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      image: product.image,
      fallbackImage: product.fallbackImage,
      weight: variant.weight,
      cut: cut,
      price: variant.price,
      qty: 1
    });
  }

  saveCart();
  renderProducts();
  renderCartDrawer();
  showToast(`🍗 Added ${product.name} (${variant.weight})`);
};

window.updateQty = function(productId, weight, cut, delta) {
  const index = cart.findIndex(item => item.id === productId && item.weight === weight && item.cut === cut);
  if (index > -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
  }
  saveCart();
  renderProducts();
  renderCartDrawer();
};

window.removeFromCart = function(index) {
  if (cart[index]) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    renderProducts();
    renderCartDrawer();
    showToast(`Removed ${item.name}`);
  }
};

function saveCart() {
  try {
    localStorage.setItem('butcher_cart', JSON.stringify(cart));
  } catch (e) {
    console.error(e);
  }
  updateCartBadges();
}

function updateCartBadges() {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  cartCountBadges.forEach(badge => {
    badge.textContent = totalItems;
  });

  const mobileTotalEl = document.getElementById('mobile-bar-total');
  if (mobileTotalEl) {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    mobileTotalEl.textContent = `₹${subtotal}`;
  }
}

// 7. RENDER CART DRAWER
function renderCartDrawer() {
  if (!cartItemsBody) return;

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Delivery calculation
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : EXPRESS_DELIVERY_FEE;
  
  // Progress to free delivery
  if (tierProgressFill && tierProgressText) {
    if (subtotal === 0) {
      tierProgressFill.style.width = '0%';
      tierProgressText.textContent = `Add ₹${FREE_DELIVERY_THRESHOLD} for FREE Express Delivery`;
    } else if (subtotal >= FREE_DELIVERY_THRESHOLD) {
      tierProgressFill.style.width = '100%';
      tierProgressText.innerHTML = `🎉 <strong>Congratulations!</strong> You get FREE Express Delivery!`;
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
      tierProgressFill.style.width = `${pct}%`;
      tierProgressText.innerHTML = `Add <strong>₹${remaining}</strong> more for <strong>FREE Delivery</strong>`;
    }
  }

  if (cart.length === 0) {
    cartItemsBody.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-cart-icon">🛒</div>
        <h3>Your Cart is Empty</h3>
        <p>Fresh country chicken and prime cuts butchered daily are waiting for you.</p>
        <button onclick="toggleCartDrawer(false)" class="btn-primary" style="margin-top: 10px;">Explore Today's Cuts</button>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
    if (cartGrandTotalEl) cartGrandTotalEl.textContent = '₹0';
    if (cartDeliveryFeeEl) cartDeliveryFeeEl.textContent = '₹0';
    return;
  }

  cartItemsBody.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='${item.fallbackImage || item.image}'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.weight} • ${item.cut}</div>
        <div class="cart-item-price">₹${item.price * item.qty} <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">(₹${item.price} each)</span></div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove item">✕</button>
        <div class="qty-controller" style="transform: scale(0.85); transform-origin: right center;">
          <button class="qty-btn" onclick="updateQty('${item.id}', '${item.weight}', '${item.cut}', -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.id}', '${item.weight}', '${item.cut}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // Bill Calculations
  let discount = 0;
  if (appliedCoupon === 'FIRST50' && subtotal >= 299) {
    discount = 50;
  } else if (appliedCoupon === 'FARM10') {
    discount = Math.min(100, Math.round(subtotal * 0.10));
  }

  const grandTotal = Math.max(0, subtotal + deliveryFee + (subtotal > 0 ? PACKAGING_FEE : 0) - discount);

  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal}`;
  if (cartDeliveryFeeEl) cartDeliveryFeeEl.textContent = isFreeDelivery ? 'FREE' : `₹${deliveryFee}`;
  
  if (cartDiscountRow) {
    if (discount > 0) {
      cartDiscountRow.style.display = 'flex';
      if (cartDiscountAmountEl) cartDiscountAmountEl.textContent = `-₹${discount}`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }

  if (cartGrandTotalEl) cartGrandTotalEl.textContent = `₹${grandTotal}`;
}

// 8. DRAWER & MODAL TOGGLING
window.toggleCartDrawer = function(open) {
  if (!cartDrawerOverlay) return;
  if (open) {
    renderCartDrawer();
    cartDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    cartDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.openCheckoutModal = function() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add some fresh cuts first.');
    return;
  }
  toggleCartDrawer(false);
  if (checkoutModalOverlay) {
    checkoutModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCheckoutSummary();
  }
};

window.closeCheckoutModal = function() {
  if (checkoutModalOverlay) {
    checkoutModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.selectSlot = function(element, slot) {
  document.querySelectorAll('.slot-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  deliverySlot = slot;
};

// 9. COUPON APPLICATION
window.applyCoupon = function() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'FIRST50') {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    if (subtotal < 299) {
      showToast('FIRST50 requires a minimum order of ₹299');
      return;
    }
    appliedCoupon = 'FIRST50';
    showToast('🎉 Coupon FIRST50 applied! ₹50 OFF');
  } else if (code === 'FARM10') {
    appliedCoupon = 'FARM10';
    showToast('🎉 Coupon FARM10 applied! 10% OFF');
  } else if (!code) {
    showToast('Please enter a coupon code (Try FIRST50)');
    return;
  } else {
    showToast('Invalid coupon code. Try FIRST50 or FARM10');
    return;
  }

  renderCartDrawer();
};

// 10. CHECKOUT & WHATSAPP GENERATOR
function updateCheckoutSummary() {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0;
  const deliveryFee = isFreeDelivery ? 0 : EXPRESS_DELIVERY_FEE;
  
  let discount = 0;
  if (appliedCoupon === 'FIRST50' && subtotal >= 299) discount = 50;
  if (appliedCoupon === 'FARM10') discount = Math.min(100, Math.round(subtotal * 0.10));

  const total = Math.max(0, subtotal + deliveryFee + PACKAGING_FEE - discount);
  const checkoutTotalEl = document.getElementById('checkout-modal-total');
  if (checkoutTotalEl) checkoutTotalEl.textContent = `₹${total}`;
}

window.submitWhatsAppOrder = function(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const pincode = document.getElementById('cust-pincode').value.trim() || '636102';
  const cuttingNotes = document.getElementById('cust-notes').value.trim();

  if (!name || !phone || !address) {
    showToast('Please fill in your Name, Phone and Address to continue.');
    return;
  }

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const isFreeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
  const deliveryFee = isFreeDelivery ? 0 : EXPRESS_DELIVERY_FEE;

  let discount = 0;
  if (appliedCoupon === 'FIRST50' && subtotal >= 299) discount = 50;
  if (appliedCoupon === 'FARM10') discount = Math.min(100, Math.round(subtotal * 0.10));

  const grandTotal = Math.max(0, subtotal + deliveryFee + PACKAGING_FEE - discount);
  const orderId = 'TDB-' + Math.floor(100000 + Math.random() * 900000);

  // Build formatted WhatsApp message
  let msg = `🛒 *NEW ORDER - THE DAILY BUTCHER*\n`;
  msg += `*Order ID:* ${orderId}\n`;
  msg += `--------------------------------\n`;
  msg += `👤 *Customer:* ${name}\n`;
  msg += `📱 *Phone:* ${phone}\n`;
  msg += `📍 *Delivery Address:* ${address}, PIN: ${pincode}\n`;
  msg += `⏰ *Delivery Slot:* ${deliverySlot}\n`;
  msg += `--------------------------------\n`;
  msg += `🍗 *ITEMS ORDERED:*\n`;

  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.name}*\n   • ${item.weight} | ${item.cut}\n   • Qty: ${item.qty} × ₹${item.price} = ₹${item.price * item.qty}\n`;
  });

  if (cuttingNotes) {
    msg += `--------------------------------\n`;
    msg += `🔪 *Custom Cutting Notes:* ${cuttingNotes}\n`;
  }

  msg += `--------------------------------\n`;
  msg += `💵 *Item Subtotal:* ₹${subtotal}\n`;
  if (discount > 0) msg += `🎁 *Discount (${appliedCoupon}):* -₹${discount}\n`;
  msg += `📦 *Cold-Chain Packaging:* ₹${PACKAGING_FEE}\n`;
  msg += `🚚 *Delivery:* ${isFreeDelivery ? 'FREE' : `₹${deliveryFee}`}\n`;
  msg += `🔥 *TOTAL PAYABLE:* ₹${grandTotal}\n`;
  msg += `💳 *Payment Mode:* Cash on Delivery / UPI QR on delivery\n`;
  msg += `--------------------------------\n`;
  msg += `Please confirm my order and share preparation & delivery updates. Thank you!`;

  const waUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msg)}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Show Success Receipt Modal
  closeCheckoutModal();
  showOrderSuccess(orderId, name, phone, address, grandTotal);

  // Clear Cart
  cart = [];
  appliedCoupon = null;
  saveCart();
  renderProducts();
  renderCartDrawer();
};

window.submitDirectOrder = function() {
  submitWhatsAppOrder();
};

function showOrderSuccess(orderId, name, phone, address, total) {
  if (!successModalOverlay) return;
  const receiptEl = document.getElementById('receipt-details');
  if (receiptEl) {
    receiptEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span>Order Number:</span><strong>#${orderId}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span>Customer:</span><strong>${name} (${phone})</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span>Deliver To:</span><strong style="text-align: right; max-width: 60%;">${address}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
        <span>Delivery Slot:</span><strong>${deliverySlot}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 8px; font-size: 1rem; color: #fff;">
        <span>Amount Payable:</span><strong style="color: var(--accent-green);">₹${total}</strong>
      </div>
    `;
  }
  successModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeSuccessModal = function() {
  if (successModalOverlay) {
    successModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// 11. PINCODE CHECKER
window.checkPincode = function() {
  const pinInput = document.getElementById('pincode-input');
  const statusEl = document.getElementById('pincode-status');
  if (!pinInput || !statusEl) return;

  const pin = pinInput.value.trim();
  if (!pin || pin.length !== 6 || isNaN(pin)) {
    statusEl.className = 'pincode-status invalid';
    statusEl.textContent = 'Please enter a valid 6-digit PIN code.';
    return;
  }

  // Any pincode simulation (Salem, Attur, Tamil Nadu or general)
  statusEl.className = 'pincode-status valid';
  statusEl.innerHTML = `⚡ <strong>Fast Delivery Available!</strong> Fresh cuts dispatch in 90 mins to ${pin}.`;
};

// 12. TOAST NOTIFICATIONS
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 13. EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  // Category Tab clicks
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category || 'all';
      renderProducts();
    });
  });

  // Search input live filter
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Close modals on clicking backdrop
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) toggleCartDrawer(false);
    });
  }

  if (checkoutModalOverlay) {
    checkoutModalOverlay.addEventListener('click', (e) => {
      if (e.target === checkoutModalOverlay) closeCheckoutModal();
    });
  }

  if (successModalOverlay) {
    successModalOverlay.addEventListener('click', (e) => {
      if (e.target === successModalOverlay) closeSuccessModal();
    });
  }

  // Initial render
  updateCartBadges();
  renderProducts();
});
