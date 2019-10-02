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
 
const MyTooltip = () => (
    <Tooltip text="More information">
        <Button isDefault>
            Hover for more information
        </Button>
    </Tooltip>
);


const blockName = 'wcphl19-collection/tooltip';

registerBlockType( blockName, {
	title: 'ESNext Tooltip',

	icon: 'universal-access-alt',

	category: 'wcphl19-collection',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},

	edit( { attributes, setAttributes } ) {
		const { content, textField } = attributes;


		function onChangeTextField( newValue ) {
			setAttributes( { textField: newValue } );
		}

		return (
			<>
				<TextControl
					label="Text Field"
					help="Additional help text"
					value={ textField }
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
		const { content, textField } = attributes;

		return (
			<div>
				<h2>Tooltip</h2>
				<RichText.Content
					value={ textField }
					tagName="p"
					className="tooltips"
				/>
			</div>
		);
	},
} );