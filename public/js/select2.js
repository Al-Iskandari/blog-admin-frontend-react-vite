(function($) {
  'use strict';

  if ($(".js-example-basic-single").length) {
    $(".js-example-basic-single").select2();

    // eslint-disable-next-line no-unused-vars
    $('.js-example-basic-single').on("select2:select", function (e) {
      //alert($('.js-example-basic-single').select2().val());
      $('select[name=status]').val($('.js-example-basic-single').select2().val());
    });
  }
  if ($(".js-example-basic-multiple").length) {
    $(".js-example-basic-multiple").select2();
  }
// eslint-disable-next-line no-undef
})(jQuery);