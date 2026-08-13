document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL ANIMATION
    ========================== */

    const animatedElements = document.querySelectorAll(
        ".section, .timeline-card, .skill-card, .education-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

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

    animatedElements.forEach((element) => {
        observer.observe(element);
    });


    /* =========================
       TOP BUTTON
    ========================== */

    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       NAVIGATION
    ========================== */

    const navLinks = document.querySelectorAll(".header nav a");

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       HERO BUTTON
    ========================== */

    const mainButton = document.querySelector(".main-button");

    if (mainButton) {

        mainButton.addEventListener("click", (event) => {

            const target = document.querySelector("#about");

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* =========================
       SKILL CARD HOVER
    ========================== */

    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.zIndex = "5";
        });

        card.addEventListener("mouseleave", () => {
            card.style.zIndex = "1";
        });

    });


    /* =========================
       YEAR
    ========================== */

    const yearElement = document.querySelector("footer p:last-child");

    if (yearElement) {
        yearElement.textContent = `© ${new Date().getFullYear()} 한재원`;
    }

});
