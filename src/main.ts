import './style.css'
import { t, getLang, setLang } from './i18n'

// --- View Definitions ---

const renderNavbar = () => `
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="nav-logo" data-link>KATY BARON <span class="logo-studio">STUDIO</span></a>
      <div class="nav-links">
        <a href="/services" data-link>${t('nav_services')}</a>
        <a href="/portfolio" data-link>${t('nav_portfolio')}</a>
        <a href="/contacts" data-link>${t('nav_contacts')}</a>
        <div class="lang-switch">
          <button class="lang-btn ${getLang() === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          <button class="lang-btn ${getLang() === 'ru' ? 'active' : ''}" data-lang="ru">RU</button>
          <button class="lang-btn ${getLang() === 'uk' ? 'active' : ''}" data-lang="uk">UK</button>
        </div>
        <a href="/book" class="nav-book-btn" data-link>${t('nav_book')}</a>
      </div>
      <button class="mobile-toggle">
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
`

const renderFooter = () => `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <a href="/" class="footer-logo" data-link>KATY BARON</a>
        <p class="footer-brand-text">${t('footer_brand_text')}</p>
        <div class="footer-socials">
          <a href="https://instagram.com" target="_blank">INSTAGRAM</a>
          <a href="mailto:ketybaront@gmail.com">E-MAIL</a>
        </div>
      </div>
      <div class="footer-nav">
        <h4>${t('footer_explore')}</h4>
        <a href="/services/brows" data-link>${t('footer_digital_brows')}</a>
        <a href="/services/lips" data-link>${t('footer_aura_lips')}</a>
        <a href="/services/lashes" data-link>${t('footer_lash_depth')}</a>
        <a href="/portfolio" data-link>${t('footer_correction')}</a>
      </div>
      <div class="footer-location">
        <h4>${t('footer_location')}</h4>
        <p>${t('footer_address1')}<br>${t('footer_address2')}</p>
        <a href="tel:+14378715805" class="footer-phone">${t('footer_phone')}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>${t('footer_copy')}</p>
      <div class="footer-legal">
        <a href="#">${t('footer_privacy')}</a>
        <a href="#">${t('footer_terms')}</a>
        <a href="#">${t('footer_ethics')}</a>
      </div>
    </div>
  </footer>
`

