jQuery(function($) {
	//добавление кастомных чекбоксов к фасетам
	$('<div class="facet-custom-cb"></div>').insertAfter('.facet-multiselect-checkbox');

	//добавление минимальной и максимальной цены в фасете цены ajax ranges
	function addMinMaxLabels(){
		$('.ajax-facets-controls-wrapper').each(function(i,val){
			let minVal = $(val).children('.slider-wrapper').attr('data-min');
			let maxVal = $(val).children('.slider-wrapper').attr('data-max');
			
			$(val).children('.min-input').append('<div class="minmax_lbl">'+minVal+'</div>');
			$(val).children('.max-input').append('<div class="minmax_lbl">'+maxVal+'</div>');
		});
	}
	addMinMaxLabels();

	var fasetsObservers = [];
	// Конфигурация observers (за какими изменениями наблюдать)
	function createObservers(targets){
		const observerConfig = {
			childList: true,
			subtree: true,
		};
		$.each(targets, function(index,value){
			// Начинаем наблюдение за настроенными изменениями целевого элемента
			if(value!=null){
				fasetsObservers[index].disconnect();
				fasetsObservers[index].observe(value, observerConfig);
			}
		})
	}
	function newFacetsActivity(selector){
		let targets = document.querySelectorAll(selector);
		// Функция обратного вызова при срабатывании мутации
		
		const observerCallback = function(mutationsList, observer){
			$('.cf-block').addClass('active');
			if (!$(targets).is('.facet-custom-cb')){
				//что делать при отсутствии искомого элемента
				$('<div class="facet-custom-cb"></div>').insertAfter('.facet-multiselect-checkbox');
				addMinMaxLabels();
				
				createObservers(targets);
			}
		};
		$.each(targets,function(index){
			// Создаем экземпляр наблюдателя с указанной функцией обратного вызова
			fasetsObservers[index] = new MutationObserver(observerCallback);
		});
		createObservers(targets);
	}
	newFacetsActivity('.block-facetapi');

	//добавление класса block-facets-empty к блокам с пустыми ajax-фасетами
	$('.ajax-facets-empty-behavior').each(function(){
		$(this).parents('.block-facetapi').eq(0).addClass('block-facets-empty');
	});
	
	if ($('.block-facetapi').length > $('.block-facets-empty').length)
	//добавление кнопок "Показать" и "Сбросить" в конце фасетов
	$('<div class="block cf-block"><a class="facet-custom-accept btn btn-success" href="#">Показать</a><a class="facet-custom-reset btn btn-danger" href="#">Сбросить</a></div>').insertAfter($('.block-facetapi').last());
	$('.facet-custom-accept').on('mousedown',function(event){
		$(this).attr('href', $('#ajax-facets-tooltip a').attr('href'));
	});
	$('.facet-custom-reset').on('click',function(event){
		event.preventDefault();
		$('.block-facetapi .reset-link').trigger('click');
		$('.cf-block').removeClass('active');
	});

	$('.block-facetapi .bd-blockheader,.block-facetapi .block-title').click(function(){
		$(this).parent().toggleClass('opened').children('.content').slideToggle('fast');
	});
	
	//скрыть регион с фасетами, если скрыты все фасеты внутри
	if (!$('.block-facetapi').is(':not(.block-facets-empty)')){
		$('.facets-wrapper').addClass('wrapper-facets-empty');
	}
	
	$('.show-facets-button').click(function(){
		$(this).parent('.facets-wrapper').toggleClass('active');
	});
	$('.close-region-facets').click(function(){
		$(this).parents('.facets-wrapper').removeClass('active');
	});
})