// https://wordpress.stackexchange.com/questions/346769/gutenberg-custom-registerformattype-with-plaintext-in-inspectorcontrol
 
import { __ } from '@wordpress/i18n';

// import { registerBlockType } from '@wordpress/blocks';

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


const MyStacktip = () => (
    <Tooltip text="Hovered so more information">
        <span>
            Hover for more information
        </span>
    </Tooltip>
);

registerFormatType( 'wcphl19-collection/stacktip', {
	title: 'Stacktip',
	tagName: 'stk',
	attributes: {
		title: 'title'
	},
	className: 'tooltip-wrapper',
	edit: MyStacktip
} );
