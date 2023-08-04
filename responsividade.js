 

function clicar() {
    let menuMobile = document.querySelector('.nav-list');
     

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')

    } else {
        menuMobile.classList.add('open')
    }
}
