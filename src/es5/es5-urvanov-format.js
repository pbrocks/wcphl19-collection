( function( richText, element, editor ) {
    var SupButton = function( props ) {
        return element.createElement(
            editor.RichTextToolbarButton, {
                icon: 'arrow-up',
                title: 'Sup',
                onClick: function() {
                    props.onChange( richText.toggleFormat(
                        props.value,
                        { type: 'wcphl19-collection/urvanov-format' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }

    var SubButton = function( props ) {
        return element.createElement(
            editor.RichTextToolbarButton, {
                icon: 'arrow-down',
                title: 'Sub',
                onClick: function() {
                    props.onChange( richText.toggleFormat(
                        props.value,
                        { type: 'wcphl19-collection/urvanov-sub' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }

    richText.registerFormatType(
        'wcphl19-collection/urvanov-format', {
            title: 'Sup',
            tagName: 'sup',
            className: null,
            edit: SupButton
        }
    );

    richText.registerFormatType(
        'wcphl19-collection/urvanov-sub', {
            title: 'Sub',
            tagName: 'sub',
            className: null,
            edit: SubButton
        }
    );


} )( 
    window.wp.richText,
    window.wp.element,
    window.wp.editor
    );