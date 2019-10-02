<?php
/**
 * Plugin Name: WCPHL19 Collection
 * Plugin URI: https://github.com/WordPress/wcphl19-collection
 * Description: This plugin is a collection of code demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package wcphl19-collection
 */

defined( 'ABSPATH' ) || exit;

require plugin_dir_path( __FILE__ ) . 'src/index.php';

/**
 * Load all translations for our plugin from the MO file.
 */
add_action( 'init', 'wcphl19_collection_esnext_load_textdomain' );

function wcphl19_collection_esnext_load_textdomain() {
	load_plugin_textdomain( 'wcphl19-collection', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function wcphl19_collection_esnext_register_block() {
	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	wp_register_script(
		'wcphl19-collection-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'wcphl19-collection-esnext-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	wp_register_style(
		'wcphl19-collection-esnext',
		plugins_url( 'style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type(
		'wcphl19-collection/example-editable-esnext', array(
			'style' => 'wcphl19-collection-esnext',
			'editor_style' => 'wcphl19-collection-esnext-editor',
			'editor_script' => 'wcphl19-collection-esnext',
		)
	);

	if ( function_exists( 'wp_set_script_translations' ) ) {
		/**
		 * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
		 * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
		 * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
		 */
		wp_set_script_translations( 'wcphl19-collection-esnext', 'wcphl19-collection' );
	}

}
add_action( 'init', 'wcphl19_collection_esnext_register_block' );

function create_wcphl19_collection_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'wcphl19-collection',
				'title' => __( 'WCPHL19 Collection Panel', 'wcphl19-collection' ),
			),
		)
	);
}
add_filter( 'block_categories', 'create_wcphl19_collection_panel', 10, 2 );

