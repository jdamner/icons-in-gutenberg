/**
 * Index.ts
 *
 * This is the entry point for the application.
 */
import { registerBlockType } from '@wordpress/blocks';
import { Edit } from './edit';
import { Save } from './save';

/**
 * Register the block.
 */
registerBlockType( 'dashicons/icon', {
	edit: Edit,
	save: Save,
} );
