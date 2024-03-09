(function ($) {
  Drupal.behaviors.commerceAcf = {
    attach: function (context, settings) {
      $('input.quantity-input', context).each(function() {
        var $input = $(this);

        $input.keyup(function() {
          Drupal.commerceAcf.quantityChanged(this);
        });

        if ($input.hasClass('quantity-input-disabled')) {
          $input.attr('readonly', true);
        }
        if ($input.hasClass('quantity-input-spinner')) {
          $input.spinner({
            min: 1,
            stop: function(event, ui) {
              $(event.target).change();
              $(event.target).keyup();
            }
          })
        }
        
        $input.closest('.views-field-edit-quantity').find('.commerce-quantity-plusminus-link a').click( () => {
            Drupal.commerceAcf.quantityChanged(this);
        });
      });

      $('input.delete-line-item', context).click(function (event) {
        var $input = $(this);
        var $cartViews = $input.closest('.view-commerce-cart-form');

        if ($cartViews.length) {
          $cartViews.addClass('view-commerce-cart-form-loading');
        }
      });
    }
  };

  Drupal.commerceAcf = {
    timer: false,

    quantityChanged: function(element) {
      clearTimeout(Drupal.commerceAcf.timer);
      Drupal.commerceAcf.timer = setTimeout(function() {
        var $input = $(element);

        $input.closest('.view-commerce-cart-form').addClass('view-commerce-cart-form-loading');
        $input.trigger('quantityChanged');

        if ($input.hasClass('quantity-input-spinner')) {
          $input.spinner('disable');
        }
      }, 400);
    }
  };
})(jQuery);
