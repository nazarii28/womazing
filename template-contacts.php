<?php 
/*
*	Template name: Контакты
*/

	get_header();

    global $redux_demo;
 ?>
<section class="contacts-top top">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
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
<section class="contacts-content">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="map">
                    <span>Загрузка карты</span>
                    <div class="circles d-flex">
                        <div class="circles__circle circles__circle-1"></div>
                        <div class="circles__circle circles__circle-2"></div>
                        <div class="circles__circle circles__circle-3"></div>
                    </div>
                    <?php echo do_shortcode('[wpgmza id="1"]') ?>
                </div>
            </div>
        </div>
        <div class="contacts-links">
            <div class="row">
                <div class="col-lg-3">
                    <div class=" contacts-links__item contacts-links__phone">
                        <p>Телефон</p>
                        <a class="tel" href="tel:<?= $redux_demo['contacts-tel'] ?>"><?= $redux_demo['contacts-tel'] ?></a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="contacts-links__item contacts-links__mail">
                        <p>E-mail</p>
                        <a href="mailto:<?= $redux_demo['contacts-email'] ?>"><?= $redux_demo['contacts-email'] ?></a>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="contacts-links__item contacts-links__address">
                        <p>Адрес</p>
                        <span><?= $redux_demo['contacts-address'] ?></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="contacts-form">
                        <h3>Напишите нам</h3>
                        <?php echo do_shortcode('[contact-form-7 id="177" title="Напишите нам"]')?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<?php 
	get_footer();
 ?>
