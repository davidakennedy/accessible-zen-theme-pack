<?php
/**
 * accessiblezentopmenu functions and definitions
 *
 * @package accessiblezentopmenu
 * @since accessiblezentopmenu 1.0
 *
 * Child themes are awesome! Read more here: http://codex.wordpress.org/Child_Themes
 */
 
 /* The function below simply adds our keyboard accessible dropdown menu
 * JavaScript file to the footer of the theme.
 */
 
function aztopmenu_scripts_styles() {
        
    wp_enqueue_script( 'keyboard-dropdown-menu-navigation', get_stylesheet_directory_uri() . '/js/keyboard-dropdown-menu-navigation.js', array( 'jquery' ), '20131101', true );
}

add_action( 'wp_enqueue_scripts', 'aztopmenu_scripts_styles' );