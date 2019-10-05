<?php
/*
Plugin Name: Pento Block
Description: A sample PHP rendered block, showing how to convert a shortcode to a block.
Author: Gary Pendergast
Version: 0.1
Author URI: https://es5.net/
License: GPLv2+
*/

/*
 * Here's a little sample plugin that shows how to easily convert an existing shortcode
 * to be a server-side rendered block. This lets you get your existing plugin functionality
 * running in the block editor as quickly as possible, you can always go back later and
 * improve the UX.
 *
 * In this case, we have an imaginary shortcode, [es5_block], which accepts one argument, 'radio'.
 * This shortcode would be used like so:
 *
 * [es5_block radio=abcde]
 *
 * Because the block editor uses the same function signature when doing server-side rendering, we
 * can reuse our entire shortcode logic when creating the block.
 */

/**
 * Register our block and shortcode.
 */
function es5_block_init() {
	wp_register_script(
		'es5-block',
		plugins_url( 'es5-block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'es5-block.js' )
	);

	// Register our block, and explicitly define the attributes we accept.
	register_block_type(
		'wcphl19-collection/es5-block', array(
			'attributes'      => array(
				'text_one' => array(
					'type' => 'string',
				),
				'text_two' => array(
					'type' => 'string',
				),
				'textarea_one' => array(
					'type' => 'string',
				),
				'radio' => array(
					'type' => 'string',
				),
			),
			'editor_script'   => 'es5-block',
			'render_callback' => 'es5_block_render',
		)
	);

	// Define our shortcode, too, using the same render function as the block.
	add_shortcode( 'es5_block', 'es5_block_render' );
}
add_action( 'init', 'es5_block_init' );

/**
 * Our combined block and shortcode renderer.
 *
 * For more complex shortcodes, this would naturally be a much bigger function, but
 * I've kept it brief for the sake of focussing on how to use it for block rendering.
 *
 * @param array $attributes The attributes that were set on the block or shortcode.
 */
function es5_block_render( $attributes ) {
	return '<h3>' . __FUNCTION__ . '</h3> <pre>' . print_r( $attributes, true ) . '</pre>';
}
