/**
 * 1. 스크롤 시 네비게이션 스타일 변경
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 10%';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '20px 10%';
        navbar.style.boxShadow = 'none';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

/**
 * 2. 섹션 나타나기 애니메이션 (Intersection Observer API)
 */
const observerOptions = {
    threshold: 0.1 // 섹션의 10%가 보일 때 실행
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 보이기 시작하면 스타일 변경
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 감시 대상 등록 (모든 section 태그)
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});