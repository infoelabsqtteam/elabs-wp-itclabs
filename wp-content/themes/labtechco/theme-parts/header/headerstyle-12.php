<header id="masthead" class="<?php echo themestek_header_style_class(); ?>">
	<div class="ts-header-block <?php echo themestek_headerclass(); ?>">
		<?php get_template_part('theme-parts/header/header','search-form'); ?>
		<div id="ts-stickable-header-w-main" class="ts-stickable-header-w-main">
			<?php get_template_part('theme-parts/header/header','topbar'); ?>
			<div class="themestek-sticky-header"><div class="container"></div></div>
			<?php get_template_part('theme-parts/header/header','main-style-12'); ?>
		</div>
		<?php get_template_part('theme-parts/header/header','titlebar'); ?>
		<?php get_template_part('theme-parts/header/header','slider'); ?>
	</div>
</header><!-- .site-header -->