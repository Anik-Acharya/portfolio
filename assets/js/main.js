/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link')
    
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title',{})
sr.reveal('.home__scroll',{delay: 200})
sr.reveal('.home__img',{origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img',{delay: 500})
sr.reveal('.about__subtitle',{delay: 300})
sr.reveal('.about__text',{delay: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200})
