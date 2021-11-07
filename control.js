const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links li")

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        // animate nav links
    });
}

navSlide(); 