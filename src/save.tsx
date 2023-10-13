import React from 'react';

import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import type { IconBlockProps } from './types';

export const Save = ( { attributes }: IconBlockProps ) => {
	return (
		<div { ...useBlockProps.save() }>
			<Icon
				{ ...useBlockProps.save() }
				style={ { width: 'unset', height: 'unset' } }
				icon={ attributes.icon }
			/>
		</div>
	);
};
