// barre de navigation changement de couleur***page accueil***
const navigation = document.querySelector('#navBg');

window.addEventListener('scroll', () => {
    // scroll Y 30 : si on a scrollé de 30 px depuis le haut
    if (window.scrollY > 30 && window.scrollY < 800) {
        navigation.classList.add("anim-navBg");
        navigation.classList.remove("anim-navBgYellow");
        navigation.classList.remove("anim-navBgPink");

        console.log('ok');
    } else if (window.scrollY > 800 && window.scrollY < 1600) {
        //si on a pas scroller jusque 800px
        navigation.classList.remove("anim-navBg");
        navigation.classList.remove("anim-navBgPink");

        navigation.classList.add("anim-navBgYellow");

    } else if (window.scrollY > 1600) {
        //si on a pas scroller jusque 1600px
        navigation.classList.add("anim-navBgPink");
        navigation.classList.remove("anim-navBgYellow");
        navigation.classList.remove("anim-navBg");


    } else {
        navigation.classList.remove("anim-navBgPink");
        navigation.classList.remove("anim-navBgYellow");
        navigation.classList.remove("anim-navBg");
    }
})