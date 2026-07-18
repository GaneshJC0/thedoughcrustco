/* =============================================
   THE DOUGH & CRUST CO. — JAVASCRIPT
   Dynamic menu render · Slideshow · Search · Nav
   ============================================= */

/* ── COMPLETE MENU DATA ──────────────────────────────────────────────── */
const MENU_DATA = [
  {
    id: 'pizza',
    name: 'Pizza',
    emoji: '🍕',
    items: [
      {
        name: 'Margherita Classic',
        price: 199,
        description: 'Hand-stretched pizza topped with fresh tomato sauce, melted mozzarella, and finished with oregano for a simple yet classic Italian favorite.',
        image: 'Menu-photos/pizza/Margarita pizza .png',
        badge: null
      },
      {
        name: 'Spicy Corn Pizza',
        price: 219,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, spicy sriracha-coated corn, jalapeños, and a sprinkle of chili flakes for a bold, fiery flavor.',
        image: 'Menu-photos/pizza/Spicy Corn piz,a.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Sweet Corn Pizza',
        price: 219,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, and sweet corn for a simple, cheesy, and satisfying flavor.',
        image: 'Menu-photos/pizza/Sweet corn pizza.png',
        badge: null
      },
      {
        name: 'Pepper & Onion Pizza',
        price: 239,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, crisp bell peppers, and onions for a classic combination of sweet and savory flavors.',
        image: 'Menu-photos/pizza/Peper and onion pizza.png',
        badge: null
      },
      {
        name: 'Taste of Peri Peri',
        price: 209,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, spicy peri peri sauce, and peri peri-coated onions and capsicum for a bold and flavorful kick.',
        image: 'Menu-photos/pizza/Taste of peri peri pizza.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Paneer Makhani Pizza',
        price: 269,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, and paneer, onions, and capsicum coated in rich makhani sauce for a creamy, flavorful delight.',
        image: 'Menu-photos/pizza/Makhni paneer pizza.png',
        badge: '⭐ Best Seller'
      },
      {
        name: 'Peri Peri Paneer Pizza',
        price: 269,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, and peri peri-coated paneer for a spicy and flavorful bite.',
        image: 'Menu-photos/pizza/Peri peri paneer pizza.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Schezwan Paneer Pizza',
        price: 269,
        description: 'Evenly baked crust topped with a blend of tomato and Schezwan sauce, mozzarella cheese, and paneer coated and tossed in spicy Schezwan sauce for a bold, fiery flavor.',
        image: 'Menu-photos/pizza/SCHEZWEN PANEER PIZZA.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Alfredo Pizza',
        price: 249,
        description: 'Evenly baked crust topped with creamy Alfredo sauce, mozzarella cheese, olives, bell peppers, and sweet corn for a rich and comforting flavor.',
        image: 'Menu-photos/pizza/Alfredo pizza .png',
        badge: null
      },
      {
        name: 'The Gourmet Bloom Pizza',
        price: 299,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, sun-dried tomatoes, bocconcini, onions, and a touch of basil for an elegant burst of flavor.',
        image: 'Menu-photos/pizza/THE GOURMET BLOOM PIZZA__.png',
        badge: '🔥 Chef\'s Pick'
      },
      {
        name: 'Garden Delight Pizza',
        price: 299,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, onions, tomatoes, bell peppers, sweet corn, and olives for a colorful medley of fresh garden flavors.',
        image: 'Menu-photos/pizza/GARDEN DELIGHT PIZZA.png',
        badge: null
      },
      {
        name: 'Fiery Farmhouse Pizza',
        price: 299,
        description: 'Evenly baked crust topped with fresh tomato sauce, mozzarella cheese, onions, tomatoes, bell peppers, sweet corn, and olives, all tossed in spicy peri peri seasoning for a fiery farmhouse twist.',
        image: 'Menu-photos/pizza/FIERY FARMHOUSE PIZZA..png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Basil Pesto Pizza',
        price: 299,
        description: 'Evenly baked crust topped with aromatic basil pesto, mozzarella cheese, olives, onions, and bell peppers for a fresh and flavorful Italian-inspired delight.',
        image: 'Menu-photos/pizza/BASIL PESTO PIZZA.png',
        badge: null
      },
      {
        name: 'Creamy Garlic Pizza',
        price: 239,
        description: 'Evenly baked crust topped with creamy garlic sauce, mozzarella cheese, sweet corn, and roasted garlic for a rich, savory, and comforting flavor.',
        image: null,
        badge: null
      },
      {
        name: 'Make Your Own Pizza',
        price: null,
        description: 'Create your perfect pizza on an evenly baked crust with your choice of sauce, cheese, and toppings, crafted just the way you like it.',
        image: null,
        badge: '✨ Customize'
      }
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    items: [
      {
        name: 'Classic Aloo Tikki Burger',
        price: 169,
        description: 'Soft toasted burger bun layered with creamy mayo, fresh onions, cucumber, tomatoes, and a crispy aloo tikki for a timeless favorite.',
        image: 'Menu-photos/burger/CLASSIC ALOO TIKKI BURGER.png',
        badge: '⭐ Classic'
      },
      {
        name: 'Classic Veggie Crunch Burger',
        price: 189,
        description: 'Soft toasted burger bun layered with creamy mayo, fresh onions, tomatoes, cucumber, and a crispy veggie patty for a deliciously crunchy bite.',
        image: 'Menu-photos/burger/CLASSIC VEGGIE CRUNCH.png',
        badge: null
      },
      {
        name: 'Paneer Crisp Burger',
        price: 219,
        description: 'Soft toasted burger bun layered with burger mayo, mustard mayo, fresh onions, tomatoes, cucumber, lettuce, and a crispy paneer patty for a satisfying crunch in every bite.',
        image: 'Menu-photos/burger/PANEER CRISP BURGER.png',
        badge: null
      },
      {
        name: 'Corn Crunch Burger',
        price: 189,
        description: 'Soft toasted burger bun filled with a crispy corn patty, fresh onions, tomatoes, and cucumber for a delightful crunch and sweet corn flavor.',
        image: 'Menu-photos/burger/CORN CRUNCH BURGER.png',
        badge: null
      },
      {
        name: 'Chilli Cheese Burger',
        price: 199,
        description: 'Soft toasted burger bun layered with sriracha mayo, fresh onions, tomatoes, cucumber, a spicy chilli patty, and a cheese slice for a fiery cheesy indulgence.',
        image: 'Menu-photos/burger/CHILLI CHEESE BURGER.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Double Tikki Burger',
        price: 209,
        description: 'Soft toasted burger bun stacked with two crispy veggie patties, burger mayo, mustard mayo, cheese sauce, fresh onions, tomatoes, and cucumber for the ultimate loaded burger experience.',
        image: 'Menu-photos/burger/DOUB__LE TIKKI BURGER.png',
        badge: '🔥 Double Stack'
      },
      {
        name: 'Makhani Paneer Burger',
        price: 239,
        description: 'Soft toasted burger bun layered with rich makhani sauce, makhani mayo, fresh onions, tomatoes, cucumber, a paneer patty, and a cheese slice for a creamy, flavorful delight.',
        image: 'Menu-photos/burger/MAKHANI PANEER BURGER.png',
        badge: '⭐ Best Seller'
      },
      {
        name: 'American Veggie Burger',
        price: 249,
        description: 'Soft toasted burger bun loaded with a veggie patty, burger mayo, mustard mayo, lettuce, pickled gherkins, onions, tomatoes, cucumber, and a cheese slice for a classic American-style bite.',
        image: 'Menu-photos/burger/AMERICAN VEGGIE BURGER.png',
        badge: null
      },
      {
        name: 'Cheesy Coleslaw Burger',
        price: 239,
        description: 'Soft toasted burger bun layered with creamy mayo, fresh onions, tomatoes, cucumber, and a crispy veggie patty for a deliciously crunchy bite.',
        image: 'Menu-photos/burger/Cheesy COLESLAW burger .png',
        badge: null
      },
      {
        name: 'Peri Peri Paneer Burger',
        price: 249,
        description: 'Soft toasted burger bun loaded with a peri peri paneer patty, peri peri sauce, burger mayo, fresh onions, tomatoes, cucumber, and lettuce for a bold spicy kick.',
        image: 'Menu-photos/burger/PERI PERI PANEER BURGER.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Korean Paneer Burger',
        price: 249,
        description: 'Soft toasted burger bun layered with Korean sauce, kimchi, a crispy paneer patty, and sesame seeds for a perfect balance of spicy, tangy, and savory flavors.',
        image: 'Menu-photos/burger/KOREAN PANEER BURGER.png',
        badge: '🔥 Trending'
      },
      {
        name: 'Cheesy Burger',
        price: 239,
        description: 'Soft toasted burger bun layered with burger mayo, a crispy veggie tikki, cheese sauce, and a cheese slice for a deliciously cheesy treat.',
        image: 'Menu-photos/burger/CHEESY BURGER.png',
        badge: null
      },
      {
        name: 'Peri Peri Burger',
        price: 219,
        description: 'Soft toasted burger bun loaded with a veggie patty, peri peri sauce, burger mayo, fresh onions, tomatoes, cucumber, and lettuce for a fiery burst of flavor.',
        image: 'Menu-photos/burger/PER_I PERI BURGER.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Paneer Garlic Burger',
        price: 249,
        description: 'Soft toasted burger bun layered with garlic sauce, burger mayo, fresh onions, tomatoes, cucumber, lettuce, a paneer patty, and a cheese slice for a rich garlicky delight.',
        image: 'Menu-photos/burger/PANEER GARLIC BURGER.png',
        badge: null
      },
      {
        name: 'Tandoori Burger',
        price: 219,
        description: 'Soft toasted burger bun layered with tandoori mayo, burger mayo, fresh onions, tomatoes, cucumber, lettuce, and a cheese slice for a smoky Indian-inspired flavor.',
        image: 'Menu-photos/burger/TANDOORI BURGER.png',
        badge: null
      }
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta',
    emoji: '🍝',
    items: [
      {
        name: 'Spaghetti Aglio e Olio',
        price: 299,
        description: 'Perfectly cooked spaghetti tossed in olive oil, garlic, olives, basil, and parmesan cheese for a simple yet timeless Italian classic.',
        image: 'Menu-photos/pasta/Spaghetti Aglio e Olio.png',
        badge: '⭐ Classic'
      },
      {
        name: 'Creamy Alfredo Pasta',
        price: 299,
        description: 'Pasta tossed in rich and creamy Alfredo sauce with garlic, olives, mozzarella cheese, and basil for a comforting and indulgent experience.',
        image: 'Menu-photos/pasta/Creamy Alfredo pasta.png',
        badge: null
      },
      {
        name: 'Creamy Pesto Spaghetti',
        price: 299,
        description: 'Spaghetti coated in aromatic basil pesto with garlic, olives, and bell peppers for a fresh and flavorful Italian-inspired delight.',
        image: 'Menu-photos/pasta/Creamy Pesto Spaghetti.png',
        badge: '🔥 Chef\'s Pick'
      },
      {
        name: 'Arrabbiata Pasta',
        price: 299,
        description: 'Pasta tossed in zesty Arrabbiata sauce with garlic, olives, bell peppers, and basil for a bold and vibrant burst of flavor.',
        image: 'Menu-photos/pasta/Arabica pasta .png',
        badge: '🌶️ Spicy'
      }
    ]
  },
  {
    id: 'fries',
    name: 'Fries',
    emoji: '🍟',
    items: [
      {
        name: 'Classic Salted Fries',
        price: 159,
        description: 'Golden and crispy French fries seasoned with a touch of salt for a timeless favorite.',
        image: 'Menu-photos/fries/Salted fries.png',
        badge: '⭐ Classic'
      },
      {
        name: 'Peri Peri Fries',
        price: 169,
        description: 'Golden crispy French fries tossed in bold peri peri seasoning for a spicy and flavorful kick.',
        image: 'Menu-photos/fries/Peri peri fries.png',
        badge: '🌶️ Spicy'
      },
      {
        name: 'Cheesy Fries',
        price: 189,
        description: 'Golden crispy French fries served with a rich cheese sauce dip for the perfect cheesy indulgence.',
        image: 'Menu-photos/fries/Cheesy fries.png',
        badge: '⭐ Best Seller'
      },
      {
        name: 'Spicy Fries',
        price: 179,
        description: 'Golden crispy French fries served with a fiery sriracha sauce and Tabasco mix dip for those who love a spicy twist.',
        image: null,
        badge: '🌶️ Spicy'
      }
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks',
    emoji: '🧀',
    hidden: true,
    items: [
      {
        name: 'Crispy Paneer',
        price: 189,
        description: 'Golden-fried paneer bites with a perfectly crispy coating, served hot for a deliciously crunchy snack.',
        image: null,
        badge: null
      },
      {
        name: 'Crispy Peri Peri Paneer',
        price: 199,
        description: 'Golden-fried paneer bites tossed in bold peri peri seasoning for a spicy and flavorful crunch.',
        image: null,
        badge: '🌶️ Spicy'
      },
      {
        name: 'Potato Cheese Shots',
        price: 169,
        description: 'Crunchy potato bites filled with gooey melted cheese, fried to golden perfection for the ultimate cheesy treat.',
        image: null,
        badge: '⭐ Popular'
      },
      {
        name: 'Cheese Chilli Potato Shots',
        price: 189,
        description: 'Golden potato bites loaded with melted cheese and a hint of chilli for a crispy, cheesy, and spicy indulgence.',
        image: null,
        badge: '🌶️ Spicy'
      }
    ]
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    emoji: '🍹',
    items: [
      {
        name: 'Virgin Mojito',
        price: 199,
        description: 'Refreshing blend of fresh mint, zesty lemon, and sparkling soda for a crisp and revitalizing classic.',
        image: 'Menu-photos/mocktail/Virgin mojito.png',
        badge: '⭐ Classic'
      },
      {
        name: 'Raspberry Fizz',
        price: 199,
        description: 'Refreshing raspberry flavors blended with sparkling soda for a sweet, fruity, and bubbly delight.',
        image: 'Menu-photos/mocktail/Raspberry Fizz.png',
        badge: null
      },
      {
        name: 'Passion Fruit Mocktail',
        price: 199,
        description: 'Exotic passion fruit blended with sparkling soda for a vibrant, tropical, and refreshing experience.',
        image: 'Menu-photos/mocktail/Passion fruit mocktail .png',
        badge: null
      },
      {
        name: 'Blueberry Fizz',
        price: 199,
        description: 'Sweet blueberry flavors mixed with sparkling soda for a refreshing burst of fruity fizz.',
        image: 'Menu-photos/mocktail/Blueberry fizz.png',
        badge: null
      },
      {
        name: 'Strawberry Mocktail',
        price: 199,
        description: 'Juicy strawberry flavors blended into a refreshing drink that\'s sweet, fruity, and full of flavor.',
        image: 'Menu-photos/mocktail/Strawberry mocktail.png',
        badge: null
      }
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    emoji: '☕',
    items: [
      {
        name: 'Classic Cold Coffee',
        price: 199,
        description: 'Smooth coffee blended with milk, ice cream, and ice for a rich, creamy, and refreshing cafe favorite.',
        image: null,
        badge: '⭐ Classic'
      },
      {
        name: 'Chocolaty Cold Coffee',
        price: 199,
        description: 'Rich coffee blended with chocolate, ice cream, milk, and ice for an indulgent chocolate-loaded treat.',
        image: null,
        badge: null
      },
      {
        name: 'Hazelnut Cold Coffee',
        price: 199,
        description: 'Smooth coffee infused with hazelnut flavor, blended with ice cream, milk, and ice for a creamy nutty delight.',
        image: null,
        badge: null
      },
      {
        name: 'Vanilla Cold Coffee',
        price: 199,
        description: 'Refreshing coffee blended with vanilla, ice cream, milk, and ice for a smooth and creamy classic.',
        image: null,
        badge: null
      },
      {
        name: 'Fruity Ice Coffee',
        price: 199,
        description: 'Smooth chilled coffee with exotic passion fruit syrup, milk, and ice for a unique fusion of fruity sweetness and rich coffee flavor.',
        image: null,
        badge: '🔥 Unique'
      },
      {
        name: 'Iced Mocha',
        price: 199,
        description: 'Rich espresso blended with premium chocolate and chilled milk, served over ice for a smooth, refreshing coffee.',
        image: null,
        badge: null
      },
      {
        name: 'Vietnamese Iced Coffee',
        price: 229,
        description: 'Bold Vietnamese-style coffee with sweetened condensed milk, served over black coffee for a rich, smooth, and refreshing finish.',
        image: null,
        badge: '🔥 Trending'
      },
      {
        name: 'Spanish Iced Coffee',
        price: 229,
        description: 'Bold espresso blended with sweetened condensed milk and chilled milk, served over ice for a smooth, creamy, and refreshing coffee.',
        image: null,
        badge: null
      }
    ]
  },
  {
    id: 'milkshakes',
    name: 'Milkshakes',
    emoji: '🥤',
    items: [
      {
        name: 'Vanilla Milkshake',
        price: 199,
        description: 'Creamy vanilla ice cream blended with milk for a smooth, rich, and timeless classic.',
        image: 'Menu-photos/milkshake/Vanilla milkshake.png',
        badge: null
      },
      {
        name: 'Chocolaty Milkshake',
        price: 199,
        description: 'Rich chocolate blended with creamy ice cream and milk for an irresistibly indulgent treat.',
        image: 'Menu-photos/milkshake/Chocolate milkshake .png',
        badge: null
      },
      {
        name: 'Biscoff Milkshake',
        price: 199,
        description: 'Creamy milkshake blended with Biscoff spread and biscuit crumbs for a rich caramelized flavor.',
        image: 'Menu-photos/milkshake/Biscoff milkshake .png',
        badge: '🔥 Trending'
      },
      {
        name: 'KitKat Milkshake',
        price: 199,
        description: 'Smooth milkshake blended with KitKat chocolate for a deliciously crunchy chocolate experience.',
        image: null,
        badge: null
      },
      {
        name: 'Oreo Milkshake',
        price: 199,
        description: 'Creamy milkshake blended with Oreo cookies for the perfect cookies-and-cream delight.',
        image: null,
        badge: '⭐ Popular'
      },
      {
        name: 'Brownie Milkshake',
        price: 199,
        description: 'Rich milkshake blended with fudgy brownie pieces for an indulgent chocolate lover\'s treat.',
        image: null,
        badge: null
      },
      {
        name: 'Berry Milkshake',
        price: 199,
        description: 'Refreshing mixed berry flavors blended with creamy ice cream and milk for a fruity delight.',
        image: 'Menu-photos/milkshake/Berry milkshake .png',
        badge: null
      },
      {
        name: 'Hazelnut Milkshake',
        price: 199,
        description: 'Creamy milkshake blended with rich Nutella for the ultimate hazelnut chocolate indulgence.',
        image: null,
        badge: null
      },
      {
        name: 'Dark Chocolate Milkshake',
        price: 199,
        description: 'Intense dark chocolate blended with creamy ice cream and milk for a rich and decadent experience.',
        image: null,
        badge: null
      }
    ]
  },
  {
    id: 'donuts',
    name: 'Donuts',
    emoji: '🍩',
    hidden: true,
    items: [
      {
        name: 'Dark Chocolaty Donut',
        price: 129,
        description: 'Soft and fluffy donut coated with rich dark chocolate for a deeply indulgent chocolate experience.',
        image: null,
        badge: null
      },
      {
        name: 'White Chocolaty Donut',
        price: 129,
        description: 'Soft and fluffy donut glazed with smooth white chocolate for a sweet and creamy treat.',
        image: null,
        badge: null
      },
      {
        name: 'KitKat Chocolate Donut',
        price: 129,
        description: 'Soft donut topped with rich chocolate glaze and crunchy KitKat pieces for the perfect chocolate crunch.',
        image: null,
        badge: null
      },
      {
        name: 'Nutella Donut',
        price: 159,
        description: 'Soft and fluffy donut filled and topped with creamy Nutella for a rich hazelnut chocolate delight.',
        image: null,
        badge: '⭐ Popular'
      },
      {
        name: 'Brownie Chocolate Donut',
        price: 129,
        description: 'Soft chocolate donut topped with fudgy brownie chunks and rich chocolate glaze for the ultimate chocolate indulgence.',
        image: null,
        badge: null
      },
      {
        name: 'Oreo Crumble Donut',
        price: 129,
        description: 'Soft donut coated with chocolate glaze and finished with crunchy Oreo crumbles for a cookies-and-cream delight.',
        image: null,
        badge: null
      },
      {
        name: 'Biscoff Donut',
        price: 159,
        description: 'Soft and fluffy donut topped with creamy Biscoff spread and crunchy Biscoff crumbs for a caramelized biscuit treat.',
        image: null,
        badge: '🔥 Trending'
      }
    ]
  }
];

/* ── DOM READY ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================
     RENDER MENU
     Builds all tab pills + card grids from MENU_DATA
     =================================================== */
  function buildCard(item, catId) {
    const priceHtml = item.price === null
      ? `<span class="menu-card__price--ask">Ask Us</span>`
      : `<span class="menu-card__price">&#8377;${item.price}</span>`;

    const imgInner = item.image
      ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />`
      : `<div class="menu-card__img-placeholder">${getCategoryEmoji(catId)}</div>`;

    const badgeHtml = item.badge
      ? `<div class="menu-card__badge">${item.badge}</div>`
      : '';

    return `
      <div class="menu-card" data-name="${item.name.toLowerCase()}" data-cat="${catId}">
        <div class="menu-card__img-wrap">
          ${imgInner}
          <div class="menu-card__overlay">
            <p class="menu-card__desc">${item.description}</p>
          </div>
          ${badgeHtml}
          <div class="menu-card__veg" title="100% Vegetarian"></div>
        </div>
        <div class="menu-card__body">
          <h4 class="menu-card__name">${item.name}</h4>
          ${priceHtml}
        </div>
      </div>`;
  }

  function getCategoryEmoji(catId) {
    const map = {
      pizza: '🍕', burgers: '🍔', pasta: '🍝', fries: '🍟',
      snacks: '🧀', mocktails: '🍹', 'cold-coffee': '☕',
      milkshakes: '🥤', donuts: '🍩'
    };
    return map[catId] || '🍽️';
  }

  function renderMenu() {
    const tabsEl    = document.getElementById('menuTabs');
    const contentEl = document.getElementById('menuContent');
    let tabsHTML = '', contentHTML = '';

    const visibleCategories = MENU_DATA.filter(cat => !cat.hidden);

    visibleCategories.forEach((cat, i) => {
      const isActive = i === 0 ? 'active' : '';
      tabsHTML += `
        <button class="menu-tab ${isActive}" data-tab="${cat.id}" role="tab" id="tab-${cat.id}" aria-selected="${i === 0}">
          <span class="tab-emoji">${cat.emoji}</span>
          ${cat.name}
          <span class="tab-count">${cat.items.length}</span>
        </button>`;

      const cardsHTML = cat.items.map(item => buildCard(item, cat.id)).join('');
      contentHTML += `
        <div class="menu-list ${isActive}" id="menu-${cat.id}" data-cat="${cat.id}" role="tabpanel">
          ${cardsHTML}
          <p class="menu-allergen">✓ 100% Vegetarian &nbsp;·&nbsp; Please inform us of any allergies</p>
        </div>`;
    });

    tabsEl.innerHTML    = tabsHTML;
    contentEl.innerHTML = contentHTML;
  }

  renderMenu();

  /* ===================================================
     MENU TABS
     =================================================== */
  function setupTabs() {
    document.getElementById('menuTabs').addEventListener('click', e => {
      const tab = e.target.closest('.menu-tab');
      if (!tab) return;

      const target = tab.dataset.tab;

      document.querySelectorAll('.menu-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.menu-list').forEach(l => {
        l.classList.remove('active', 'search-active');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const activeList = document.getElementById(`menu-${target}`);
      if (activeList) {
        activeList.classList.add('active');
        activeList.style.animation = 'none';
        requestAnimationFrame(() => {
          activeList.style.animation = 'fadeInUp 0.38s cubic-bezier(0.4,0,0.2,1) both';
        });
      }

      // Clear search when switching tab
      const searchInput = document.getElementById('menuSearch');
      if (searchInput && searchInput.value) {
        searchInput.value = '';
        document.getElementById('searchClear').classList.remove('visible');
        clearSearch(target);
      }
    });
  }

  setupTabs();

  /* ===================================================
     MENU SEARCH
     Filters visible cards across all categories
     =================================================== */
  function setupSearch() {
    const searchInput = document.getElementById('menuSearch');
    const clearBtn    = document.getElementById('searchClear');
    const noResults   = document.getElementById('menuNoResults');
    const termEl      = document.getElementById('searchTerm');

    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        clearBtn.classList.remove('visible');
        // Restore to whichever tab is active
        const activeTab = document.querySelector('.menu-tab.active');
        clearSearch(activeTab ? activeTab.dataset.tab : (MENU_DATA.find(cat => !cat.hidden) || MENU_DATA[0]).id);
        return;
      }

      clearBtn.classList.add('visible');
      let totalVisible = 0;

      document.querySelectorAll('.menu-list').forEach(list => {
        list.classList.remove('active');
        list.classList.add('search-active');
        let listVisible = 0;

        list.querySelectorAll('.menu-card').forEach(card => {
          const match = (card.dataset.name || '').includes(query);
          card.classList.toggle('hidden', !match);
          if (match) { listVisible++; totalVisible++; }
        });

        const allergen = list.querySelector('.menu-allergen');
        if (allergen) allergen.style.display = listVisible > 0 ? '' : 'none';
      });

      noResults.style.display = totalVisible === 0 ? 'block' : 'none';
      if (termEl) termEl.textContent = searchInput.value;
    });

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.classList.remove('visible');
      const activeTab = document.querySelector('.menu-tab.active');
      clearSearch(activeTab ? activeTab.dataset.tab : (MENU_DATA.find(cat => !cat.hidden) || MENU_DATA[0]).id);
      searchInput.focus();
    });
  }

  function clearSearch(activeTabId) {
    const noResults = document.getElementById('menuNoResults');
    if (noResults) noResults.style.display = 'none';

    document.querySelectorAll('.menu-list').forEach(list => {
      list.classList.remove('search-active');
      list.querySelectorAll('.menu-card').forEach(c => c.classList.remove('hidden'));
      const allergen = list.querySelector('.menu-allergen');
      if (allergen) allergen.style.display = '';
      list.classList.toggle('active', list.dataset.cat === activeTabId);
    });
  }

  setupSearch();

  /* ===================================================
     HERO SLIDESHOW — auto-cycles every 5 s
     =================================================== */
  function setupSlideshow() {
    const slides = document.querySelectorAll('.hero__slide');
    const dots   = document.querySelectorAll('.hero__dot');
    if (!slides.length) return;

    let current = 0;
    let timer;

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current] && dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(() => goTo(current + 1), 5000);
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        goTo(parseInt(dot.dataset.index, 10));
        startTimer();
      });
    });

    startTimer();
  }

  setupSlideshow();

  /* ===================================================
     NAV — scroll state
     =================================================== */
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ===================================================
     NAV — hamburger
     =================================================== */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });

  /* ===================================================
     SMOOTH SCROLL
     =================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href   = anchor.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ===================================================
     SCROLL REVEAL
     =================================================== */
  const revealTargets = [
    { selector: '.story__headline',        delay: '' },
    { selector: '.story__body',            delay: 'reveal-delay-1' },
    { selector: '.stats',                  delay: 'reveal-delay-2' },
    { selector: '.menu-section__headline', delay: '' },
    { selector: '.menu-section__sub',      delay: 'reveal-delay-1' },
    { selector: '.menu-tabs',              delay: 'reveal-delay-2' },
    { selector: '.cta__title',             delay: '' },
    { selector: '.cta__sub',              delay: 'reveal-delay-1' },
    { selector: '.cta__details',           delay: 'reveal-delay-2' },
  ];

  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
      if (delay) el.classList.add(delay);
    });
  });

  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ===================================================
     PARALLAX — hero content on scroll
     =================================================== */
  const heroContent = document.querySelector('.hero__content');

  window.addEventListener('scroll', () => {
    if (!heroContent) return;
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.22}px)`;
      heroContent.style.opacity   = `${1 - (y / window.innerHeight) * 1.5}`;
    }
  }, { passive: true });

});
