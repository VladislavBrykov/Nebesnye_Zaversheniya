window.Drupal.settings.mdd = {
	'respmenu_show' : false,
	'navtop' : 0,
	'scrolled' : 0,
};

(function($, settings){
//Загрузка js после загрузки колорбокса для замены поля на дату
Drupal.behaviors.whateverName= {
	attach: function (context, settings) {
		if ($('#colorbox').css('display') == 'block') {
			$('#colorbox .webform-client-form input[name="submitted[data]"]').attr('type', 'date');
		}
		$('.phone-mask').each(function(){
			new IMask(this, { mask: '+{7}(000)000-00-00' } );
		});
		$('.field-name-field-partners-whatsapp .form-control').each(function(){
			new IMask(this, { mask: '{7}0000000000' } );
		});
		$('.field-name-field-partners-phone .form-control').each(function(){
			new IMask(this, { mask: '+{7}(000)000-00-00' } );
		});
		if (document.getElementById('edit-field-tarif-mail-und-0-value')) {
			var mask3 = new IMask(document.getElementById('edit-field-tarif-mail-und-0-value'), {
				mask:function (value) {
					if(/^[A-z0-9_\.-]+$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@[A-z0-9-]+$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@[A-z0-9-]+\.$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@[A-z0-9-]+\.[A-z]{1,4}$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@[A-z0-9-]+\.[A-z]{1,4}\.$/.test(value))
						return true;
					if(/^[A-z0-9_\.-]+@[A-z0-9-]+\.[A-z]{1,4}\.[A-z]{1,4}$/.test(value))
						return true;
					return false;
				}
			});
		}
	}
};
//Загрузка js после загрузки колорбокса для замены поля на дату
$(document).ready(function(){

	let clickedValue;

	let el = document.querySelectorAll('.field-widget-image-miw');

	$(el).each(function (){
		//console.log(this);
		let label = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.type == 'childList' && $(mutation.addedNodes[0]).find('.form-type-mfw-managed-file').length) {
					$('label:contains("Альтернативный текст")').text('Описание данного периода жизни');
					let id = $(mutation.addedNodes[0]).find('.form-type-mfw-managed-file').find('input[multiple="multiple"]').attr("id");
					$(mutation.addedNodes[0]).find('.form-type-mfw-managed-file > label').attr('for', id);
				}
			});
		});
		label.observe(this, {
			attributes: true,
			characterData: true,
			childList: true,
			subtree: true,
			attributeOldValue: true,
			characterDataOldValue: true
		});
	});

	function DropUpload() {
		$('input[type="file"]').change(function() {
			$(this).parent().find('button.form-submit').mousedown();
		});
	}
	DropUpload();
	jQuery(document).ajaxComplete(function(e, xhr, settings) {
		DropUpload();
	});

	const togglePassword = document.querySelector("i.icon-eye");
	const password = document.querySelector("#user-login .form-item.form-type-password input");

	if (togglePassword) {
		togglePassword.addEventListener("click", function () {
			console.log(123);
			// toggle the type attribute
			const type = password.getAttribute("type") === "password" ? "text" : "password";
			password.setAttribute("type", type);

			// toggle the icon
			this.classList.toggle("bi-eye");
		});
	}

	$selectsYear = $('select[id$="-value-year"]');
	$selectsYear.on('change', function (){
		$("#AlertMessage").remove();
		var toReturn = true;
		$selectsYear.each(function(i) {
			if( !$(this).val() ) {
				toReturn = false;
			};
		});
		if (toReturn) {
			let diff = $('#edit-field-tarif-date-death-und-0-value-year').val() - $('#edit-field-tarif-date-birth-und-0-value-year').val();
			if (diff < 0) {
				$('<div/>', {
					id: 'AlertMessage',
					text: "Проверьте дату рождения и дату смерти!"
				}).prependTo('.field-name-field-tarif-date-birth');
			}
		}
	});



	//pagedim-black - затемнение смещённой страницы
	//position-right - открывать меню справа
	$("#mobile-nav").mmenu({
		extensions: ["pagedim-black"],
		navbar: {
			title: "Навигация",
		},
	});
	$('.phone-mask').each(function(){
		new IMask(this, { mask: '+{7}(000)000-00-00' } );
	});
	$('.field-name-field-tarif-phone .form-text').each(function(){
		new IMask(this, { mask: '+{7}(000)000-00-00' } );
	});
	if (document.documentElement.clientWidth < 768) {
			$('.field-name-field-tarif-album-1 .panel-body table').wrap('<div class="big-table"></div>');
			$('.field-name-field-tarif-album-2 .panel-body table').wrap('<div class="big-table"></div>');
			$('.field-name-field-tarif-album-3 .panel-body table').wrap('<div class="big-table"></div>');
			$('.field-name-field-tarif-album-4 .panel-body table').wrap('<div class="big-table"></div>');
	  }
  $('.field-name-field-memorypage input').prop("disabled", true);
  
	$('.page-memory-page .form-item-date-birth input').attr('type', 'date');
	$('.page-memory-page .form-item-date-death input').attr('type', 'date');

	ymaps.ready(init);

	function init() {
	    var myPlacemark,
	        myMap = new ymaps.Map('map', {
	            center: [55.753994, 37.622093],
	            zoom: 9
	        }, {
	            searchControlProvider: 'yandex#search'
	        });

	    // Слушаем клик на карте.
	    myMap.events.add('click', function (e) {
	        var coords = e.get('coords');

	        // Если метка уже создана – просто передвигаем ее.
	        if (myPlacemark) {
	            myPlacemark.geometry.setCoordinates(coords);
	        }
	        // Если нет – создаем.
	        else {
	            myPlacemark = createPlacemark(coords);
	            myMap.geoObjects.add(myPlacemark);
	            // Слушаем событие окончания перетаскивания на метке.
	            myPlacemark.events.add('dragend', function () {
	                getAddress(myPlacemark.geometry.getCoordinates());
	            });
	        }
	        getAddress(coords);
	    });

	    // Создание метки.
	    function createPlacemark(coords) {
	        return new ymaps.Placemark(coords, {
	            iconCaption: 'поиск...'
	        }, {
	            preset: 'islands#violetDotIconWithCaption',
	            draggable: true
	        });
	    }

	    // Определяем адрес по координатам (обратное геокодирование).
	    function getAddress(coords) {
	        // console.log(coords);
	        myPlacemark.properties.set('iconCaption', 'поиск...');
	        ymaps.geocode(coords).then(function (res) {
	            var firstGeoObject = res.geoObjects.get(0);
	            // console.log(res.geoObjects.get(0).properties.get('metaDataProperty'));
	            $('#edit-field-partners-map-loc-und-0-value').val(res.geoObjects.get(0).properties.get('text'));
	            $('#edit-field-partners-coordinates-und-0-value').val(coords);
	            // $('#edit-field-partners-city-sort-und-0-value').val(res.geoObjects.get(0).properties.get('description'));
	            myPlacemark.properties
	                .set({
	                    // Формируем строку с данными об объекте.
	                    iconCaption: [
	                        // Название населенного пункта или вышестоящее административно-территориальное образование.
	                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
	                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
	                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
	                    ].filter(Boolean).join(', '),
	                    // В качестве контента балуна задаем строку с адресом объекта.
	                    balloonContent: firstGeoObject.getAddressLine()
	                });
	        });
	    }
	}

	$('.node-type-tarif .field-name-field-tarif-album-1 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	$('.node-type-tarif .field-name-field-tarif-album-2 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	$('.node-type-tarif .field-name-field-tarif-album-3 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.node-type-memory-gallery .field-name-field-tarif-album-1 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	$('.node-type-memory-gallery .field-name-field-tarif-album-2 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});
	$('.node-type-memory-gallery .field-name-field-tarif-album-3 .field-items').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true
	});

	$('.node-type-tarif .view-memories-friends .view-content').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3
		      }
		    }
    	]
	});

	$('.node-type-memory-gallery .field-name-field-tarif-mem-friends>.field-items').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3
		      }
		    }
    	]
	});

	Fancybox.bind(".node-type-tarif .field-name-field-tarif-album-1 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	Fancybox.bind(".node-type-tarif .field-name-field-tarif-album-2 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	Fancybox.bind(".node-type-tarif .field-name-field-tarif-album-3 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	Fancybox.bind(".node-type-tarif .field-name-field-tarif-album-4 a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});

	Fancybox.bind(".node-type-memory-gallery .field-name-field-tarif-album-1 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	Fancybox.bind(".node-type-memory-gallery .field-name-field-tarif-album-2 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	Fancybox.bind(".node-type-memory-gallery .field-name-field-tarif-album-3 .slick-slide a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});
	
	Fancybox.bind(".node-type-life-story .field-name-field-tarif-album-5 .field-name-field-tarif-photo-up-img a", {
      groupAll : true, // Group all items
      on : {
        ready : (fancybox) => {
          //console.log(fancybox #${fancybox.id} is ready!);
        }
      }
	});

	$('.header-block-search .search-img').click(function(){
		$(this).toggleClass('active');
		$('.header-block-search #block-search-api-page-search-by-parts').toggleClass('active');
	});

	$('.footer-logo .search-img-footer').click(function(){
		$(this).toggleClass('active');
		$('.footer-logo #block-search-api-page-search-by-parts').toggleClass('active');
	});
	new isvek.Bvi({
		target: '.eye',
		fontSize: 18,
		theme: 'black'
	});
});

$(document).mouseup( function(e){ // событие клика по веб-документу
	var div = $( ".header-block-search #block-search-api-page-search-by-parts" ); // тут указываем ID элемента
	if ( !div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
		$('.header-block-search .search-im').removeClass('active');
		$('.header-block-search #block-search-api-page-search-by-parts').removeClass('active');
	}
});

$(document).mouseup( function(e){ // событие клика по веб-документу
	var div = $( ".footer-logo #block-search-api-page-search-by-parts" ); // тут указываем ID элемента
	if ( !div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
		$('footer-logo .search-img-footer').removeClass('active');
		$('.footer-logo #block-search-api-page-search-by-parts').removeClass('active');
	}
});

}(window.jQuery, window.Drupal.settings.mdd));