const ViewHome = () => `
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="hero-label-wrap">
        <span class="hero-label">${t('hero_label')}</span>
        <span class="hero-label-line"></span>
      </div>
      <h1 class="hero-title">
        <span class="hero-title-top">${t('hero_title_top')}</span>
        <span class="hero-title-accent">${t('hero_title_accent')}</span>
      </h1>
      <p class="hero-sub">${t('hero_sub')}</p>
      <div class="hero-actions">
        <a href="/book" class="btn btn-primary" data-link>
          <span>${t('hero_btn_book')}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="/portfolio" class="btn btn-outline" data-link>${t('hero_btn_portfolio')}</a>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-line"></div>
    </div>
  </section>

  <section id="services" class="services-home">
    <div class="services-container">
      <div class="services-header">
        <span class="section-label">${t('services_label')}</span>
        <h2 class="section-title">${t('services_title')}</h2>
        <p class="section-sub">${t('services_sub')}</p>
      </div>
      
      <div class="services-bento">
        <div class="service-card large" data-aos="fade-up">
           <div class="service-card-img" style="background-image: url('/src/assets/brows_detail.png')"></div>
           <div class="service-content">
             <span class="service-cat">01</span>
             <h3>${t('brows_title')}</h3>
             <p>${t('brows_desc')}</p>
             <a href="/services/brows" class="service-link" data-link>EXPLORE TECHNIQUE →</a>
           </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="100">
           <div class="service-card-img" style="background-image: url('/src/assets/lashes_depth.png')"></div>
           <div class="service-content">
             <span class="service-cat">02</span>
             <h3>${t('lashes_title')}</h3>
             <p>${t('lashes_desc')}</p>
             <a href="/services/lashes" class="service-link" data-link>VIEW CASE →</a>
           </div>
        </div>
        
        <div class="service-card" data-aos="fade-up" data-aos-delay="200">
           <div class="service-card-img" style="background-image: url('/src/assets/lips_palette.png')"></div>
           <div class="service-content">
             <span class="service-cat">03</span>
             <h3>${t('lips_title')}</h3>
             <p>${t('lips_desc')}</p>
             <a href="/services/lips" class="service-link" data-link>DISCOVER AURA →</a>
           </div>
        </div>
      </div>
    </div>
  </section>

  <section class="gallery-preview">
    <div class="gallery-container">
      <div class="gallery-header">
        <span class="section-label">${t('gallery_label')}</span>
        <h2 class="section-title">${t('gallery_title')}</h2>
      </div>
      <div class="gallery-grid-preview">
        <div class="gallery-item" data-tag="brows">
          <img src="/foto/01.jpg" alt="Brows" loading="lazy">
          <span class="gallery-tag">${t('gallery_tag_brows')}</span>
        </div>
        <div class="gallery-item h-2" data-tag="lips">
          <img src="/foto/02.jpg" alt="Lips" loading="lazy">
          <span class="gallery-tag">${t('gallery_tag_lips')}</span>
        </div>
        <div class="gallery-item" data-tag="lashes">
          <img src="/foto/03.jpg" alt="Lashes" loading="lazy">
          <span class="gallery-tag">${t('gallery_tag_lashes')}</span>
        </div>
        <div class="gallery-item" data-tag="correction">
          <img src="/foto/04.jpg" alt="Correction" loading="lazy">
          <span class="gallery-tag">${t('gallery_tag_correction')}</span>
        </div>
        <div class="gallery-item w-2" data-tag="brows">
          <img src="/foto/05.jpg" alt="Brows" loading="lazy">
          <span class="gallery-tag">${t('gallery_tag_brows')}</span>
        </div>
      </div>
      <div class="gallery-actions">
        <a href="/portfolio" class="btn btn-luxury" data-link>${t('gallery_btn')}</a>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="about-inner">
      <div class="about-photo-wrap">
        <div class="about-photo" style="background-image: url('/foto/06.jpg')"></div>
        <div class="about-experience-badge">
          <span class="exp-num">08</span>
          <span class="exp-text">YEARS<br>EXP</span>
        </div>
      </div>
      <div class="about-content">
        <span class="section-label">${t('about_label')}</span>
        <h2 class="about-title">${t('about_title')}</h2>
        <p class="about-subtitle">${t('about_subtitle')}</p>
        <div class="about-desc">
          <p>${t('about_text')}</p>
        </div>
        <div class="about-stats-mini">
           <div class="stat-mini"><span>500+</span>${t('counter_clients')}</div>
           <div class="stat-mini"><span>04</span>${t('counter_awards')}</div>
           <div class="stat-mini"><span>5.0</span>${t('counter_rating')}</div>
        </div>
        <a href="/contacts" class="btn btn-outline" data-link>${t('nav_contacts')}</a>
      </div>
    </div>
  </section>

  <section class="counters-section">
    <div class="counters-grid">
      <div class="counter-item">
        <span class="counter-number" data-target="8" data-suffix="+">0</span>
        <span class="counter-label">${t('counter_years')}</span>
      </div>
      <div class="counter-item">
        <span class="counter-number" data-target="500" data-suffix="+">0</span>
        <span class="counter-label">${t('counter_clients')}</span>
      </div>
      <div class="counter-item">
        <span class="counter-number" data-target="99" data-suffix="%">0</span>
        <span class="counter-label">${t('counter_rating')}</span>
      </div>
      <div class="counter-item">
        <span class="counter-number" data-target="10" data-suffix="+">0</span>
        <span class="counter-label">${t('counter_awards')}</span>
      </div>
    </div>
  </section>

  <section class="reviews-section">
    <div class="reviews-container">
      <div class="reviews-header">
        <span class="section-label">${t('reviews_label')}</span>
        <h2 class="section-title">${t('reviews_title')}</h2>
      </div>
      <div class="reviews-track">
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"Katy is a true visionary. My brows look so natural that even my closest friends didn't notice I had PMU, they just said I look refreshed!"</p>
          <div class="review-author">
            <span class="author-name">Sarah Wilson</span>
            <span class="author-service">Architectural Brows</span>
          </div>
        </div>
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"The studio environment is incredible. Clean, professional, and very high-end. The result on my lips is perfect - exactly the shade we discussed."</p>
          <div class="review-author">
            <span class="author-name">Elena Kostova</span>
            <span class="author-service">Aura Lip Blush</span>
          </div>
        </div>
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">"I was nervous about the procedure, but Katy's expertise put me at ease. The symmetry analysis is mind-blowing. Highly recommend!"</p>
          <div class="review-author">
            <span class="author-name">Jessica Rae</span>
            <span class="author-service">Digital Lash Depth</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="faq-section">
    <div class="faq-container">
      <div class="faq-header">
        <span class="section-label">${t('faq_label')}</span>
        <h2 class="section-title">${t('faq_title')}</h2>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question">
            <span>${t('faq_q1')}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${t('faq_a1')}</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>${t('faq_q2')}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${t('faq_a2')}</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>${t('faq_q3')}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${t('faq_a3')}</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>${t('faq_q4')}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${t('faq_a4')}</p>
          </div>
        </div>
        <div class="faq-item">
          <button class="faq-question">
            <span>${t('faq_q5')}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>${t('faq_a5')}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="studio-promo">
    <div class="studio-promo-inner">
      <div class="studio-promo-content">
        <span class="studio-label">${t('studio_label')}</span>
        <h2 class="studio-title">${t('studio_title')}</h2>
        <p class="studio-desc">${t('studio_desc')}</p>
        <a href="#" class="studio-link">${t('studio_link')}</a>
      </div>
    </div>
  </section>
`

