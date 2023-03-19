//Change Navbar Styles On Scroll

    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
        ('window-scroll',window.scrollY > 0)
    })

//Show/Hide Faq Answer

    function xp(article) {
        let trg = article;
        const icon = trg.querySelector(".faq_icon i");
        let state = trg.classList.contains("open");

        if (state == false) {
            trg.classList.add("open");
        
            if (icon.classList.contains("fa-plus")) {
                icon.classList.replace("fa-plus", "fa-minus");
            }   else {
                icon.classList.replace("fa-minus", "fa-plus");
            }
        }   else {
            trg.classList.remove("open");
            icon.classList.replace("fa-minus", "fa-plus");
            
        }
    }

// Open/Close NavBar Button

    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener('click', () => {
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    })
    const closeNav = () => {
        menu.style.display = "none";
        closeBtn.style.display = "none";
        menuBtn.style.display = "inline-block";
    }
    closeBtn.addEventListener('click', closeNav) 
