// Slider

$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false,
		asNavFor: ".slider-for",
	});
	$('.slider-for').slick({
		dots: false,
		arrows: false,
		fade: true,
		asNavFor: ".slider",
        draggable: false,
	});
	$('.team-slider').slick({
		dots: true,
		arrows: true,
		autoplay: false,
		infinite: false,

	});

})

// Scroll

$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

// Modal


$(document).ready(function($) {
	$('#phone-icon').click(function() {
		$('#modal-wrapper').addClass('active');
		$('body').css('overflow','hidden');
		return false;
	});	

    $('#phone-burger').click(function() {
        $('#modal-wrapper').addClass('active');
        $('body').css('overflow','hidden');
        return false;
    }); 
	
	$('#modal__close').click(function() {
		$(this).parents('#modal-wrapper').removeClass('active');
		$('body').css('overflow','visible');
		return false;
	});	
	$('#overlay').click(function() {
		$(this).parents('#modal-wrapper').removeClass('active');
		$('body').css('overflow','visible');
		return false;
	});	
});

// Form

//Передача инфо о кнопке в модальное окно
$(function() {
    $('.modal__btn').click(function() {
        var parent = $(this).attr('data-parent');
        var modal = $(this).attr('data-target')
        $(modal).find('input[name=target]').val(parent);
    })
});
//Валидация и отправка формы

$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    case 'modal-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#modal-message-wrap').addClass('active');
                                
                                }, 1100);
                                $('#modal-message-wrap').on('click', function(e) {
                                    $('#modal-message-wrap').removeClass('active');
                                    $('body').css('overflow','visible');
                                });
                                $('#modal-wrapper').removeClass('active');
                            });
                        break;
                }
                return false;
            }
        })
    }

    $('.js-form').each(function() {
        valEl($(this));
    });
    
});

// Sticky header
    $(document).ready(function(){
         var HeaderTop = $('#header').offset().top;
        
         $(window).scroll(function(){
                 if( $(window).scrollTop() > 1 ) {
                         $('#header').addClass('sticky');
                 } else {
                         $('#header').removeClass('sticky');
                 }
         });
     });

// Burger

$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger-menu,.burger').toggleClass('active');
    });
});