/**
 * Hello World: Step 2
 *
 * Move styles to stylesheets - both edit and front-end.
 *
 * Note the `className` property supplied to the `edit` callback.  To use the
 * `.wp-block-*` class for styling, plugin implementers must return an
 * appropriate element with this class.
 */
( function( blocks, i18n, element ) {
	var stylesheets = element.createElement;
	var __ = i18n.__;

	blocks.registerBlockType( 'wcphl19-collection/stylesheets', {
		title: __( 'Example: Stylesheets', 'wcphl19-collection' ),
		icon: 'universal-access-alt',
		category: 'wcphl19-collection',
		edit: function( props ) {
			return stylesheets(
				'p',
				{ className: props.className },
				'Hello World, step 2 (from the editor, in green).'
			);
		},
		save: function() {
			return stylesheets(
				'p',
				{},
				'Hello World, step 2 (from the frontend, in red).'
			);
		},
	} );
}(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
) );
