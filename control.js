const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links li")


    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        hamburger.classList.toggle("is-active");
        // animate nav links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ""
            }else{
            link.style.animation =  `navFadeIn .5s ease forwards ${index / 7 + .3}s`
            }
        })

    });

    window.addEventListener("resize", () =>{
        if(window.innerWidth >= 768){
            nav.classList.remove("nav-active");
            hamburger.classList.remove("is-active");
            navLinks.forEach(link => {
                link.style.animation = ""
            })
        }
    })
}

navSlide(); 