const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links li")

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // animate nav links
        navLinks.forEach((link,index) => {
            link.style.animation =  `navFadeIn .5s ease forwards ${index / 7 + .3}s`
        })
    });
}

navSlide(); 