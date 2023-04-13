(function(){
    console.log('Debut du carrousel');
    let btnCarrousel__ouvrir = document.querySelector('.carrousel_ouvrir');
    let carrousel = document.querySelector('.carrousel');
    btnCarrousel__ouvrir.addEventListener('mousedown', function(){
        carrousel.classList.add('carrousel--ouvrir');
    })
})()