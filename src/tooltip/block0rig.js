
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

import { withState } from '@wordpress/compose';
 
const MyCheckboxControl = withState( {
    isChecked: true,
	} )( ( { isChecked, setState } ) => (
	    <CheckboxControl
	        heading="User"
	        label="Is author"
	        help="Is the user a author or not?"
	        checked={ isChecked }
	        onChange={ ( isChecked ) => { setState( { isChecked } ) } }
	    />
) );

const blockName = 'wcphl19-collection/inspector-es6';

registerBlockType( blockName, {
	title: 'ESNext Inspector controls',

	icon: 'universal-access-alt',

	category: 'wcphl19-collection',

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		MyCheckboxControl: {
			type: 'boolean',
			default: true,
		},
		checkboxField: {
			type: 'boolean',
			default: false,
		},
		radioField: {
			type: 'string',
			default: 'no',
		},
		textField: {
			type: 'string',
		},
		toggleField: {
			type: 'boolean',
			default: true,
		},
		selectField: {
			type: 'string',
		},
	},

	edit( { attributes, setAttributes } ) {
		const { content, MyCheckboxControl, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		{ MyCheckboxControl }
		function onChangeContent( newContent ) {
			setAttributes( { content: newContent } );
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
				{ MyCheckboxControl }
					<CheckboxControl
						heading="Checkbox Field"
						label="Tick Me"
						help="Additional help text"
						checked={ MyCheckboxControl, checkboxField }
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
						value={ textField }
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
					value={ content }
				/>
			</>
		);
	},

	save( { attributes } ) {
		const { content, MyCheckboxControl, checkboxField, radioField, textField, toggleField, selectField } = attributes;

		return (
			<div>
				<h2>Inspector Control Fields</h2>
				<ul>
					<li>MyCheckboxControl: { MyCheckboxControl }</li>
					<li>Checkbox Field: { checkboxField }</li>
					<li>Radio Field: { radioField }</li>
					<li>Text Field: { textField }</li>
					<li>Toggle Field: { toggleField }</li>
					<li>Select Field: { selectField }</li>
				</ul>
				<RichText.Content
					value={ content }
					tagName="p"
				/>			</div>
		);
	},
} );