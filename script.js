/* =========================================
   TRANSLATIONS DICTIONARY
   ========================================= */
const translations = {
    ro: {
        navHome: "Acasă",
        navAbout: "Despre",
        navMenu: "Meniu",
        navGallery: "Galerie",
        navReviews: "Recenzii",
        navContact: "Contact",
        btnReserve: "Rezervă Masă",
        btnCall: "SUNĂ ACUM",
        btnCallNow: "SUNĂ ACUM",
        heroTitle: "Experiență autentică și preparate memorabile",
        heroSubtitle: "Descoperă gustul perfect într-o atmosferă premium la Topraisar.",
        aboutTitle: "Bine ați venit la Turquoise",
        aboutP1: "Situat în inima localității Topraisar, Restaurantul Turquoise oferă un spațiu primitor unde calitatea ingredientelor întâlnește pasiunea pentru gastronomie.",
        aboutP2: "Fie că vă doriți un prânz rapid, o cină relaxantă alături de familie sau o seară memorabilă, atmosfera noastră elegantă și meniul diversificat vă vor încânta simțurile. De la preparate tradiționale savuroase, la opțiuni moderne și delicioase de grill și pizza, avem câte ceva pentru fiecare gust.",
        aboutF1: "Ingrediente proaspete și de calitate",
        aboutF2: "Atmosferă caldă și elegantă",
        aboutF3: "Spațiu generos și prietenos cu familiile",
        menuTitle: "Meniul Nostru",
        menuSubtitle: "Descoperă preparatele noastre alese, gătite cu pasiune.",
        catStarters: "Aperitive & Supe",
        catMain: "Fel Principal",
        catGrill: "Grill",
        catPizza: "Pizza",
        catDesserts: "Desert",
        catDrinks: "Băuturi",
        itemCocktail: "Cocktail Turquoise",
        itemCocktailDesc: "Rom, blue curacao, suc de ananas, sirop de cocos.",
        itemWine: "Vinul Casei (Carafă)",
        itemWineDesc: "Vin alb/roșu demisec din regiunea Dobrogea.",
        itemSoup: "CIORBĂ DE BURTĂ",
        itemSoupDesc: "Servită cu smântână, ardei iute și pâine caldă.",
        itemBruschetta: "Aperitive",
        itemBruschettaDesc: "Roșii, busuioc, prosciutto, somon afumat.",
        itemPasta: "Paste Carbonara",
        itemPastaDesc: "Pancetta, gălbenuș de ou, parmezan, piper negru.",
        itemSchnitzel: "Șnițel de Pui cu Piure",
        itemSchnitzelDesc: "Piept de pui crocant, piure de cartofi cremos, salată.",
        itemRibs: "Coaste de Porc BBQ",
        itemRibsDesc: "Coaste marinate la cuptor, cartofi prăjiți, sos BBQ.",
        itemMici: "Platou Tradițional (Mititei)",
        itemMiciDesc: "4 mititei, cartofi prăjiți, muștar, pâine.",
        itemPizzaTurquoise: "Pizza Turquoise",
        itemPizzaTurquoiseDesc: "Sos roșii, mozzarella, prosciutto, ciuperci, măsline.",
        itemPizzaDiavola: "Pizza Diavola",
        itemPizzaDiavolaDesc: "Sos roșii, mozzarella, salam picant, ardei iute.",
        itemPapanasi: "Papanași",
        itemPapanasiDesc: "Cu smântână și dulceață de afine sau vișine.",
        itemLavaCake: "Lava Cake",
        itemLavaCakeDesc: "Prăjitură de ciocolată caldă servită cu înghețată de vanilie.",
        btnSeeFullMenu: "Contactează-ne pentru meniul complet",
        galleryTitle: "Galeria Noastră",
        gallerySubtitle: "O privire în atmosfera și preparatele noastre.",
        reviewsTitle: "Ce spun clienții noștri",
        resTitle: "Rezervă masa ta astăzi",
        resSubtitle: "Perfect pentru cine în familie și seri speciale.",
        contactTitle: "Contact & Locație",
        contactAddressTitle: "Adresă",
        contactPhoneTitle: "Telefon",
        contactHoursTitle: "Program",
        dayLuni: "Luni",
        dayMarti: "Marți",
        dayMiercuri: "Miercuri",
        dayJoi: "Joi",
        dayVineri: "Vineri",
        daySambata: "Sâmbătă",
        dayDuminica: "Duminică",
        footerRights: "Toate drepturile rezervate.",
        barCall: "Sună",
        barReserve: "Rezervă"
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navMenu: "Menu",
        navGallery: "Gallery",
        navReviews: "Reviews",
        navContact: "Contact",
        btnReserve: "Reserve Table",
        btnCall: "CALL NOW",
        btnCallNow: "CALL NOW",
        heroTitle: "Authentic flavors and memorable dining",
        heroSubtitle: "Discover perfect taste in a premium atmosphere in Topraisar.",
        aboutTitle: "Welcome to Turquoise",
        aboutP1: "Located in the heart of Topraisar, Turquoise Restaurant offers a welcoming space where quality ingredients meet a passion for gastronomy.",
        aboutP2: "Whether you want a quick lunch, a relaxing dinner with family, or a memorable evening, our elegant atmosphere and diverse menu will delight your senses. From savory traditional dishes to modern grill options and delicious pizza, we have something for every taste.",
        aboutF1: "Fresh, high-quality ingredients",
        aboutF2: "Warm and elegant atmosphere",
        aboutF3: "Spacious and family-friendly environment",
        menuTitle: "Our Menu",
        menuSubtitle: "Discover our finest dishes, cooked with passion.",
        catStarters: "Starters & Soups",
        catMain: "Main Courses",
        catGrill: "Grill",
        catPizza: "Pizza",
        catDesserts: "Desserts",
        catDrinks: "Drinks",
        itemCocktail: "Turquoise Cocktail",
        itemCocktailDesc: "Rum, blue curacao, pineapple juice, coconut syrup.",
        itemWine: "House Wine (Carafe)",
        itemWineDesc: "White/red demi-dry wine from the Dobrogea region.",
        itemSoup: "TRIPE SOUP",
        itemSoupDesc: "Served with sour cream, hot pepper, and warm bread.",
        itemBruschetta: "Appetizers",
        itemBruschettaDesc: "Tomatoes, basil, prosciutto, smoked salmon.",
        itemPasta: "Pasta Carbonara",
        itemPastaDesc: "Pancetta, egg yolk, parmesan, black pepper.",
        itemSchnitzel: "Chicken Schnitzel & Mash",
        itemSchnitzelDesc: "Crispy chicken breast, creamy mashed potatoes, salad.",
        itemRibs: "BBQ Pork Ribs",
        itemRibsDesc: "Oven-marinated ribs, french fries, BBQ sauce.",
        itemMici: "Traditional Platter (Mici)",
        itemMiciDesc: "4 traditional skinless sausages, fries, mustard, bread.",
        itemPizzaTurquoise: "Pizza Turquoise",
        itemPizzaTurquoiseDesc: "Tomato sauce, mozzarella, prosciutto, mushrooms, olives.",
        itemPizzaDiavola: "Pizza Diavola",
        itemPizzaDiavolaDesc: "Tomato sauce, mozzarella, spicy salami, hot pepper.",
        itemPapanasi: "Papanași",
        itemPapanasiDesc: "Traditional fried dough with sour cream and blueberry/sour cherry jam.",
        itemLavaCake: "Lava Cake",
        itemLavaCakeDesc: "Warm chocolate cake served with vanilla ice cream.",
        btnSeeFullMenu: "Contact us for the full menu",
        galleryTitle: "Our Gallery",
        gallerySubtitle: "A glimpse into our atmosphere and dishes.",
        reviewsTitle: "What our clients say",
        resTitle: "Reserve your table today",
        resSubtitle: "Perfect for family dinners and special evenings.",
        contactTitle: "Contact & Location",
        contactAddressTitle: "Address",
        contactPhoneTitle: "Phone",
        contactHoursTitle: "Hours",
        dayLuni: "Monday",
        dayMarti: "Tuesday",
        dayMiercuri: "Wednesday",
        dayJoi: "Thursday",
        dayVineri: "Friday",
        daySambata: "Saturday",
        dayDuminica: "Sunday",
        footerRights: "All rights reserved.",
        barCall: "Call",
        barReserve: "Reserve"
    }
};

