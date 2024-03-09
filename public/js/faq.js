(function($) {
	Drupal.behaviors.a_module = {
		attach: function(context, settings) {
			$('.node-faq.node-teaser .field-name-title').once().click(function() {
				$(this).parents('.node').toggleClass('active').find('.group-content').slideToggle(200);
			})
		}
	};
}(jQuery));