<?php
	// Getting data of the  Facts in Digits box
	global $ts_global_sbox_element_values;
	
	if( is_array($ts_global_sbox_element_values) ) :
	
?>


<div class="ts-ihbox ts-ihbox-<?php echo themestek_sanitize_html_classes($ts_global_sbox_element_values['boxstyle']); ?> <?php echo themestek_sanitize_html_classes($ts_global_sbox_element_values['main-class']); ?>">
	<div class="ts-sbox-bgimage-layer ts-bgimage-layer"></div>
	<div class="ts-ihbox-wrapper-bg-layer ts-bg-layer"></div>
	
	<div class="ts-ihbox-inner">
		<div class="ts-ihbox-contents">
			<?php echo themestek_wp_kses( $ts_global_sbox_element_values['heading_html'] ); ?>
			<div class="themestek-box-link">
				<a href="<?php echo get_permalink(); ?>" title="<?php echo esc_attr__('READ MORE', 'labtechco' ); ?>">
					<i class="ts-labtechco-icon-up-right-arrow"></i>
				</a>
			</div>
			<?php echo themestek_wp_kses( $ts_global_sbox_element_values['content_html'] ); ?>
			<?php echo themestek_wp_kses( $ts_global_sbox_element_values['button_html'] ); ?>
		</div><!-- .ts-ihbox-contents -->
		<div class="ts-ihbox-icon ts-large-icon">
			<?php echo themestek_wp_kses($ts_global_sbox_element_values['icon_html'], 'sbox_icon'); ?>
		</div>
	</div>
	
</div>



<?php

	endif;
	
	// Resetting data of the Facts in Digits box
	$ts_global_sbox_element_values = '';
?>