const ViewServiceDetail = (type: 'brows' | 'lips' | 'lashes') => {
  const data = {
    brows: {
      label: t('brows_service_label'),
      title: t('brows_service_title'),
      desc: t('brows_service_desc'),
      process: t('brows_process').split('|'),
      invest: t('brows_price'),
      long: t('brows_longevity'),
      img: '/src/assets/brows_detail.png'
    },
    lips: {
      label: t('lips_service_label'),
      title: t('lips_service_title'),
      desc: t('lips_service_desc'),
      process: t('lips_process').split('|'),
      invest: t('lips_price'),
      long: t('lips_longevity'),
      img: '/src/assets/lips_palette.png'
    },
    lashes: {
      label: t('lashes_service_label'),
      title: t('lashes_service_title'),
      desc: t('lashes_service_desc'),
      process: t('lashes_process').split('|'),
      invest: t('lashes_price'),
      long: t('lashes_longevity'),
      img: '/src/assets/lashes_depth.png'
    }
  }[type]

  return `
    <div class="detail-page">
      <section class="detail-hero">
        <div class="detail-hero-content">
          <div class="detail-label-wrap">
            <span class="detail-label">${data.label}</span>
            <span class="detail-label-line"></span>
          </div>
          <h1 class="detail-title">${data.title}</h1>
          <p class="detail-desc">${data.desc}</p>
        </div>
        <div class="detail-hero-img" style="background-image: url('${data.img}')"></div>
      </section>

      <section class="detail-info">
        <div class="detail-info-grid">
          <div class="detail-info-block">
            <h3>${t('detail_concept')}</h3>
            <p>${data.desc}</p>
          </div>
          <div class="detail-info-block">
            <h3>${t('detail_process')}</h3>
            <ul class="process-list">
              ${data.process.map((step, i) => `<li><span>0${i+1}</span> ${step}</li>`).join('')}
            </ul>
          </div>
          <div class="detail-info-block">
            <h3>${t('detail_details')}</h3>
            <div class="detail-meta">
              <div class="meta-item"><span>${t('detail_investment')}</span> <span class="meta-val">${data.invest}</span></div>
              <div class="meta-item"><span>${t('detail_longevity')}</span> <span class="meta-val">${data.long}</span></div>
              <div class="meta-item"><span>${t('detail_anesthesia')}</span> <span class="meta-val">${t('detail_anesthesia_val')}</span></div>
            </div>
            <a href="/book" class="btn btn-luxury" data-link>${t('detail_btn_book')}</a>
          </div>
        </div>
      </section>
    </div>
  `
}

