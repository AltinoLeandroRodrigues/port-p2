 

function clicar(){
    let pagina = document.getElementById('navList')
    let btn = document.getElementById('button')
    let btn1 = document.getElementById('button1')

    pagina.style.transform="translateX(0)"
    btn.style.display="none";
    btn1.style.display="flex";
    
}
function fechar(){
    let pagina = document.getElementById('navList')
    let btn = document.getElementById('button')
    let btn1 = document.getElementById('button1')

    pagina.style.transform="translateX(100%)"
    btn.style.display="block";
    btn1.style.display="none";
    
}
