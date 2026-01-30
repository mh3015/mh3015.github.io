/*-----------------------------------------------------------------------------------*/
/*   Product - /products/
/*-----------------------------------------------------------------------------------*/
// Custom Size
$(document).ready(function(){
    $('.size-option select').change(function(){

        if($(this).val() == 'custom')
        {
			$('.custom-size-wrapper').show();
        }
		else {
			$('.custom-size-wrapper').hide();

		}
    });
})


// Qty 더보기
$(document).ready(function() {
    $('.quantity-wrapper .show-more').click(function() {
        $(this).hide().siblings('.qty-detail').show();
    });
});

// Qty Select
$(document).ready(function() {
    $('.quantity-wrapper .qty-detail').click(function() {
    	if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }

        else {
            $(this).addClass('selected');
            $(this).siblings('.qty-detail').removeClass('selected');
        }
    });
}, false);



// 프로덕트폼 모바일일때 append
$(document).ready(function (){
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 991) {
            // Title
            // $('.product-option-wrapper .item-title').clone().appendTo('.mb-title-wrapper');
            $('.product-option-wrapper .item-title').appendTo('.mb-title-wrapper');

            // Product Detail
            $('.left-item .product-detail-wrapper').appendTo('.mb-product-detail-container > div');
        }
        else if (windowsize > 992) {
            // Title
            $('.mb-title-wrapper .item-title').prependTo('.product-option-wrapper .right-item .sticky');

            // Product Detail
            $('.mb-product-detail-container > div .product-detail-wrapper').appendTo('.left-item');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

// 프로덕트폼 모바일일때 append
$(document).ready(function (){
    $('.pd-ad-default-wrapper .img-block').clone().appendTo('.pd-ad-default-wrapper .mb-img-wrapper');
});



// Templates image line
$(".linked-bleed").mouseenter(function() {
    $(".tp-img").addClass("bleed-enter");
});
$(".linked-bleed").mouseleave(function() {
    $(".tp-img").removeClass("bleed-enter");
});

$(".linked-trim").mouseenter(function() {
    $(".tp-img").addClass("trim-enter");
});
$(".linked-trim").mouseleave(function() {
    $(".tp-img").removeClass("trim-enter");
});

$(".linked-safe").mouseenter(function() {
    $(".tp-img").addClass("safe-enter");
});
$(".linked-safe").mouseleave(function() {
    $(".tp-img").removeClass("safe-enter");
});

// Image Zoom
// $(document).ready(function(){
//     $('.mainimage').zoom();
// });




$(document).ready(function() {

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    return $(
      '<div style="' + $(state.element).data('style') + '"> ' + state.text + '</div>'
    );
  };

  $('.select2.round').select2({
    templateResult: formatState
  });

});
