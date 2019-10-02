/**
 * <span class="tooltips " style="" title="">
<span style="color: #993300;">Tooltip Trigger</span>
</span>
 */

import {
	createElement
} from '@wordpress/element';

import {
	registerFormatType
} from '@wordpress/rich-text';

import {
	Tooltip,
	Button
} from '@wordpress/components';
 
const MyTooltip = () => (
    <Tooltip text="More information">
        <Button isDefault>
            Hover for more information
        </Button>
    </Tooltip>
);

registerFormatType(
    'wcphl19-collection/tooltip-format', {
        title: 'Tooltip format',
        tagName: 'tps',
        className: 'tooltips',
        edit: function ({isActive, value, onChange}) {
            return element.createElement(editor.RichTextToolbarButton, {
                icon: 'admin-customizer',
                title: title,
                onClick: function () {
                    onChange(richText.toggleFormat(value, {
                        type: name
                    }));
                },
                isActive: isActive,
                className: className
            });
        },
    }
);
