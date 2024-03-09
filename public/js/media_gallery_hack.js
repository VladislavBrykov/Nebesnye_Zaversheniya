(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
	attach: function (context, settings) {
		$(document).bind('cbox_complete', function () {
			$('.lightbox-stack .gallery-thumb-inner a').click(function(e) {
				e.preventDefault();
				$.colorbox.next();
			});
		});
	}
};

})(jQuery);