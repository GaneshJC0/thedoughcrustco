/* =============================================
   FORNO & FIZZ — JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV: Scroll state ─────────────────────── */
  const nav = document.getElementById('nav');

  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  /* ── NAV: Hamburger ───────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);

    // Animate hamburger spans
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close menu on link click
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


  /* ── MENU TABS ─────────────────────────────── */
  const tabs  = document.querySelectorAll('.menu-tab');
  const lists = document.querySelectorAll('.menu-list');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t  => t.classList.remove('active'));
      lists.forEach(l => {
        l.classList.remove('active');
        l.style.animation = '';
      });

      tab.classList.add('active');

      const activeList = document.getElementById(target);
      activeList.classList.add('active');

      // Fade-in animation
      activeList.style.animation = 'fadeInUp 0.4s ease both';
    });
  });


  /* ── SCROLL REVEAL ─────────────────────────── */
  // Add reveal class to elements
  const revealTargets = [
    { selector: '.story__headline',     delay: '' },
    { selector: '.story__body',         delay: 'reveal-delay-1' },
    { selector: '.stats',              delay: 'reveal-delay-2' },
    { selector: '.review-card',        delay: '' },
    { selector: '.rating-summary',     delay: 'reveal-delay-1' },
    { selector: '.reservation__title', delay: '' },
    { selector: '.menu-section__headline', delay: '' },
    { selector: '.menu-section__sub',  delay: 'reveal-delay-1' },
    { selector: '.menu-tabs',          delay: 'reveal-delay-2' },
    { selector: '.cta__title',         delay: '' },
    { selector: '.cta__sub',           delay: 'reveal-delay-1' },
    { selector: '.cta__details',       delay: 'reveal-delay-2' },
  ];

  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
      if (delay) el.classList.add(delay);
    });
  });

  // Individual review cards with staggered delays
  const reviewCards = document.querySelectorAll('.review-card');
  reviewCards.forEach((card, i) => {
    card.classList.add('reveal', `reveal-delay-${i}`);
  });

  // IntersectionObserver
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ── RESERVATION FORM ─────────────────────── */
  const reservationForm = document.getElementById('reservationForm');

  reservationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('reserveBtn');

    // Simple success feedback
    btn.textContent = '✓ Table Reserved!';
    btn.style.background = '#3a6e4e';
    btn.style.borderColor = '#3a6e4e';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Reserve a Table';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      reservationForm.reset();
    }, 3500);
  });


  /* ── SMOOTH SCROLL for btn clicks ─────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  /* ── PARALLAX: hero tag line ───────────────── */
  const heroContent = document.querySelector('.hero__content');

  const handleParallax = () => {
    const scrollY = window.scrollY;
    if (heroContent && scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
      heroContent.style.opacity   = 1 - (scrollY / window.innerHeight) * 1.5;
    }
  };

  window.addEventListener('scroll', handleParallax, { passive: true });


  /* ── MENU ITEM hover detail ─────────────────── */
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('h4').style.color = 'var(--rust)';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('h4').style.color = '';
    });
  });


  /* ── Gallery hover caption ─────────────────── */
  document.querySelectorAll('.gallery__item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      // In production: open lightbox
    });
  });

});


/* ── GLOBAL KEYFRAME ──────────────────────────── */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);
