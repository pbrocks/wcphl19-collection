import { Tooltip, Button } from '@wordpress/components';
 
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import { 
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
} from '@wordpress/components';

import { withState } from '@wordpress/compose';

const attributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p',
	},
};

const MyTooltip = (attributes) => (

    <Tooltip text="You have hovered for more information">
        <Button isDefault>
	        Hover information
        </Button>
    </Tooltip>
);


const blockName = 'wcphl19-collection/tooltip';

registerBlockType( blockName, {
	title: 'ESNext Tooltip',

	icon: 'universal-access-alt',

	category: 'wcphl19-collection',

	attributes: attributes,

	edit( { attributes, setAttributes } ) {
		const { content } = attributes;


		function onChangeTextField( newValue ) {
			setAttributes( { content: newValue } );
		}

		return (
			<>
				<TextControl
					label="Text Field"
					help="Additional help text"
					value={ content }
					onChange={ onChangeTextField }
				/>
				<RichText
					key="editable"
					tagName="p"
					onChange={ onChangeTextField }
					value={ content }
				/>
			</>
		);
	},

	save( { attributes } ) {
		const { content } = attributes;
		return (
			<div>
				<h2>Tooltip</h2>
				<p>{ content }</p>
				<RichText.Content
					value="title is content " 
					tagName="tip"
					className="tooltips"
				/>
			</div>
		);
	},
} );