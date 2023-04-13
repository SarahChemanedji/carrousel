<?php

/**
 * Plugin Name: Carrsousel
 * Author: Sarah Chemanedji
 * Author uri: https://github.com/SarahChemanedji
 * Description: Permet d'afficher les images d'une galerie dans une boite navigateur 
 * 
 */

/* style.css formater et animer le carrousel */
/*carrousel.js controler le carousel*/
/* boite modale qui contiendra le carousel */

// filemtime() // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path() // retourne le chemin du répertoire du plugin
// __FILE__ // une constante contenant le chemin du fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook qui permettra d'enfiler le css et le script


    function enfiler_script_css()
    {

        $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
        $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel.js');
            wp_enqueue_style('style_carrousel',
            plugin_dir_url(__FILE__) . 'style.css',
            array(),
            $version_css
            );
            wp_enqueue_script('js/carrousel',
            plugin_dir_url(__FILE__) . 'js/carrousel.js',
            array(),
            $version_js,
            true
            );
    }

    add_action('wp_enqueue_scripts','enfiler_script_css');


    function generer_boite()
    {
        return ' <button class="carrousel__ouvrir">Ouvrir Carousel</button>
        <div class="carrousel">
            <button class="carrousel__x">X</button>
            <figure class="carrousel__figure"></figure>
            <form class="carrousel__form"></form> 
        </div>';
    }
    add_shortcode('carrousel', 'generer_boite');
