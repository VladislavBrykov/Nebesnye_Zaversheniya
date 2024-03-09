jQuery(function($) {
    $('.vesta_user .vesta_user_form .content_body .form-item.form-type-textfield').each(function () {
        var $this = $(this);
        $this.find('input').val('');
        $this.find('label.control-label').before($this.find('input'));
        $this.find('input').on('input', function () {
            if($this.find('input').val().length >= 1){
                $this.addClass('label-act');
            }else{
                $this.removeClass('label-act');
            }
        });
    });
    $('.vesta_user .vesta_user_form .content_body .form-item.form-type-password').each(function () {
        var $this = $(this);
        $this.find('input').val('');
        $this.find('label.control-label').before($this.find('input'));
        $this.find('input').on('input', function () {
            if($this.find('input').val().length >= 1){
                $this.addClass('label-act');
            }else{
                $this.removeClass('label-act');
            }
        });
    });

    $('.vesta_user.user_profile_edit main.main .region.region-content section#block-system-main form .form-item.form-type-password').each(function () {
        var $this = $(this);
        if($this.find('input').val().length >= 1){
            $this.addClass('label-act');
        }else{
            $this.removeClass('label-act');
        }
        $this.find('label.control-label').before($this.find('input'));
        $this.find('input').on('input', function () {
            if($this.find('input').val().length >= 1){
                $this.addClass('label-act');
            }else{
                $this.removeClass('label-act');
            }
        });
    });
    $('.vesta_user.user_profile_edit main.main .region.region-content section#block-system-main form .form-item.form-type-textfield').each(function () {
        var $this = $(this);
        if($this.find('input').val().length >= 1){
            $this.addClass('label-act');
        }else{
            $this.removeClass('label-act');
        }
        $this.find('label.control-label').before($this.find('input'));
        $this.find('input').on('input', function () {
            if($this.find('input').val().length >= 1){
                $this.addClass('label-act');
            }else{
                $this.removeClass('label-act');
            }
        });
    });

    $('.form_content.user_register .content_body section#block-system-main .content form').submit(function() {
        let $form_register = $(this);
        if($form_register.find('.form-item.form-item-name input').val() === ''){
            $form_register.find('.form-item.form-item-name').addClass('error-act');
            if($form_register.find('.form-item.form-item-name').find('.error_msg').length == 0){
                $msg = 'Введите имя.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_register.find('.form-item.form-item-name').append($html);
            }
        }
        else{
            $form_register.find('.form-item.form-item-name').removeClass('error-act');
            $form_register.find('.form-item.form-item-name').find('.error_msg').remove();
        }

        if($form_register.find('.form-item.form-item-mail input').val() === ''){
            $form_register.find('.form-item.form-item-mail').addClass('error-act');
            if($form_register.find('.form-item.form-item-mail').find('.error_msg').length == 0){
                $msg = 'Введите адрес электронной почты.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_register.find('.form-item.form-item-mail').append($html);
            }
        }
        else{
            $form_register.find('.form-item.form-item-mail').removeClass('error-act');
            $form_register.find('.form-item.form-item-mail').find('.error_msg').remove();
        }

        if($form_register.find('.form-item.form-item-pass-pass1 input').val() === ''){
            $form_register.find('.form-item.form-item-pass-pass1').addClass('error-act');
            if($form_register.find('.form-item.form-item-pass-pass1').find('.error_msg').length == 0){
                $msg = 'Введите пароль.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_register.find('.form-item.form-item-pass-pass1').append($html);
            }
        }
        else{
            $form_register.find('.form-item.form-item-pass-pass1').removeClass('error-act');
            $form_register.find('.form-item.form-item-pass-pass1').find('.error_msg').remove();
        }

        if($form_register.find('.form-item.form-item-pass-pass2 input').val() === ''){
            $form_register.find('.form-item.form-item-pass-pass2').addClass('error-act');
            if($form_register.find('.form-item.form-item-pass-pass2').find('.error_msg').length == 0){
                $msg = 'Введите подтверждение пароля.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_register.find('.form-item.form-item-pass-pass2').append($html);
            }
        }
        else{
            $form_register.find('.form-item.form-item-pass-pass2').removeClass('error-act');
            $form_register.find('.form-item.form-item-pass-pass2').find('.error_msg').remove();
        }

        if($form_register.find('.form-item.form-item-captcha-response input').val() === ''){
            $form_register.find('.form-item.form-item-captcha-response').addClass('error-act');
            if($form_register.find('.form-item.form-item-captcha-response').find('.error_msg').length == 0){
                $msg = 'Введите код с картинки.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_register.find('.form-item.form-item-captcha-response').append($html);
            }
        }
        else{
            $form_register.find('.form-item.form-item-captcha-response').removeClass('error-act');
            $form_register.find('.form-item.form-item-captcha-response').find('.error_msg').remove();
        }
        if(
            $form_register.find('.form-item.form-item-name input').val() === ''||
            $form_register.find('.form-item.form-item-mail input').val() === ''||
            $form_register.find('.form-item.form-item-pass-pass1 input').val() === ''||
            $form_register.find('.form-item.form-item-pass-pass2 input').val() === ''||
            $form_register.find('.form-item.form-item-captcha-response input').val() === ''
        ){
            return false;
        }
        else{
            return true;
        }
    });
    $('.form_content.user_password .content_body section#block-system-main .content form').submit(function() {
        let $form_password = $(this);

        if($form_password.find('.form-item.form-item-name input').val() === ''){
            if($form_password.find('.form-item.form-item-name').find('.error_msg').length == 0){
                $msg = 'Введите имя.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_password.find('.form-item.form-item-name').append($html);
            }
            $form_password.find('.form-item.form-item-name').addClass('error-act');
        }
        else{
            $form_password.find('.form-item.form-item-name').removeClass('error-act');
            $form_password.find('.form-item.form-item-name').find('.error_msg').remove();
        }

        if($form_password.find('.form-item.form-item-captcha-response input').val() === ''){
            if($form_password.find('.form-item.form-item-captcha-response').find('.error_msg').length == 0){
                $msg = 'Введите код с картинки.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_password.find('.form-item.form-item-captcha-response').append($html);
            }
            $form_password.find('.form-item.form-item-captcha-response').addClass('error-act');
        }
        else{
            $form_password.find('.form-item.form-item-captcha-response').removeClass('error-act');
            $form_password.find('.form-item.form-item-captcha-response').find('.error_msg').remove();
        }

        if(
            $form_password.find('.form-item.form-item-name input').val() === ''||
            $form_password.find('.form-item.form-item-captcha-response input').val() === ''
        ){
            return false;
        }
        else{
            return true;
        }
    });
    $('.form_content.user_login .content_body section#block-system-main .content form').submit(function() {
        let $form_login = $(this);
        if($form_login.find('.form-item.form-item-name input').val() === ''){
            $form_login.find('.form-item.form-item-name').addClass('error-act');
            if($form_login.find('.form-item.form-item-name').find('.error_msg').length == 0){
                $msg = 'Введите имя.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_login.find('.form-item.form-item-name').append($html);
            }
        }
        else{
            $form_login.find('.form-item.form-item-name').removeClass('error-act');
            $form_login.find('.form-item.form-item-name').find('.error_msg').remove();
        }

        if($form_login.find('.form-item.form-item-pass input').val() === ''){
            $form_login.find('.form-item.form-item-pass').addClass('error-act');
            if($form_login.find('.form-item.form-item-pass').find('.error_msg').length == 0){
                $msg = 'Введите пароль.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_login.find('.form-item.form-item-pass').append($html);
            }
        }
        else{
            $form_login.find('.form-item.form-item-pass').removeClass('error-act');
            $form_login.find('.form-item.form-item-pass').find('.error_msg').remove();
        }

        if($form_login.find('.form-item.form-item-captcha-response input').val() === ''){
            $form_login.find('.form-item.form-item-captcha-response').addClass('error-act');
            if($form_login.find('.form-item.form-item-captcha-response').find('.error_msg').length == 0){
                $msg = 'Введите код с картинки.';
                let $html = '<div class="error_msg"><span class="error_svg_contain"><svg aria-hidden="true" class="error_svg" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>'+$msg+'</div>';
                $form_login.find('.form-item.form-item-captcha-response').append($html);
            }
        }
        else{
            $form_login.find('.form-item.form-item-captcha-response').removeClass('error-act');
            $form_login.find('.form-item.form-item-captcha-response').find('.error_msg').remove();
        }

        if(
            $form_login.find('.form-item.form-item-name input').val() === ''||
            $form_login.find('.form-item.form-item-pass input').val() === ''||
            $form_login.find('.form-item.form-item-captcha-response input').val() === ''
        ){
            return false;
        }
        else{
            return true;
        }
    });
    $('.grid_list_btn .view-btn').each(function () {
       let $this = $(this);
       $this.on('click', function () {
          if($this.hasClass('list-view')){
              $('.orders div#order_grid_list').removeClass('grid-view');
              $('.orders div#order_grid_list').removeClass('list-view');
              $('.orders div#order_grid_list').addClass('list-view');
              $('.grid_list_btn .view-btn').removeClass('active');
              $this.addClass('active');
          }else if ($this.hasClass('grid-view')){
              $('.orders div#order_grid_list').removeClass('grid-view');
              $('.orders div#order_grid_list').removeClass('list-view');
              $('.orders div#order_grid_list').addClass('grid-view');
              $('.grid_list_btn .view-btn').removeClass('active');
              $this.addClass('active');
          }
       });
    });
})