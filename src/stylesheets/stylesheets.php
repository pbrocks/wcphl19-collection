<?php
/**
 * 610-363-4004
 * Load all translations for our plugin from the MO file.
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function wcphl19_collection_stylesheets_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'wcphl19-collection-stylesheets',
		plugins_url( 'index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'index.js' )
	);

	wp_register_style(
		'wcphl19-collection-stylesheets-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'wcphl19-collection-stylesheets',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type(
		'wcphl19-collection/stylesheets', array(
			'style' => 'wcphl19-collection-stylesheets',
			'editor_style' => 'wcphl19-collection-stylesheets-editor',
			'editor_script' => 'wcphl19-collection-stylesheets',
		)
	);

}
add_action( 'init', 'wcphl19_collection_stylesheets_register_block' );