const ViewPortfolio = () => `
  <section class="portfolio-page">
    <div class="portfolio-header">
      <span class="section-label">${t('portfolio_label')}</span>
      <h1 class="section-title">${t('portfolio_title')}</h1>
      
      <div class="portfolio-filters">
        <button class="filter-btn active" data-filter="all">${t('filter_all')}</button>
        <button class="filter-btn" data-filter="brows">${t('filter_brows')}</button>
        <button class="filter-btn" data-filter="lips">${t('filter_lips')}</button>
        <button class="filter-btn" data-filter="lashes">${t('filter_lashes')}</button>
      </div>
    </div>

    <div class="portfolio-grid">
      <div class="gallery-item" data-category="brows">
        <img src="/foto/01.jpg" alt="Brows" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_brows')}</span></div>
      </div>
      <div class="gallery-item" data-category="lips">
        <img src="/foto/02.jpg" alt="Lips" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_lips')}</span></div>
      </div>
      <div class="gallery-item" data-category="lashes">
        <img src="/foto/03.jpg" alt="Lashes" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_lashes')}</span></div>
      </div>
      <div class="gallery-item" data-category="brows">
        <img src="/foto/04.jpg" alt="Correction" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_correction')}</span></div>
      </div>
      <div class="gallery-item" data-category="brows">
        <img src="/foto/05.jpg" alt="Brows" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_brows')}</span></div>
      </div>
      <div class="gallery-item" data-category="lips">
        <img src="/foto/07.jpg" alt="Lips" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_lips')}</span></div>
      </div>
      <div class="gallery-item" data-category="brows">
        <img src="/foto/08.jpg" alt="Brows" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_brows')}</span></div>
      </div>
      <div class="gallery-item" data-category="lashes">
        <img src="/foto/09.jpg" alt="Lashes" loading="lazy">
        <div class="item-overlay"><span>${t('gallery_tag_lashes')}</span></div>
      </div>
    </div>
  </section>
`

const ViewBooking = () => `
  <section class="booking-page">
    <div class="booking-content-grid">
      <div class="booking-info">
        <span class="section-label">${t('booking_label')}</span>
        <h1 class="booking-title">${t('booking_title')} <br><span class="accent">${t('booking_title_accent')}</span></h1>
        <p class="booking-sub">${t('booking_sub')}</p>
        
        <div class="booking-perks">
          <div class="perk"><span>✦</span> Symmetry Analysis included</div>
          <div class="perk"><span>✦</span> Clinical Grade Equipment</div>
          <div class="perk"><span>✦</span> Custom Pigment Mix</div>
        </div>
      </div>
      
      <div class="booking-form-wrap">
        <form class="booking-form" id="bookingForm">
          <div class="form-group">
            <label>${t('booking_name')}</label>
            <input type="text" name="name" placeholder="${t('booking_name_ph')}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>${t('booking_phone')}</label>
              <input type="tel" name="phone" placeholder="${t('booking_phone_ph')}" required>
            </div>
            <div class="form-group">
              <label>${t('booking_email')}</label>
              <input type="email" name="email" placeholder="kse@example.com">
            </div>
          </div>
          <div class="form-row">
             <div class="form-group">
              <label>${t('booking_service')}</label>
              <select name="service" required>
                <option value="" disabled selected>${t('booking_service_ph')}</option>
                <option>${t('booking_svc1')}</option>
                <option>${t('booking_svc2')}</option>
                <option>${t('booking_svc3')}</option>
                <option>${t('booking_svc4')}</option>
                <option>${t('booking_svc5')}</option>
              </select>
            </div>
            <div class="form-group">
              <label>${t('booking_date')}</label>
              <input type="date" name="date">
            </div>
          </div>
          <div class="form-group">
            <label>${t('booking_wishes')}</label>
            <textarea name="wishes" placeholder="${t('booking_wishes_ph')}"></textarea>
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="consent" required>
            <label for="consent">${t('booking_consent')}<a href="#">${t('booking_consent_link')}</a>${t('booking_consent2')}</label>
          </div>
          <button type="submit" class="btn btn-luxury w-full">${t('booking_submit')}</button>
        </form>
        <div id="bookingSuccess" class="booking-success" style="display: none">
           <h3>${t('booking_success_title')}</h3>
           <p>${t('booking_success_text')}</p>
           <a href="/" class="btn btn-outline" data-link>${t('booking_success_btn')}</a>
        </div>
      </div>
    </div>
  </section>
`

