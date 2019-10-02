// License: GPLv2+
 
( function( blocks, components, editor, element, i18n ) {
	var stylesheets = element.createElement;
	var __ = i18n.__;

	const es5 = wp.element.createElement,
		registerBlockType = wp.blocks.registerBlockType,
		ServerSideRender = wp.components.ServerSideRender,
		TextControl = wp.components.TextControl,
		TextareaControl = wp.components.TextareaControl,
		InspectorControls = wp.editor.InspectorControls;

	/*
	 * Here's where we register the block in JavaScript.
	 *
	 * It's not yet possible to register a block entirely without JavaScript, but
	 * that is something I'd love to see happen. This is a barebones example
	 * of registering the block, and giving the basic ability to edit the block
	 * attributes. (In this case, there's only one attribute, 'radio'.)
	 */
	registerBlockType( 'wcphl19-collection/es5-block', {
		title: 'ES5 Block',
		icon: 'megaphone',
		category: 'wcphl19-collection',

		/*
		 * In most other blocks, you'd see an 'attributes' property being defined here.
		 * We've defined attributes in the PHP, that information is automatically sent
		 * to the block editor, so we don't need to redefine it here.
		 */

		edit: function( props ) {
			return [
				/*
				 * The ServerSideRender element uses the REST API to automatically call
				 * php_block_render() in your PHP code whenever it needs to get an updated
				 * view of the block.
				 */
				es5( ServerSideRender, {
					block: 'wcphl19-collection/es5-block',
					attributes: props.attributes,
				} ),
				/*
				 * InspectorControls lets you add controls to the Block sidebar. In this case,
				 * we're adding a TextControl, which lets us edit the 'radio' attribute (which
				 * we defined in the PHP). The onChange property is a little bit of magic to tell
				 * the block editor to update the value of our 'radio' property, and to re-render
				 * the block.
				 */
				es5( InspectorControls, {},

					es5( TextControl, {
						label: 'Text Box 1',
						value: props.attributes.text_one,
						onChange: ( value ) => { props.setAttributes( { text_one: value } ); }
					} ),

					es5( TextControl, {
						label: 'Text Box 2',
						value: props.attributes.text_two,
						onChange: ( value ) => { props.setAttributes( { text_two: value } ); }
					} ),

					es5( TextareaControl, {
						label: 'TextArea Paragraph 1',
						value: props.attributes.textarea_one,
						onChange: ( value ) => { props.setAttributes( { textarea_one: value } ); },
					} ),
					es5( TextControl, {
						label: 'Radio',
						value: props.attributes.radio,
						onChange: ( value ) => { props.setAttributes( { radio: value } ); },
					} )
				),
			];
		},

		// We're going to be rendering in PHP, so save() can just return null.
		save: function() {
			return null;
		},
	} );
}(
	window.wp.blocks,
	window.wp.components,
	window.wp.editor,
	window.wp.element,
	window.wp.i18n
) );


// registerBlockType = wp.blocks.registerBlockType

// ServerSideRender = wp.components.ServerSideRender

// TextControl = wp.components.TextControl

// InspectorControls = wp.editor.InspectorControl
