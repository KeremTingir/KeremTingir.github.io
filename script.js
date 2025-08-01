// Project data for modal content
const projectData = {
    project1: {
        title: "Final Project: Banknote Recognition and Serial Number Extraction",
        summary: "Artificial intelligence-powered banknote recognition system and serial number extraction application. This project uses the YOLO algorithm to detect banknotes and OCR technology to extract serial numbers. The mobile application, developed in Kotlin, is integrated with Firebase. The project demonstrates high performance in terms of security and accuracy.",
        technologies: ["YOLO", "OCR", "Kotlin", "Firebase", "Computer Vision", "Mobile Development"],
        image: "images/banknote-recognition.jpg",
        video: "videos/banknote-recognition-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project2: {
        title: "YouTube Video Downloader",
        summary: "Web-based YouTube video download application. Developed using the Python Flask framework, this project allows users to download videos in different qualities by entering YouTube links. The yt-dlp library is used to perform secure and fast downloads.",
        technologies: ["Python", "Flask", "yt-dlp", "HTML/CSS", "JavaScript", "Web Development"],
        image: "images/youtube-downloader.jpg",
        video: "videos/youtube-downloader-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project3: {
        title: "Restaurant Order Tracking System",
        summary: "A comprehensive system that manages and tracks restaurant orders. The backend API, developed with Python, stores order data in an SQLite database, and order tracking is performed using a mobile application developed with Kotlin. The system includes features for order creation, status tracking, inventory management, and reporting. It is designed to increase the operational efficiency of restaurant businesses.",
        technologies: ["Python", "SQLite", "Kotlin", "Mobile Development", "Database Management", "API Development"],
        image: "images/restaurant-order-system.jpg",
        video: "videos/restaurant-order-system-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project4: {
        title: "2025 Teknofest Unmanned Aerial Vehicle Competition",
        summary: "Autonomous flight software and mobile application for drone control system. The mobile application developed with Flutter enables autonomous flight control of the drone. A comprehensive drone control system developed using GPS, sensor data, and computer vision technologies. Designed for use in the Teknofest competition.",
        technologies: ["Autonomous Flight", "Mobile App", "Flutter", "Drone Control", "GPS", "Computer Vision", "Mavlink", "TCP Protocol"],
        image: "images/drone-competition.jpg",
        video: "videos/drone-competition-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project5: {
        title: "2024 Teknofest İnsansız Deniz Altı Yarışması",
        summary: "Su altı robotik sistemleri ve otonom navigasyon teknolojileri ile geliştirilmiş kapsamlı proje. Bu proje, su altı ortamında çalışabilen robotik sistemlerin tasarımı, geliştirilmesi ve kontrolü üzerine odaklanmıştır. Computer vision teknolojileri kullanılarak su altı nesnelerinin tespiti ve tanınması, otonom navigasyon algoritmaları ile rota planlaması ve gerçek zamanlı veri işleme özellikleri içermektedir. Teknofest yarışmasında kullanılmış ve su altı robotik teknolojilerinde öncü çözümler sunmuştur.",
        technologies: ["Robotics", "Computer Vision", "Autonomous Navigation", "Python", "OpenCV", "Sensor Integration", "Real-time Processing"],
        image: "images/underwater-competition.jpg",
        video: "videos/underwater-competition-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project6: {
        title: "Geri Dönüşüm Malzemesi Sınıflandırma Projesi",
        summary: "Yapay zeka destekli geri dönüşüm malzemelerini otomatik sınıflandırma sistemi. Bu proje, convolutional neural networks (CNN) kullanarak farklı geri dönüşüm malzemelerini (plastik, cam, kağıt, metal vb.) otomatik olarak tanımlar ve sınıflandırır. TensorFlow framework'ü kullanılarak geliştirilmiş derin öğrenme modeli, yüksek doğruluk oranı ile malzeme türlerini tespit eder. Sistem, geri dönüşüm süreçlerinin otomasyonu ve verimliliğinin artırılması amacıyla tasarlanmıştır. Çevre dostu teknolojilerin geliştirilmesine katkı sağlayan önemli bir projedir.",
        technologies: ["Machine Learning", "CNN", "TensorFlow", "Computer Vision", "Image Classification", "Deep Learning", "Python"],
        image: "images/recycling-classification.jpg",
        video: "videos/recycling-classification-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    },
    project7: {
        title: "Bilgisayarlı Görü Örnek Uygulamaları",
        summary: "Computer vision teknolojilerini gösteren çeşitli örnek uygulamalar koleksiyonu. Bu proje, OpenCV kütüphanesi kullanılarak geliştirilmiş farklı computer vision uygulamalarını içerir. Yüz tanıma, nesne tespiti, hareket analizi, renk filtreleme, kenar tespiti gibi temel computer vision algoritmalarının pratik uygulamalarını gösterir. Her uygulama, gerçek zamanlı görüntü işleme özelliklerine sahiptir ve kullanıcıların computer vision teknolojilerini öğrenmesi ve deneyimlemesi için tasarlanmıştır. Eğitim amaçlı olarak da kullanılabilen kapsamlı bir proje koleksiyonudur.",
        technologies: ["OpenCV", "Image Processing", "Python", "Real-time Detection", "Face Recognition", "Object Detection", "Computer Vision"],
        image: "images/computer-vision-apps.jpg",
        video: "videos/computer-vision-apps-demo.mp4",
        github: "https://github.com/KeremTingir/",
        demo: "-"
    }
};

// DOM elements
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-list a');

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project modal functionality
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            modalContent.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="modal-project-image">
                <h2 class="modal-project-title">${project.title}</h2>
                <p class="modal-project-summary">${project.summary}</p>
                <div class="modal-project-tech">
                    ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="modal-project-links">
                    <a href="${project.github}" target="_blank">
                        <i class="fab fa-github"></i>
                        View on GitHub
                    </a>
                    <button class="demo-video-btn" onclick="playDemoVideo('${project.video}', '${project.title}')">
                        <i class="fas fa-play"></i>
                        Watch Demo Video
                    </button>
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit form to Formspree
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll to top functionality
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide scroll to top button
    let scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollTop > 300) {
        if (!scrollToTopBtn) {
            scrollToTopBtn = document.createElement('button');
            scrollToTopBtn.className = 'scroll-to-top';
            scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollToTopBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: linear-gradient(135deg, #64b5f6, #2196f3);
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                z-index: 1000;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(100, 181, 246, 0.3);
            `;
            
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            scrollToTopBtn.addEventListener('mouseenter', () => {
                scrollToTopBtn.style.transform = 'translateY(-3px)';
                scrollToTopBtn.style.boxShadow = '0 8px 25px rgba(100, 181, 246, 0.4)';
            });
            
            scrollToTopBtn.addEventListener('mouseleave', () => {
                scrollToTopBtn.style.transform = 'translateY(0)';
                scrollToTopBtn.style.boxShadow = '0 4px 12px rgba(100, 181, 246, 0.3)';
            });
            
            document.body.appendChild(scrollToTopBtn);
        }
    } else if (scrollToTopBtn) {
        scrollToTopBtn.remove();
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Typing effect for the tagline
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        typeWriter(tagline, originalText, 50);
    }
});

// Add hover effects for skill tags
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) translateY(0)';
        });
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Video player functionality
function playDemoVideo(videoPath, projectTitle) {
    // Remove existing video player if any
    const existingVideoPlayer = document.getElementById('videoPlayer');
    if (existingVideoPlayer) {
        existingVideoPlayer.remove();
    }
    
    // Create video player modal
    const videoModal = document.createElement('div');
    videoModal.id = 'videoPlayer';
    videoModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // Create video container
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        width: 800px;
        height: 450px;
        background: #000;
        border-radius: 8px;
        overflow: hidden;
    `;
    
    // Create video element
    const video = document.createElement('video');
    video.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
    `;
    video.controls = true;
    video.autoplay = true;
    
    // Create video source
    const source = document.createElement('source');
    source.src = videoPath;
    source.type = 'video/mp4';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Create title
    const title = document.createElement('h3');
    title.textContent = projectTitle;
    title.style.cssText = `
        position: absolute;
        top: -60px;
        left: 0;
        color: white;
        margin: 0;
        font-size: 18px;
        font-weight: 500;
    `;
    
    // Add error handling
    video.addEventListener('error', () => {
        showNotification('Video file not found. Please check if the video file exists.', 'error');
        videoModal.remove();
    });
    
    // Close video player
    const closeVideoPlayer = () => {
        video.pause();
        videoModal.remove();
    };
    
    closeBtn.addEventListener('click', closeVideoPlayer);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeVideoPlayer();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('videoPlayer')) {
            closeVideoPlayer();
        }
    });
    
    // Add animation styles
    const videoStyle = document.createElement('style');
    videoStyle.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
                 .demo-video-btn {
             background: linear-gradient(135deg, #4caf50, #45a049) !important;
             color: white !important;
             border: none !important;
             padding: 10px 20px !important;
             border-radius: 6px !important;
             cursor: pointer !important;
             font-size: 14px !important;
             display: inline-flex !important;
             align-items: center !important;
             gap: 8px !important;
             transition: all 0.3s ease !important;
             text-decoration: none !important;
             box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2) !important;
         }
         
         .demo-video-btn:hover {
             transform: translateY(-2px) !important;
             box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4) !important;
             background: linear-gradient(135deg, #45a049, #388e3c) !important;
         }
         
         .demo-video-btn:active {
             transform: translateY(0) !important;
             box-shadow: 0 2px 4px rgba(76, 175, 80, 0.3) !important;
         }
         
         .demo-video-btn i {
             font-size: 16px !important;
         }
    `;
    document.head.appendChild(videoStyle);
    
    // Assemble video player
    video.appendChild(source);
    videoContainer.appendChild(video);
    videoContainer.appendChild(closeBtn);
    videoContainer.appendChild(title);
    videoModal.appendChild(videoContainer);
    document.body.appendChild(videoModal);
}

// Add CSS for active navigation state
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
    .nav-list a.active {
        color: #64b5f6 !important;
    }
    
    .nav-list a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeNavStyle); 