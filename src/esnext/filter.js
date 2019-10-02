import attributes from "./attributes";

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

const blockName = 'wcphl19-collection/editable-esnext';

const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody>
						My custom control
						<RichText
						tagName="p"
						className={ className }
						onChange={ onChangeContent }
						value={ content }
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
			);
		};
	}, "withInspectorControl" );
	
	wp.hooks.addFilter( 'editor.BlockEdit', blockName, withInspectorControls );
