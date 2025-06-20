document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".typewriter-text");

    elements.forEach((el, idx) => {
        const text = el.getAttribute("data-text");
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            if (!isDeleting) {
                el.textContent = text.substring(0, charIndex) + '|';
                charIndex++;

                if (charIndex > text.length) {
                    isDeleting = true;
                    setTimeout(type, 2000); // chờ 2s trước khi xóa
                    return;
                }
            } else {
                el.textContent = text.substring(0, charIndex) + '|';
                charIndex--;

                if (charIndex < 0) {
                    isDeleting = false;
                    setTimeout(type, 1000); // chờ 1s trước khi gõ lại
                    return;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100);
        }

        // delay từng dòng một
        setTimeout(type, idx * 1000);
    });
});


/* Cuộn */
const faders = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // chỉ chạy 1 lần
        }
    });
}, {
    threshold: 0.2
});

faders.forEach(el => observer.observe(el));
/*Ky nang*/
function animateSkillBars() {
    const fills = document.querySelectorAll('.skill-fill');

    fills.forEach(fill => {
        const percentStr = fill.getAttribute('data-percent');
        const percent = parseInt(percentStr);
        const span = fill.nextElementSibling;

        // Reset về 0%
        fill.style.transition = 'none'; // bỏ transition tạm thời
        fill.style.width = '0%';
        span.textContent = '0%';

        // Kích hoạt reflow để đảm bảo trình duyệt nhận thay đổi
        void fill.offsetWidth;

        // Thêm transition trở lại
        fill.style.transition = 'width 2s ease';

        // Sau 300ms, animate lên lại
        setTimeout(() => {
            fill.style.width = percentStr;

            // Đếm phần trăm từ 0 lên đến đúng số
            let count = 0;
            const interval = setInterval(() => {
                if (count >= percent) {
                    clearInterval(interval);
                    span.textContent = percentStr;
                } else {
                    count++;
                    span.textContent = count + '%';
                }
            }, 20);
        }, 300); // delay nhỏ cho hiệu ứng mượt
    });
}

// Chạy ban đầu
animateSkillBars();

// Chạy lại sau mỗi 30s
setInterval(animateSkillBars, 5000);