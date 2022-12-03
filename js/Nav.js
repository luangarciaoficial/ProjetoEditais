let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '10px',
    duration: 2600,
    reset: true
})

/*index*/
sr.reveal('.home-text', {delay:300, origin:'left'})
sr.reveal('.card', {delay:500, origin:'bottom'})
sr.reveal('.social_icon', {delay:300, origin:'bottom'})
sr.reveal('.menu_footer', {delay:500, origin:'bottom'})
sr.reveal('footer p', {delay:700, origin:'bottom'})

/*login*/
sr.reveal('.box_login', {delay:500, origin:'left'})

sr.reveal('#efeito_register', {delay:500, origin:'left'})

