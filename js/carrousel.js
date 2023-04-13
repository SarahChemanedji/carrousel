(function(){
    console.log('début carrousel')
    //Pour le bouton
    let boutcarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');

    //Variable
    let carrousel = document.querySelector('.carrousel');
    let carrousel__x = document.querySelector('.carrousel__x');
    let galerie = document.querySelector(".galerie");
    let galerie__img = galerie.querySelectorAll("img");
    // console.log (galerie__img.length)


    boutcarrousel__ouvrir.addEventListener('mousedown',function(){
        carrousel.classList.add('carrousel--ouvrir')
        ajouter_img_dans_carrousel();
    })
    carrousel__x.addEventListener('mousedown',function(){
        carrousel.classList.remove('carrousel--ouvrir')

    })
/**
 * 
 * Ajouter_img_dans_carrousele
 * Ajouter l'ensemble des images de la galerie dans la boite mondale carrouse;
 * 
 */
function ajouter_img_dans_carrousel(){
    for (const elm of galerie__img){
        //console.log(elm.getAttribute('src'))
        let img =document.createElement('img');
        img.setAttribute('src',elm.getAttribute('src') )
        console.log(img.getAttribute('src'))
    }
}


})()