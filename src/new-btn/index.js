 
import { __ } from '@wordpress/i18n';

import {
	registerFormatType,
	toggleFormat
} from '@wordpress/rich-text';

import { 
	PlainText,
	RichText,
	InspectorControls,
	RichTextToolbarButton,
} from '@wordpress/block-editor';

import {
	TextControl,
	ToggleControl,
	Tooltip, 
	Button,
} from '@wordpress/components';

import { withState } from '@wordpress/compose';


const someNewBtn = ( props ) => {
	return <RichTextToolbarButton
	    icon='editor-code'
	    title='Sample output'
	    onClick={ () => {
	        props.onChange( toggleFormat(
	            props.value,
	            { type: 'wcphl19-collection/newbtn' }
	        ) );
	    } }
	    isActive={ props.isActive }
	/>;
};
 

registerFormatType( 'wcphl19-collection/newbtn', {
	title: 'newbtn',
	tagName: 'stk',
	attributes: {
		title: 'title'
	},
	className: 'tooltips',
	edit: someNewBtn
} );


