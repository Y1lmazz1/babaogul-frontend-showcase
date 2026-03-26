// --- 0. INTRO ANIMASYONU (Siyah Arka Plan) KONTROLÜ ---
const introOverlay = document.querySelector('.intro-overlay');

if (introOverlay) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            introOverlay.style.opacity = '0'; // Kaybolma efekti başlat
            setTimeout(() => {
                introOverlay.style.display = 'none'; // Tamamen gizle
            }, 1000); // Transition süresi kadar bekle
        }, 3000); // Intro'nun ekranda kalma süresi (3 saniye)
    });
}

// --- 1. HAKKIMIZDA SLIDER (Üst Kısım) ---
let currentAboutSlide = 0;
const aboutSlides = document.querySelectorAll('.slide');

function showAboutSlide(index) {
    if (aboutSlides.length === 0) return;
    aboutSlides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= aboutSlides.length) { currentAboutSlide = 0; }
    else if (index < 0) { currentAboutSlide = aboutSlides.length - 1; }
    else { currentAboutSlide = index; }
    
    aboutSlides[currentAboutSlide].classList.add('active');
}

function changeSlide(direction) {
    showAboutSlide(currentAboutSlide + direction);
}

// Otomatik akış (5 saniyede bir)
setInterval(() => {
    changeSlide(1);
}, 5000);


// --- 2. NELER YAPTIK GALERİ (Alt Kısım - Carousel) ---
const carouselSlide = document.getElementById('carouselSlide');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let galleryCounter = 0;
let itemSize;

function calculateGallerySize() {
    if (galleryItems.length > 0) {
        // Gap (20px) dahil gerçek genişliği hesaplar
        itemSize = galleryItems[0].getBoundingClientRect().width + 20; 
    }
}

function moveGallery() {
    // Sona gelince başa dönme (Görünen 3 kart olduğu varsayımıyla)
    let maxMove = window.innerWidth < 768 ? galleryItems.length - 1 : galleryItems.length - 3;
    
    if (galleryCounter >= maxMove) { 
        galleryCounter = 0; 
    } else {
        galleryCounter++;
    }
    carouselSlide.style.transform = `translateX(${-itemSize * galleryCounter}px)`;
}

// İlk hesaplama ve ekran boyutu değişince güncelleme
calculateGallerySize();
window.addEventListener('resize', () => {
    calculateGallerySize();
    carouselSlide.style.transform = `translateX(${-itemSize * galleryCounter}px)`;
});

// Galeri Otomatik Akış (4 saniyede bir)
let galleryInterval = setInterval(moveGallery, 4000);

// Manuel Kontroller
nextBtn.addEventListener('click', () => {
    clearInterval(galleryInterval);
    moveGallery();
});

prevBtn.addEventListener('click', () => {
    clearInterval(galleryInterval);
    if (galleryCounter <= 0) { 
        galleryCounter = galleryItems.length - 3; 
    } else {
        galleryCounter--;
    }
    carouselSlide.style.transform = `translateX(${-itemSize * galleryCounter}px)`;
});


// --- 3. GALERİ VE BA FOTOĞRAF BÜYÜTME (Gelişmiş Lightbox) ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
// Hem galeri hem de BA resimlerini seçer
const allImages = document.querySelectorAll('.gallery-item img, .img-wrapper img');

allImages.forEach(img => {
    img.style.cursor = 'pointer'; // Tıklanabilir olduğunu belli et
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src; 
        document.body.style.overflow = 'hidden'; 
    });
});

// Kapatma: Siyah alana veya çarpıya basınca
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) { 
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; 
    }
});

// --- 4. NAVBAR SCROLL EFEKTİ ---
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#121212';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.padding = '20px 0';
    }
});
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (elementTop < triggerPoint) {
            el.classList.add("active");
        }
    });
};

// Sayfa yüklendiğinde ilk görünür olanları aç
window.addEventListener("load", revealOnScroll);
// Kaydırdıkça diğerlerini aç
window.addEventListener("scroll", revealOnScroll);
const baContainers = document.querySelectorAll('.ba-image-wrapper');

baContainers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
        let rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let width = rect.width;
        
        if (x < 0) x = 0;
        if (x > width) x = width;

        let percentage = (x / width) * 100;
        
        container.querySelector('.img-before-overlay').style.width = percentage + '%';
        container.querySelector('.ba-slider-bar').style.left = percentage + '%';
    });

    // Mobil için dokunmatik desteği
    container.addEventListener('touchmove', (e) => {
        let rect = container.getBoundingClientRect();
        let x = e.touches[0].clientX - rect.left;
        let width = rect.width;
        
        if (x < 0) x = 0;
        if (x > width) x = width;

        let percentage = (x / width) * 100;
        
        container.querySelector('.img-before-overlay').style.width = percentage + '%';
        container.querySelector('.ba-slider-bar').style.left = percentage + '%';
    });
});
// Sayfa yüklendikten 3 saniye sonra popup'ı aç
window.addEventListener('load', function() {
    setTimeout(function() {
        const popup = document.getElementById('sale-popup');
        if(popup) {
            popup.style.display = 'flex';
        }
    }, 3000);
});

// Kapatma Fonksiyonları
document.addEventListener('click', function(e) {
    const popup = document.getElementById('sale-popup');
    
    // 1. X butonuna basıldığında
    if (e.target.classList.contains('close-popup')) {
        popup.style.display = 'none';
    }
    
    // 2. Popup'ın dışındaki siyah alana basıldığında
    if (e.target === popup) {
        popup.style.display = 'none';
    }
    
    // 3. "Hemen İncele" butonuna basıldığında (Sayfaya yönlendirip kapatır)
    if (e.target.id === 'go-to-sales') {
        popup.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = menuToggle.querySelector('i');

    // Menü açma/kapama işlemi
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // İkon değiştirme (Üç çizgiden X'e)
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.replace('fa-bars', 'fa-times');
        } else {
            menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Herhangi bir linke tıklandığında menüyü otomatik kapat
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuIcon.classList.replace('fa-times', 'fa-bars');
        });
    });
});
    