const ViewContacts = () => `
  <section class="contacts-page">
    <div class="contacts-grid">
      <div class="contacts-info">
        <span class="section-label">${t('contacts_label')}</span>
        <h1 class="contacts-title">${t('contacts_title')} <span class="accent">${t('contacts_title_accent')}</span></h1>
        
        <div class="contacts-list">
          <div class="contact-item">
            <span class="ci-label">${t('contacts_address_label')}</span>
            <p>${t('footer_address1')}<br>${t('footer_address2')}</p>
          </div>
          <div class="contact-item">
            <span class="ci-label">${t('contacts_phone_label')}</span>
            <a href="tel:+14378715805" class="ci-val">${t('footer_phone')}</a>
            <p class="ci-note">${t('contacts_hours')}</p>
          </div>
          <div class="contact-item">
            <span class="ci-label">${t('contacts_email_label')}</span>
            <a href="mailto:ketybaront@gmail.com" class="ci-val">ketybaront@gmail.com</a>
          </div>
          <div class="contact-item">
            <span class="ci-label">${t('contacts_instagram_label')}</span>
            <a href="https://instagram.com" target="_blank" class="ci-val">@KATY.BARON.STUDIO</a>
          </div>
        </div>
        
        <a href="/book" class="btn btn-luxury" data-link>${t('contacts_book_btn')}</a>
      </div>
      
      <div class="contacts-form-box">
        <h3>${t('contacts_form_title')}</h3>
        <form id="contactForm">
          <div class="form-group">
             <label>${t('contacts_form_name')}</label>
             <input type="text" placeholder="${t('contacts_form_name_ph')}" required>
          </div>
          <div class="form-group">
             <label>${t('contacts_form_contact')}</label>
             <input type="text" placeholder="${t('contacts_form_contact_ph')}" required>
          </div>
          <div class="form-group">
             <label>${t('contacts_form_message')}</label>
             <textarea placeholder="${t('contacts_form_message_ph')}" required></textarea>
          </div>
          <button type="submit" class="btn btn-luxury">${t('contacts_form_submit')}</button>
        </form>
      </div>
    </div>
  </section>
`

