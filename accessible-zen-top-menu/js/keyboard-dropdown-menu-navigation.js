/**
 * Adds and remove a class to a list of links to allow keyboard accessibility,
 * Based on the work of Amy Hendrix, Graham Armfield and Blake Haswell.
 * See: http://wordpress.org/plugins/accessible-dropdown-menus/
 */

jQuery( document ).ready( function( $ ) {
 	$( '.main-navigation' ).find( 'a' ).on( 'focus blur', function() {
 		$( this ).parents().toggleClass( 'focus' );
 	} );
} );