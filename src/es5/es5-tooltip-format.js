( function( wp ) {
    var es5CustomButton = function( props ) {
        return wp.element.createElement(
            wp.blockEditor.RichTextToolbarButton, {
                icon: 'editor-code',
                title: 'ES5 format',
                onClick: function() {
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'wcphl19-collection/es5-format' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }
    wp.richText.registerFormatType(
        'wcphl19-collection/es5-format', {
            title: 'ES5 format',
            tagName: 'span',
            className: null,
            edit: es5CustomButton,
        }
    );
} )( window.wp );