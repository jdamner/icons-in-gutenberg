<?php
/**
 * Plugin Name: Icons for Gutenberg
 * Plugin URI: https://amner.me
 * Description: Icons for Gutenberg
 * Author: James Amner<jdamner@me.com>
 * Author URI: https://amner.me
 * Version: 1.0.0
 * License: GPL2+
 */

add_action( 
	'init', 
	function () { 
		register_block_type_from_metadata( __DIR__ . '/build' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () { 
		wp_enqueue_style( 'dashicons' );
	}
);
