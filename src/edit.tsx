import React from 'react';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { PanelBody, Button, Icon } from '@wordpress/components';

import { IconKeys } from './IconKeys';
import type { IconBlockProps } from './types';

export function Edit( { attributes, setAttributes }: IconBlockProps ) {
	const blockProps = useBlockProps();
	delete blockProps.ref;

	return (
		<>
			<InspectorControls key="setting">
				<PanelBody title="Icon">
					{ IconKeys.map( ( option ) => {
						return (
							<Button
								isPrimary={ attributes.icon === option }
								onClick={ () => {
									setAttributes( { icon: option } );
								} }
								icon={ option }
								label={ option }
								key={ option }
								size={ 40 }
							/>
						);
					} ) }
					{ /* size picker */ }
				</PanelBody>
			</InspectorControls>
			<Icon
				{ ...blockProps }
				style={ { width: 'unset', height: 'unset' } }
				icon={ attributes.icon }
			/>
		</>
	);
}
