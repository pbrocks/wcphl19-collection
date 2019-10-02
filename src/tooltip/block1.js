
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import { 
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	CheckboxControl,
	RadioControl,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

registerBlockType( 'wcphl19-collection/custom-editable-block', {
	title: wp.i18n.__( 'Custom Editable Block' ),
	icon: 'universal-access-alt',
	category: 'wcphl19-collection',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		openExternalLinks: {
			type: 'boolean',
			default: false
		}
	},

	edit: props => {

		const inspectorControls = props.focus && (
			<InspectorControls key="inspector">
				<h3>{ wp.i18n.__( 'Custom Block Settings' ) }</h3>
				<ToggleControl
					label={ wp.i18n.__( 'Open Links in new tab' ) }
					checked={ props.attributes.openExternalLinks }
					onChange={ () => props.setAttributes( { openExternalLinks: ! props.attributes.openExternalLinks } ) }
				/>
			</InspectorControls>
		);

		return [
			inspectorControls,
			<div className={ props.className } key='richtext'>
				<RichText
					className={ props.className }
					placeholder={ wp.i18n.__( 'Write here...' ) }
					onChange={ ( newContent ) => props.setAttributes( { content: newContent } ) }
					value={ props.attributes.content }
					focus={ props.focus }
					onFocus={ props.setFocus }
				/>
			</div>
		];
	},

	save: props => {
		return (
			<div className={ props.className }>
				<p>{ props.attributes.content }</p>
			</div>
		)
	}
} );