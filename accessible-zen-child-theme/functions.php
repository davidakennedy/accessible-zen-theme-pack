<?php
/**
 * accessiblezenchildtheme functions and definitions
 *
 * @package accessiblezenchildtheme
 * @since accessiblezenchildtheme 1.0
 *
 * Child themes are awesome! Read more here: http://codex.wordpress.org/Child_Themes
 */
 
 /* The function below simply drops a link to a favicon in the head of your pages.
  * Learn more about favicons here: https://en.wikipedia.org/wiki/Favicon
  * You can remove it too!
  */
 
 function azct_favicon_link() {
    echo '<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />' . "\n";
}

add_action( 'wp_head', 'azct_favicon_link' );

/* After this. you can override Accessible Zen's pluggable functions or add your own.
 * Remember, do your best to stay accessible! :)
 *
 */