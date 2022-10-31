const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const naviLinks = document.querySelectorAll(".navLinks li");


    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active")
        naviLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
        
        // burger animation
        burger.classList.toggle(`toggle`);
    });



}


navSlide();


