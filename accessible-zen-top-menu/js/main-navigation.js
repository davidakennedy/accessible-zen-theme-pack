/**
 * Adds and remove a class to a list of links to allow keyboard accessibility on main-navigation,
 * Based on the work of Amy Hendrix, Graham Armfield and Blake Haswell.
 * See: http://wordpress.org/plugins/accessible-dropdown-menus/
 */

jQuery( document ).ready( function( $ ) {
 	$( '.main-navigation' ).find( 'a' ).on( 'focus blur', function() {
 		$( this ).parents().toggleClass( 'focus' );
 	} );
} );

/**
 * Handles toggling the navigation menu for small screens.
 */

( function() {
        var container, button, menu;

        container = document.getElementById( 'main-navigation' );
        if ( ! container )
                return;

        button = container.getElementsByTagName( 'h1' )[0];
        if ( 'undefined' === typeof button )
                return;

        menu = container.getElementsByTagName( 'ul' )[0];

        // Hide menu toggle button if menu is empty and return early.
        if ( 'undefined' === typeof menu ) {
                button.style.display = 'none';
                return;
        }

        if ( -1 === menu.className.indexOf( 'nav-menu' ) )
                menu.className += ' nav-menu';

        button.onclick = function() {
                if ( -1 !== container.className.indexOf( 'toggled' ) )
                        container.className = container.className.replace( ' toggled', '' );
                else
                        container.className += ' toggled';
        };
} )();