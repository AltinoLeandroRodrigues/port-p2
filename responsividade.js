 

function clicar() {
    var botao = document.getElementById("button")
    let menuMobile = document.querySelector('.nav-list');
  
    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active')
    } else {
        menuMobile.classList.add('active')
    }
}
