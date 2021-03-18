<?php 
/*
*	Template name: Thank you page
*/
	get_header();

    global $redux_demo;
 ?>

<section class="ty-top top">
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
<section class="ty-content">
    <div class="container">
        <div class="row">
            <div class="col-12 flex-column flex-md-row d-flex justify-content-between align-items-center">
                <div class="succes d-flex flex-column flex-sm-row">
                    <img src="<?= $redux_demo["ty-image"]["url"] ?>" alt="succes">
                    <div class="succes__text">
                        <h3 class="succes__title"><?= $redux_demo['ty-title'] ?></h3>
                        <p class="succes__title"><?= $redux_demo['ty-desc'] ?></p>
                    </div>

                </div>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="succes-btn ghost-btn">
                    Перейти на главную
                </a>
            </div>
        </div>
    </div>

</section>

<?php 
	get_footer();
 ?>
