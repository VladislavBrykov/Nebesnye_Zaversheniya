jQuery(function($){
	$('#comment-body-add-more-wrapper .form-item>label').text("Комментарий ").append('<span class="form-required" title="Это поле обязательно для заполнения.">*</span>');
	/*добавление оформления кнопки для нового конструктора*/
	$('input[type="submit"].delete-line-item').addClass("btn btn-danger"); //кнопка удаления в корзине
	$('.view-filters .views-submit-button input').addClass("btn btn-default");
	$('.view .more-link a').addClass('btn btn-default'); //"Ещё" во вьюхе
	
	$(".filter-guidelines.form-wrapper.filter-guidelines-processed, .view.tool_panel").remove();
	$(".messages").html(function(index, htmlstr) {
		return htmlstr.replace(/Поле "Comment"/g, 'Поле "Комментарий"');
	});
	
	$('.commerce-add-to-cart input[type="submit"]').addClass("btn btn-default");
	var ajaxSuccess= Drupal.ajax.prototype.success;
	Drupal.ajax.prototype.success = function(response, status) {
		$('.commerce-add-to-cart input[type="submit"]').addClass("btn btn-default");
		ajaxSuccess.apply(this, arguments);
	}
	
	/*добавление заглушки если работает ajax*/
	if ($('.ajax-processed.form-submit').length != 0) {
	
		var waitBeforecall = Drupal.ajax.prototype.beforeSend;
		Drupal.ajax.prototype.beforeSend = function(xmlhttprequest, options) {
			$('body').append('<div class="wait"></div>');
			waitBeforecall.call(this, xmlhttprequest, options);
		}
		
		var waitAftercall = Drupal.ajax.prototype.success;
		Drupal.ajax.prototype.success = function(response, status) {
			$('body>.wait').remove();
			waitAftercall.call(this, response, status);
		}
		
		var waitAfterError = Drupal.ajax.prototype.error;
		Drupal.ajax.prototype.error = function(response, status) {
			$('body>.wait').remove();
			waitAfterError.call(this, response, status);
		}
		
	}
	
	$('input.form-submit.addreview').click(function(){
		$(this).remove();
		$('#block-formblock-review').slideDown(500);
	})
	
	//прокрутка таблиц
	$('.block-block .content *:not(.table-responsive) > table').wrap('<div class="table-responsive" />');
	$('.field-type-text-with-summary *:not(.table-responsive) > table').wrap('<div class="table-responsive" />');
	$('.view-commerce-cart-form *:not(.table-responsive) > table').parent().addClass('table-responsive');
	
	//всплывающие изображения по клику
	$('.field-type-text-with-summary').each(function(fieldNum){
		let rel = 'gallery[' + fieldNum + ']'; //название с порядковым номером поля для объединения в общую галерею
		let format = '{current} / {total}'; //формат вывода заголовков для отображения текущего слайда
		$(this).find('*:not(a)>img').each(function(){
			if($(this).width() > 100){ //если ширина изображения > 100px
				$(this).wrap('<a href="' + $(this).attr('src') + '" />');
				$(this).parent().colorbox({rel: rel, fixed: true, maxWidth: '95%', maxHeight: '95%', current: format});
			}
		})
	})
	
	/*обрезает дробные нули в конце полей чисел с плавающей точкой*/
	/*function removeFromTheEnd(str, symbol){
		if (str.slice(-1)==symbol) return removeFromTheEnd(str.substring(0, str.length - 1), symbol);
		return str;
	}
	$('.field-type-number-float .field-item').each(function(i,val){
		let str = $(val).text();
		if (str.indexOf('.')>-1){
			str = removeFromTheEnd(str,'0');
			str = removeFromTheEnd(str,'.');
			
			$(val).text(str);
		}
	});*/
	
	$(document).bind('cbox_complete', colorboxComplete);
	function colorboxComplete(){
		if (document.getElementById('colorboxNodeLoading')){
			setTimeout(colorboxComplete, 100);
			return;
		}
		
		//автоматическое изменение высоты colorbox от содержимого
		$.colorbox.resize();
		
		//отрисовка кастомных чекбоксов в колорбоксах
		renderVestaInputs();
	}
	
	//создание коробок для кастомных чекбоксов и радиокнопок
	function createVestaInputcheck(){
		let nextEl = $(this).next();
		if (nextEl.hasClass('vesta-checkbox')) return;
		if (nextEl.hasClass('vesta-radio')) return;
		
		switch ($(this).attr('type')){
			case 'checkbox':
				$(this).after('<div class="vesta-checkbox" />');
				$(this).addClass('hidden');
				break;
			case 'radio':
				$(this).after('<div class="vesta-radio" />');
				$(this).addClass('hidden');
				break;
		}
	}
	
	//отрисовка кастомных чекбоксов
	function renderVestaInputs(){
		$('.webform-component-radios input[type="radio"]').each(createVestaInputcheck);
		$('.webform-component-checkboxes input[type="checkbox"]').each(createVestaInputcheck);
	}
	
	//отрисовка кастомных чекбоксов после загрузки страницы
	renderVestaInputs();
	
	Drupal.behaviors.recaptchaAjax = {
        	attach: function (context, settings) {
        	if ('grecaptcha' in window && context !== document) {
		        $('.g-recaptcha:empty', context).each(function () {
		            grecaptcha.render(this, $(this).data());
		        });
            	}
        	}
    	};
	


})

