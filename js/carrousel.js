(function(){
  console.log('Début du carrousel')
 let bouton = document.querySelector(".carrousel__ouvrir")
 /* -------------------------------------------------------- Variable du carrousel */
 let carrousel  = document.querySelector(".carrousel")
 let carrousel__x = document.querySelector(".carrousel__x")
 let carrousel__figure = document.querySelector(".carrousel__figure")
 let carrousel__form = document.querySelector(".carrousel__form")
 console.log(carrousel__form.tagName)
 /* -------------------------------------------------------- Variable de la galerie */
 let galerie = document.querySelector(".wp-block-gallery")
 let galerie__img = galerie.querySelectorAll("img")
 // console.log("galerie__img: " + galerie__img.length)
 // console.log(carrousel.tagName)
 /* ------------------------------------------ positionnement de l'image active du carrousel */
 let index = 0
 let ancien_index = -1
 let position = 0 // permet d'indexer les image de la galerie et 

let flechDroite = document.querySelector(".flechDroite")
let flechGauche = document.querySelector(".flechGauche")
//------------------------Ouvrir boite modele avec galerie----------//
 for (const elm of galerie__img)
 {
   elm.dataset.index = position
   elm.addEventListener('mousedown',function(){
    if(carrousel.classList.contains('carousel--activer')==false){
      carrousel.classList.add('carrousel--activer')
      
    }
     index = this.dataset.index
     afficher_image(index)
     console.log(index)
   })

   creation_img_carrousel(elm)
   creation_radio_carrousel()
 }

 /* ----------------------------------------------------  ouvrir boîte modale */
//  galerie.addEventListener('click', function(){
//      console.log('ouvrir la boîte modale')
//      carrousel.classList.add('carrousel--activer')
//      ajouter_img_dans_carrousel()
 
//  })
 /* ----------------------------------------------------  fermer boîte modale */
 carrousel__x.addEventListener('mousedown', function(){
     console.log('fermer la boîte modale')
     carrousel.classList.remove('carrousel--activer')
 
 })
 
 
 flechDroite.addEventListener('mousedown',function(){
  if(index == galerie__img.length-1){
    index = 0 ;
  }
  else{
    index++;
  }
  afficher_image(index);

 })
 flechGauche.addEventListener('mousedown',function(){
  if(index == 0 ){
    index = galerie__img.length-1;  
  }
  else{
    index--;
  }
  
  afficher_image(index);

 })


 
 /** 
  * ajouter_img_dans_carrousel
  * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
  */
//  function ajouter_img_dans_carrousel()
//  {

//  }
 
 function creation_img_carrousel(elm){
       //console.log(elm.getAttribute('src'))
       let img = document.createElement('img')
       // img.setAttribute('src', elm.getAttribute('src'))
        img.src = elm.src
        img.classList.add('carrousel__img')
        //console.log (img.getAttribute('src'))
        carrousel__figure.appendChild(img)
 }
 /**
  * Création d'un radio-bouton
  */
 
 
 function  creation_radio_carrousel(){
   let rad = document.createElement('input')
   console.log(rad.tagName)
   rad.setAttribute('type','radio')
   rad.setAttribute('name', 'carrousel__rad')
   rad.classList.add('carrousel__rad')
   rad.dataset.index = position
   position = position + 1 // incrémentation de 1
   // position += 1
   // position++
   carrousel__form.appendChild(rad)
   rad.addEventListener('mousedown', function(){
     console.log(this.dataset.index)
     index = this.dataset.index
     afficher_image(index)
   })
 }
 
 function afficher_image(index){
 
   if (ancien_index != -1){
    // carrousel__figure.children[ancien_index].style.opacity = 0  
    carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
    carrousel__form.children[ancien_index].checked = false; 
   }
   // carrousel__figure.children[index].style.opacity = 1
   carrousel__figure.children[index].classList.add('carrousel__img--activer')
   carrousel__form.children[index].checked = true; 
   ancien_index = index
 }
 
 /**
  * Permet de verifier si la class  "carrousel--active" se trouve dans la liste des class carrousel
  * carrousel.classList.contain('carousel--activer');
  * carrousel.classList.remove('carousel--activer')
  * 
  * mdn classList.contain()
  */
 
 })()
 