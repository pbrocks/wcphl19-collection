
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

const blockName = 'wcphl19-collection/inspector-controls';


registerBlockType( blockName, {
	title: __( 'Inspector controls (ESNext)', 'wcphl19-collection' ),

	icon: 'sos',

	category: 'wcphl19-collection',

	attributes: {
		checkboxField: {
			type: 'boolean',
			default: false,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		textField: {
			type: 'string',
			default: 'Radio and Select fields are strings',
		},
		toggleField: {
			type: 'boolean',
			default: true,
		},
		selectField: {
			type: 'string',
			default: 'c',
		},
	},

	edit( { attributes, setAttributes } ) {
		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		function onChangeContent( newContent ) {
			setAttributes( { textField: newValue } );
		}

		function onChangeCheckboxField( newValue ) {
			setAttributes( { checkboxField: newValue } );
		}

		function onChangeRadioField( newValue ) {
			setAttributes( { radioField: newValue } );
		}

		function onChangeTextField( newValue ) {
			setAttributes( { textField: newValue } );
		}

		function onChangeToggleField( newValue ) {
			setAttributes( { toggleField: newValue } );
		}

		function onChangeSelectField( newValue ) {
			setAttributes( { selectField: newValue } );
		}

		return (
			<>
				<InspectorControls>

					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={ checkboxField }
						onChange={ onChangeCheckboxField }
					/>

					<RadioControl
						label="Radio Field"
						selected={ radioField }
						options={
							[
								{ label: 'Yes', value: 'yes' },
								{ label: 'No', value: 'no' },
							]
						}
						onChange={ onChangeRadioField }
					/>

					<TextControl
						label="Text Field"
						help="Additional help text"
						value={ content }
						onChange={ onChangeTextField }
					/>

					<ToggleControl
						label="Toggle Field"
						checked={ toggleField }
						onChange={ onChangeToggleField }
					/>

					<SelectControl
						label="Select Control"
						value={ selectField }
						options={
							[
								{ value: 'a', label: 'Option A' },
								{ value: 'b', label: 'Option B' },
								{ value: 'c', label: 'Option C' },
							]
						}
						onChange={ onChangeSelectField }
					/>

				</InspectorControls>

				<RichText
					key="editable"
					tagName="p"
					onChange={ onChangeContent }
					value={ textField }
				/>
			</>
		);
	},

	save( { attributes } ) {
		const { content, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		return (
			<div>
				<RichText.Content
					value={ content }
					tagName="p"
				/>

				<h3>Inspector Control Fields</h3>
				<ul>
					<li>Checkbox Field: { checkboxField }</li>
					<li>Radio Field: { radioField }</li>
					<li>Text Field: { textField }</li>
					<li>Toggle Field: { toggleField }</li>
					<li>Select Field: { selectField }</li>
				</ul>
			</div>
		);
	},
} );