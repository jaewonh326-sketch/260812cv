document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================== */

    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const hiddenElements = document.querySelectorAll(".hidden");


    /* =========================
       NAVBAR SCROLL EFFECT
    ========================== */

    function updateNavbar() {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    hiddenElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================
       NAVIGATION SMOOTH SCROLL
    ========================== */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbarHeight =
                navbar.offsetHeight;

            const targetPosition =
                target.offsetTop - navbarHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================== */

    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute("id");

                        navLinks.forEach(link => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${currentId}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px",

                threshold: 0
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =========================
       HERO INITIAL ANIMATION
    ========================== */

    const hero =
        document.querySelector(".hero");


    if (hero) {

        setTimeout(() => {

            hero.classList.add("show");

        }, 200);

    }


    /* =========================
       HERO PHOTO EFFECT
    ========================== */

    const profileImage =
        document.querySelector(".hero-photo img");


    if (profileImage) {

        profileImage.addEventListener(
            "mouseenter",
            () => {

                profileImage.style.transform =
                    "scale(1.02)";

            }
        );


        profileImage.addEventListener(
            "mouseleave",
            () => {

                profileImage.style.transform =
                    "scale(1)";

            }
        );

    }


    /* =========================
       SKILL TAG INTERACTION
    ========================== */

    const tags =
        document.querySelectorAll(".tag");


    tags.forEach(tag => {

        tag.addEventListener(
            "mouseenter",
            () => {

                tag.style.cursor =
                    "default";

            }
        );

    });


    /* =========================
       CURRENT YEAR
    ========================== */

    const footerText =
        document.querySelector("footer p");


    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.textContent =
            `© ${currentYear} 한재원. All rights reserved.`;

    }


    /* =========================
       EXTERNAL LINKS
    ========================== */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =========================
       PAGE LOAD
    ========================== */

    document.body.classList.add("loaded");

});