/* =========================================
   DOM ELEMENTS & EVENTS
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LANGUAGE SWITCHER ---
    const currentLang = localStorage.getItem('lang') || 'ro';
    setLanguage(currentLang);

    document.getElementById('lang-ro').addEventListener('click', () => setLanguage('ro'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // --- MOBILE MENU ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // --- STICKY NAVBAR ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- MENU TABS ---
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuPanes = document.querySelectorAll('.menu-pane');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs and panes
            menuTabs.forEach(t => t.classList.remove('active'));
            menuPanes.forEach(p => p.classList.remove('active'));

            // Add active to clicked tab and corresponding pane
            tab.classList.add('active');
            const target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // --- REVIEWS CAROUSEL ---
    const slides = document.querySelectorAll('.review-slide');
    const nextBtn = document.getElementById('nextReview');
    const prevBtn = document.getElementById('prevReview');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide++;
            showSlide(currentSlide);
        });
    
        prevBtn.addEventListener('click', () => {
            currentSlide--;
            showSlide(currentSlide);
        });
    
        // Auto slide
        setInterval(() => {
            currentSlide++;
            showSlide(currentSlide);
        }, 5000);
    }

    // --- SCROLL ANIMATIONS (Intersection Observer) ---
    const animElements = document.querySelectorAll('.scroll-anim');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animElements.forEach(el => observer.observe(el));
    
    // Hide mobile action bar when near footer to avoid overlap
    const mobileActionBar = document.querySelector('.mobile-action-bar');
    const footer = document.querySelector('.footer');
    
    if(mobileActionBar && footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    mobileActionBar.classList.add('hidden');
                } else {
                    mobileActionBar.classList.remove('hidden');
                }
            });
        }, { threshold: 0 });
        footerObserver.observe(footer);
    }
});

/* =========================================
   FUNCTIONS
   ========================================= */

