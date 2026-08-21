document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

        });

    });


    /* =========================
       MOUSE PARALLAX PHOTO
    ========================= */

    const photo = document.querySelector(".photo-card");

    if (photo && window.innerWidth > 900) {

        document.addEventListener("mousemove", (event) => {

            const x = (window.innerWidth / 2 - event.clientX) / 70;
            const y = (window.innerHeight / 2 - event.clientY) / 70;

            photo.style.transform =
                `rotate(2deg) translate(${x}px, ${y}px)`;

        });

    }

});
