
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

const blockName = 'wcphl19-collection/editable-esnext';

import attributes from './attributes';

registerBlockType( blockName, {
	title: __( 'Editable (ESNext)', 'wcphl19-collection' ),
	icon: 'carrot',
	category: 'wcphl19-collection',
	attributes: { attributes },
	edit: ( props ) => {
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<RichText
				tagName="p"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
			/>
		);
	},
	save: ( props ) => {
		return <RichText.Content tagName="p" value={ props.attributes.content } />;
	},
} );