const ViewPricing = () => `
  <div class="pricing-page">
    <div class="pricing-header">
      <span class="section-label">${t('pricing_label')}</span>
      <h1 class="pricing-title">${t('pricing_title')}</h1>
      <div class="pricing-hr"></div>
    </div>

    <div class="pricing-body">
      <div class="pricing-category">
        <h2 class="price-cat-title">${t('pricing_cat_brows')}</h2>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Nanoblading (Hyper-realism)</div>
            <div class="price-desc">Hand-drawn strokes for the most natural look</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">2-3h</div>
            <div class="price-value">$450</div>
          </div>
        </div>
        <div class="price-divider"></div>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Ombre Shading (Velvet Finish)</div>
            <div class="price-desc">Soft powder transition effect for defined brows</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">2h</div>
            <div class="price-value">$400</div>
          </div>
        </div>
        <div class="price-divider"></div>
         <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Combo Brows (Signature Mix)</div>
            <div class="price-desc">Strokes + Shading for depth and definition</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">3h</div>
            <div class="price-value">$550</div>
          </div>
        </div>
      </div>

      <div class="pricing-category">
        <h2 class="price-cat-title">${t('pricing_cat_lips')}</h2>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Aura Lip Blush (Metallic Magenta)</div>
            <div class="price-desc">Full saturation with gradient contouring</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">2.5h</div>
            <div class="price-value">$500</div>
          </div>
        </div>
        <div class="price-divider"></div>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Nude Lip Tint (Soft Plum)</div>
            <div class="price-desc">Translucent pixel effect for natural blush</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">2h</div>
            <div class="price-value">$450</div>
          </div>
        </div>
      </div>

       <div class="pricing-category">
        <h2 class="price-cat-title">${t('pricing_cat_lashes')}</h2>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Digital Lash Depth</div>
            <div class="price-desc">In-between lashes enhancement</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">1.5h</div>
            <div class="price-value">$350</div>
          </div>
        </div>
      </div>

      <div class="pricing-category">
        <h2 class="price-cat-title">${t('pricing_cat_other')}</h2>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Annual Refresh</div>
            <div class="price-desc">Color boost for existing Katy Baron clients</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">1.5h</div>
            <div class="price-value">$250</div>
          </div>
        </div>
        <div class="price-divider"></div>
        <div class="price-item">
          <div class="price-item-info">
            <div class="price-name">Consultation & Mapping</div>
            <div class="price-desc">Facial symmetry analysis and sketch (free with service)</div>
          </div>
          <div class="price-item-right">
            <div class="price-duration">45m</div>
            <div class="price-value">$50</div>
          </div>
        </div>
      </div>

      <p class="pricing-note">${t('pricing_note')}</p>
      
      <div class="pricing-action" style="margin-top: 60px; text-align: center;">
         <a href="/book" class="btn btn-luxury" data-link>${t('pricing_book')}</a>
      </div>
    </div>
  </div>

  <section class="leave-review-section">
    <div class="leave-review-inner">
       <span class="section-label">${t('review_leave_label')}</span>
       <h2 class="section-title">${t('review_leave_title')}</h2>
       <p class="leave-review-sub">${t('review_leave_sub')}</p>

       <form class="review-form" id="reviewForm">
          <div class="form-group">
             <label>${t('review_name')}</label>
             <input type="text" name="name" placeholder="${t('review_name_ph')}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
               <label>${t('review_service')}</label>
               <select name="service" required>
                  <option>${t('brows_title')}</option>
                  <option>${t('lips_title')}</option>
                  <option>${t('lashes_title')}</option>
                  <option>${t('pricing_cat_other')}</option>
               </select>
            </div>
            <div class="form-group">
               <label>${t('review_rating')}</label>
               <div class="star-rating" id="starRating">
                  <span class="star" data-val="1">★</span>
                  <span class="star" data-val="2">★</span>
                  <span class="star" data-val="3">★</span>
                  <span class="star" data-val="4">★</span>
                  <span class="star" data-val="5">★</span>
               </div>
               <input type="hidden" name="rating" id="ratingInput" value="5">
            </div>
          </div>
          <div class="form-group">
             <label>${t('review_text')}</label>
             <textarea name="text" placeholder="${t('review_text_ph')}" required></textarea>
          </div>
          <button type="submit" class="btn btn-luxury">${t('review_submit')}</button>
       </form>
       <div id="reviewThanks" class="review-thanks" style="display: none">
          <h3>${t('review_thanks_title')}</h3>
          <p>${t('review_thanks_text')}</p>
       </div>
    </div>
  </section>
`

