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
document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".skill-bar");

    bars.forEach((bar) => {
        const fill = bar.querySelector(".skill-fill");
        const percent = bar.querySelector(".skill-percent");
        const value = parseInt(fill.style.getPropertyValue("--skill-percent"));

        let current = 0;
        const duration = 2000; // 2s
        const interval = 10; // ms
        const step = (value * interval) / duration;

        const counter = setInterval(() => {
            current += step;
            if (current >= value) {
                current = value;
                clearInterval(counter);
            }
            percent.textContent = Math.round(current) + "%";
        }, interval);
    });
});