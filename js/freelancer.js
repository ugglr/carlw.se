(function($) {
    "use strict"; // Start of use strict
  
  
    // Modal popup$(function () {
    $('.portfolio-item').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    $(document).on('click', '.portfolio-modal-dismiss', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  

  
  })(jQuery); // End of use strict