// --- Routing Logic ---

const routes: Record<string, () => string> = {
  '/': ViewHome,
  '/services': ViewPricing,
  '/services/brows': () => ViewServiceDetail('brows'),
  '/services/lips': () => ViewServiceDetail('lips'),
  '/services/lashes': () => ViewServiceDetail('lashes'),
  '/portfolio': ViewPortfolio,
  '/book': ViewBooking,
  '/contacts': ViewContacts
}

const handleRouting = () => {
  const path = window.location.pathname
  const render = routes[path] || ViewHome
  
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    ${renderNavbar()}
    <main class="content-fade">
      ${render()}
    </main>
    ${renderFooter()}
    <!-- Fixed Booking Button -->
    <a href="/book" class="float-book" data-link>${t('nav_book')}</a>
    <!-- Lightbox placeholder -->
    <div id="lightbox" class="lightbox">
      <button class="lightbox-close">×</button>
      <img src="" alt="Zoom">
    </div>
  `
  
  window.scrollTo(0, 0)
  initPageEvents()
}

const initPageEvents = () => {
  // Navigation
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')!
      window.history.pushState({}, '', href)
      handleRouting()
    })
  })

  // Language Switch
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang') as Lang
      setLang(lang)
      handleRouting()
    })
  })

  // Mobile Menu
  const toggle = document.querySelector('.mobile-toggle')
  const navLinks = document.querySelector('.nav-links')
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navLinks?.classList.toggle('active')
  })

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      item.classList.toggle('open')
    })
  })

  // Portfolio Filter
  const filterBtns = document.querySelectorAll('.filter-btn')
  const items = document.querySelectorAll('.gallery-item')
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.getAttribute('data-filter')
      items.forEach((item: any) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      })
    })
  })

  // Lightbox
  const lightbox = document.getElementById('lightbox') as HTMLElement
  const lbImg = lightbox?.querySelector('img') as HTMLImageElement
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = (img as HTMLImageElement).src
      lightbox.classList.add('open')
      document.body.style.overflow = 'hidden'
    })
  })
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => {
    lightbox.classList.remove('open')
    document.body.style.overflow = ''
  })

  // Forms handling
  document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('bookingForm')!.style.display = 'none'
    document.getElementById('bookingSuccess')!.style.display = 'block'
  })

  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = (e.target as HTMLFormElement).querySelector('button')!
    btn.textContent = t('contacts_form_sent')
    btn.classList.add('sent')
    btn.disabled = true
  })

  // Review Form & Star Rating
  const stars = document.querySelectorAll('.star')
  const ratingInput = document.getElementById('ratingInput') as HTMLInputElement
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = star.getAttribute('data-val')!
      ratingInput.value = val
      stars.forEach(s => {
        const sVal = s.getAttribute('data-val')!
        s.classList.toggle('active', parseInt(sVal) <= parseInt(val))
      })
    })
  })

  document.getElementById('reviewForm')?.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('reviewForm')!.style.display = 'none'
    document.getElementById('reviewThanks')!.style.display = 'flex'
  })

  // Intersection Observers for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.service-card,.gallery-item,.services-header,.gallery-header,.detail-hero-content,.counter-item,.about-inner,.review-card,.faq-item').forEach(el => {
    observer.observe(el)
  })

  // Counter animation
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target as HTMLElement
      const target = parseFloat(el.getAttribute('data-target') || '0')
      const isDecimal = el.getAttribute('data-decimal') === 'true'
      const suffix = el.getAttribute('data-suffix') || ''
      const duration = 1800
      const start = performance.now()
      const animate = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = target * eased
        el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      counterObserver.unobserve(el)
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.counter-number').forEach(el => counterObserver.observe(el))
}

window.addEventListener('popstate', handleRouting)
handleRouting()

window.addEventListener('scroll', () => {
  const navbar = document.querySelector<HTMLElement>('.navbar')
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 80)
})
