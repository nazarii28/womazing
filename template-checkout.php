<?php 
/*
*	Template name: Оформление заказа
*/
	get_header();

    global $redux_demo;

 ?>

<section class="checkout-top top">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h1 class="shop-title">
					<?php wp_title(''); ?>
				</h1>
				<div class="bread-crumbs">
					<?php $args = array(
							'delimiter' => '—' 
						);
						woocommerce_breadcrumb( $args ); ?>
				</div>
			</div>

		</div>
	</div>
</section>

<section class="checkout-content">
	<div class="container">
		<?php echo do_shortcode('[woocommerce_checkout]') ?>
		
	</div>
</section>

  <?php 
	get_footer();
 ?>