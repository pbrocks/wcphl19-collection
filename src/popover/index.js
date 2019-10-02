 
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

import { 
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	Button,
	TextControl,
	Popover
} from '@wordpress/components';

import { withState } from '@wordpress/compose';

const blockName = 'wcphl19-collection/popover';

const attributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p',
	},
};

const MyPopover = withState( {
    isVisible: false,
} )( ( { isVisible, setState } ) => {
    const toggleVisible = () => {
        setState( ( state ) => ( { isVisible: ! state.isVisible } ) );
    };
    return (
        <Button isDefault onClick={ toggleVisible }>
            Toggle Popover!
            { isVisible && (
                <Popover>
                    Popover is toggled!
                </Popover>
            ) }
        </Button>
    );
} );


registerBlockType( blockName, {
	title: 'ESNext Popover',

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
				<MyPopover
				/>
			</>
		);
	},

	save( { attributes } ) {
		const { content } = attributes;

		return (
			<div>
				<p>MyPopover</p>
				
			</div>
		);
	},
} );