// Language switcher function
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    
    // Update active class on buttons
    document.getElementById('lang-ro').classList.toggle('active', lang === 'ro');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    // Update text content
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Lightbox functions
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const imgSrc = element.querySelector('img').src;
    
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // enable scrolling
}

// Close lightbox on escape key or clicking outside
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// --- AI CHATBOT LOGIC ---
function toggleChat() {
    const widget = document.getElementById('chatbot-widget');
    widget.classList.toggle('active');
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    // Add user message
    addChatMessage(message, 'user-message');
    input.value = '';

    // Simulate AI thinking and response
    setTimeout(() => {
        const response = getBotResponse(message.toLowerCase());
        addChatMessage(response, 'bot-message');
    }, 600);
}

function addChatMessage(text, className) {
    const messagesContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(msg) {
    const lang = localStorage.getItem('lang') || 'ro';
    
    if (msg.includes('meniu') || msg.includes('menu') || msg.includes('mancare') || msg.includes('food')) {
        return lang === 'ro' ? "Avem un meniu diversificat cu preparate tradiționale, grill, pizza și deserturi. Îl poți vedea în secțiunea 'Meniu' de pe site!" : "We have a diverse menu with traditional dishes, grill, pizza, and desserts. You can view it in the 'Menu' section on our site!";
    }
    if (msg.includes('rezervare') || msg.includes('masa') || msg.includes('reserve') || msg.includes('table')) {
        return lang === 'ro' ? "Pentru rezervări te rugăm să ne suni la 0766 480 730 sau să ne trimiți un mesaj pe WhatsApp." : "For reservations, please call us at 0766 480 730 or send us a WhatsApp message.";
    }
    if (msg.includes('program') || msg.includes('ora') || msg.includes('hours') || msg.includes('open')) {
        return lang === 'ro' ? "Suntem deschiși în fiecare zi de la 9:30 AM la 10:00 PM." : "We are open every day from 9:30 AM to 10:00 PM.";
    }
    if (msg.includes('locatie') || msg.includes('adresa') || msg.includes('location') || msg.includes('address')) {
        return lang === 'ro' ? "Ne găsești la adresa: ȘOS NAȚIONALĂ 72A, Topraisar, Constanța." : "You can find us at: ȘOS NAȚIONALĂ 72A, Topraisar, Constanța.";
    }
    
    return lang === 'ro' ? "Vrei să afli mai multe? Te rugăm să ne contactezi la 0766 480 730 pentru detalii specifice." : "Want to know more? Please contact us at 0766 480 730 for specific details.";
}
