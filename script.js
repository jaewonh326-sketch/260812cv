document.addEventListener("DOMContentLoaded", () => {

    /* 헤더 스크롤 효과 */
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });


    /* 스크롤 등장 효과 */
    const elements = document.querySelectorAll(
        ".section-header, .about-main, .about-side, " +
        ".timeline-item, .education-item, .skill-card, .contact-box"
    );

    elements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach(element => {
        observer.observe(element);
    });


    /* 네비게이션 현재 위치 표시 */
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.style.fontWeight = "400";

            if (link.getAttribute("href") === "#" + current) {
                link.style.fontWeight = "600";
            }

        });

    });

});
