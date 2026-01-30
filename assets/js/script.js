// Tootip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


/*-----------------------------------------------------------------------------------*/
/*   Category Menu - /include/topmenu.asp
/*-----------------------------------------------------------------------------------*/
// 반응형 대비
$(document).ready(function (){
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 991) {
            $('.category-title').unbind('mouseenter mouseleave');
        }
        else if (windowsize > 992) {
            $('.main-category-container nav > ul > li').mouseenter(function() {
                // $('.main-nav').addClass('all-category-on');
                // $(this).addClass('on').delay(1000).queue();

                setTimeout(function(){
                    $('.main-category-container').addClass('on');
                }, 10)
				$(this).children('.category-title').addClass('active');
                $(this).children('.category-inner-wrapper').show();
                // $(this).children('.category-inner-wrapper').children('div').stop().slideDown(250);
                $('.opened-category-bg').stop().fadeIn();
            });

            setTimeout(function () {
                $('.main-category-container nav > ul > li').mouseleave(function() {
                    // $('.main-nav').removeClass('all-category-on');
                    $('.main-category-container').removeClass('on');
					$(this).children('.category-title').removeClass('active');
                    $(this).children('.category-inner-wrapper').hide();
                    // $(this).children('.category-inner-wrapper').children('div').stop().slideUp(250);
                    $('.opened-category-bg').stop().fadeOut();
                });
            }, 300);
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});




/*-----------------------------------------------------------------------------------*/
/*   Mobile Top Menu - /include/topmenu.asp
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	$('.menu-icon .menu-icon__cheeckbox').change(function(){
        if($(this).is(':checked')) {
            $(this).parents('.menu-icon').addClass('on');
            $('.main-category-container').addClass('opend').show('slide', { direction: 'left' }, 400);
            $('.mb-mobile-category-bg').fadeIn();
            $('body').css('overflow', 'hidden');
        } else {
            $(this).parents('.menu-icon').removeClass('on');
            $('.main-category-container').removeClass('opend').hide('slide', { direction: 'left' }, 400);
            $('.mb-mobile-category-bg').fadeOut();
            $('body').css({'overflow': 'unset', 'overflow-x': 'hidden'});
        }
    });
});

$(document).ready(function() {
    $('.category-title').click(function() {
    	if ($(this).parent('li').hasClass('on')) {
            $(this).parent('li').removeClass('on');
        }

        else {
            $(this).parent('li').addClass('on');
            $(this).parent('li').siblings('li').removeClass('on');

            e.preventDefault();
            $('.main-category-container nav').animate({
              scrollTop: $(this).offset().top - 80
            }, 300);
        }
    });
}, false);




/*-----------------------------------------------------------------------------------*/
/*   Select 2
/*-----------------------------------------------------------------------------------*/
$('.select2').select2({
    width: 'resolve',
    minimumResultsForSearch: Infinity
});

$('.select2.search').select2();



/*-----------------------------------------------------------------------------------*/
/*   App Plugin
/*-----------------------------------------------------------------------------------*/
"use strict";

var app_plugins = {
    bootstrap_select: function(){
        if($(".bs-select").length > 0)
           $(".bs-select").selectpicker({iconBase: '', tickIcon: 'fa fa-check'});
    },
    select2: function(){
        if($(".s2-select").length > 0){
           $(".s2-select").select2({minimumResultsForSearch: Infinity});
        }
        if($(".s2-select-search").length > 0){
           $(".s2-select-search").select2();
        }
        if($(".s2-select-tags").length > 0){
           $(".s2-select-tags").select2({tags: true});
        }
        if($('.modal .s2-select-search').length > 0){
           $('.modal .s2-select-search').select2({
                dropdownParent: $('.modal')
            });
        }
		// if($('#inqury-writing .s2-select').length > 0){
        //    $('#inqury-writing .s2-select').select2({
        //         minimumResultsForSearch: Infinity,
        //         dropdownParent: $('#inqury-writing')
        //     });
        // }
        // if($('.inquiry-form .s2-select').length > 0){
        //    $('.inquiry-form .s2-select').select2({
        //         minimumResultsForSearch: Infinity,
        //         dropdownParent: $('.inquiry-form')
        //     });
        // }
    },
	checkbox_radio: function(){
        if($(".app-checkbox").length > 0 || $(".app-radio").length > 0){
            $(".app-checkbox label, .app-radio label").each(function(){
                $(this).append("<span></span>");
            });
        }
    },
    loaded: function(){
        app_plugins.bootstrap_select();
        app_plugins.select2();
		app_plugins.checkbox_radio();
    }
};

$(function(){
    app_plugins.loaded();
});


/*-----------------------------------------------------------------------------------*/
/*   Checkout Blind Shipping - /checkout/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	$('#blind_shpping_chk').change(function() {
        if($(this).is(':checked')) {
            $('.blind-shipping-info').show();
        } else {
            $('.blind-shipping-info').hide();
        }
    });
});





/*-----------------------------------------------------------------------------------*/
/*   아이디 저장 - /login/
/*-----------------------------------------------------------------------------------*/
$(function (){
    // 로그인 폼 초기화
    init();

    function init() {
        const saveId = getCookie('saveId');

        // 쿠키에 저장된 아이디가 있을 경우, ID input 값 추가
        if(saveId != '' && typeof(saveId) != 'undefined'){
            $('#save_id').prop('checked', true);
            $('#user_id').val(saveId);
        } else { // 쿠키에 저장된 아이디 값이 없을 경우, 체크 해제
            $('#save_id').prop('checked', false);
        }
    }
});

// 쿠키 조회
// name: 쿠키 값
function getCookie(name) {
    const cookie = document.cookie;
    if (document.cookie != '') {
        var cookieArray = cookie.split(';');
        for (var index in cookieArray) {
            var cookieName = cookieArray[index].split('=');
            if(cookieName[0] == name) {
                return cookieName[1];
            }
        }
    } return;
}

// 로그인 시 ID 저장 체크박스 여부에 따라 쿠키값 설정
// 로그인 form submit events
$('#login_form').submit(function () {
    let usrInfo = $(this).serializeObject();

    axios.post('/login', usrInfo)
    .then(response =>{
        if($('#save_id').prop('checked')) { // 체크 시 쿠키에 ID 저장
            setCookie('saveId', $('#user_id').val(), 7) // 7일간 ID 저장
        } else { // 체크 해제 시 쿠키에서 ID 삭제
            deleteCookie('saveId');
        }


        window.location.href = '/';
    })

    .catch(error =>{
        alert(error.response.data);
    });

    return false;
});


// 쿠키 설정
// name: 쿠키명
// value: 쿠키값
// expiredays: 쿠키 만료일
function setCookie(name, value, expiredays) {
    const date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + '=' + escape(value) + "; path=/; expires=" + date.toUTCString();
}

// 쿠키 삭제
// name: 쿠키명
function deleteCookie(name) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = name + '=' + escape(value) + "; expires=" + expireDate.toGTMString();
}


/*-----------------------------------------------------------------------------------*/
/*   Reset Password - /login/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('.btn-find-psw').click(function() {
        $('.login-wrapper').hide();
        $('.find-pw-wrapper').show();
    });

    $('.btn-to-login').click(function() {
        $('.login-wrapper').show();
        $('.find-pw-wrapper').hide();
    });
});




/*-----------------------------------------------------------------------------------*/
/*   Password visible - /registration/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $(".show-password, .hide-password").on('click', function() {
        var passwordId = $(this).parents('.form-floating').find('input').attr('id');
        if ($(this).hasClass('show-password')) {
            $("#" + passwordId).attr("type", "text");
            $(this).parent().find(".show-password").hide();
            $(this).parent().find(".hide-password").show();
        } else {
            $("#" + passwordId).attr("type", "password");
            $(this).parent().find(".hide-password").hide();
            $(this).parent().find(".show-password").show();
        }
    });
});



/*-----------------------------------------------------------------------------------*/
/*   Password strength - /registration/
/*-----------------------------------------------------------------------------------*/
var password_pass_length = true;
var password_pass_uppercase = true;
var password_pass_number = true;
var password_all_pass = true;
var confirm_password_pass = true;
$(document).ready(function() {
    var validateInput = $('input.validate');

    function validateInputs() {
        var password = $('.reg_password').val(),
            conf = $('.reg_confirm_password').val()
            //password_all_pass = true;

        var uppercase = password.match(/[a-z]/) && password.match(/[A-Z]/),
            number = password.match(/[0-9]/);

        if (password.length < 8) {
            $('.password_length').removeClass('complete');
            password_pass_length = false;
        } else {
            $('.password_length').addClass('complete');
            password_pass_length = true;
        }

        if (uppercase) {
            $('.password_uppercase').addClass('complete');
            password_pass_uppercase = true;
        }

        else {
            $('.password_uppercase').removeClass('complete');
            password_pass_uppercase = false;
        }

        if (number) {
            $('.password_number').addClass('complete');
            password_pass_number = true;
        }

        else {
            $('.password_number').removeClass('complete');
            password_pass_number = false
        }

        if (password_pass_length && password_pass_uppercase && password_pass_number) {
            password_all_pass = true;
        }
        else {
            password_all_pass = false
        }

        if (password == conf && password != '') {
            $('.password_match').addClass('complete');
            confirm_password_pass = true;
        }
        else {
            $('.password_match').removeClass('complete')
            confirm_password_pass = false;
        }

        $('.reg_password').blur(function(){
            $('.password_length').addClass('on');
            $('.password_uppercase').addClass('on');
            $('.password_number').addClass('on');
        });

        $('.reg_confirm_password').blur(function(){
            $('.password_match').addClass('on');
        });

    }

    validateInput.each(validateInputs).on('keyup', validateInputs);
});




/*-----------------------------------------------------------------------------------*/
/*   Back to Top Scroll - /include/footer.asp
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    if ($('#go-to-top').length) {
        var scrollTrigger = 100, // px
            goToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#go-to-top').addClass('show');
                } else {
                    $('#go-to-top').removeClass('show');
                }
            };
        goToTop();
        $(window).on('scroll', function () {
            goToTop();
        });
        $('#go-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 100);
        });
    }
});


/*-----------------------------------------------------------------------------------*/
/*   Basic Modal
/*-----------------------------------------------------------------------------------*/

function modal_show(m_class,m_title,m_body,btn_submit,submit_url,btn_close) {

    $("."+m_class+" .modal-title").html(m_title);
    $("."+m_class+" .modal-body p").html(m_body);
    if (btn_submit == ""){
        $("."+m_class+" .modal-footer .modal_submit").hide();
    }
    else{
        $("."+m_class+" .modal-footer .modal_submit").show();
        $("."+m_class+" .modal-footer .modal_submit").html(btn_submit);
    }
    if (submit_url == ""){
        $("."+m_class+" .modal-footer .modal_submit").attr("onClick","");
    }
    else{
        $("."+m_class+" .modal-footer .modal_submit").attr("onClick",submit_url);
    }
    $("."+m_class+" .modal-footer .modal_close").html(btn_close);
    $("."+m_class+" .modal-footer .modal_close").attr("modal_class",m_class);
    $("."+m_class+"").modal("show");
}

$(document).ready(function() {

    $('.modal_close').on('click',function(){
        $("."+$(this).attr("modal_class")).modal("hide");
     });
});
/*-----------------------------------------------------------------------------------*/
/*   COPYRIGHT - /include/footer.asp
/*-----------------------------------------------------------------------------------*/
$('.copyright-wrapper').append('COPYRIGHT© 2024, 2025 Indiorder. All right reserved.');





/*-----------------------------------------------------------------------------------*/
/*   Mobile Nav - /customer/orders/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('.account_nav_trigger').on('click', function() {
        if ($('.account-nav').hasClass('hidden_nav')) {
            $('.account-nav').removeClass('hidden_nav');
        } else {
            $('.account-nav').addClass('hidden_nav');
        }
    });
});






/*-----------------------------------------------------------------------------------*/
/*   Content Block Show,hide - /customer/orders/detail/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('.item-dp-wrapper').on('click', function() {
        if ($(this).hasClass('shown-contents')) {
            $(this).removeClass('shown-contents');
            $(this).addClass('hidden-contents');
            $(this).siblings('.contents').hide();
        } else {
            $(this).addClass('shown-contents');
            $(this).removeClass('hidden-contents');
            $(this).siblings('.contents').show();
        }
    });
});





$(function() {
    //input을 datepicker로 선언
    $('.datepicker').datepicker({
        dateFormat: 'mm-dd-yy' //달력 날짜 형태
        ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        // ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
        ,changeYear: true //option값 년 선택 가능
        ,changeMonth: true //option값  월 선택 가능
        // ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        // ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
        // ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
        // ,buttonText: "선택" //버튼 호버 텍스트
        // ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
        // ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
        // ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
        ,dayNames: ['SUN','MON','TUE','WED','THU','FRI','SAT']
        ,dayNamesShort: ['SUN','MON','TUE','WED','THU','FRI','SAT']
        ,dayNamesMin: ['SUN','MON','TUE','WED','THU','FRI','SAT'] //달력의 요일 텍스트
        // ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
        ,minDate: "-10Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "+10y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        ,clearBtn: true
    }).on('show', function(e) {
        // datepicker가 나타날 때 커스텀 클래스 추가
        // $('.datepicker-switch').addClass('custom-class');
        $('.datepicker-switch').each(function() {
            // 중복 방지를 위해 아이콘이 없는 경우에만 추가
            if (!$(this).find('.xi-angle-right').length) {
                $(this).append('<i class="xi-angle-right f11 text-primary leftmargin-5" style="vertical-align: 3px;"></i>');
            }
        });
    });

    //초기값을 오늘 날짜로 설정해줘야 합니다.
    //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    $('#set_date').datepicker('setDate', '-5Y');
    $('#get_date').datepicker('setDate', 'today');

    // $('.datepicker').datepicker({
    //     beforeShow: function(input, inst) {
    //        $('.datepicker-switch').wrap('<span class="date"></span>');
    //    }
    // });
    $('.datepicker').datepicker({
       beforeShow: function(input, inst) {
           $('.datepicker-switch').removeClass(function() {
               return $('input').get(0).id;
           });
           $('#ui-datepicker-div').addClass(this.id);
       }
    });

});


// 한국어
// $(function() {
//     //input을 datepicker로 선언
//     $('.datepicker').datepicker({
//         dateFormat: 'yy-mm-dd' //달력 날짜 형태
//         ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
//         ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
//         ,changeYear: true //option값 년 선택 가능
//         ,changeMonth: true //option값  월 선택 가능
//         // ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
//         // ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
//         // ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
//         ,buttonText: "선택" //버튼 호버 텍스트
//         ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
//         ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
//         ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
//         ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
//         ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
//         ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
//         ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
//     });
//
//     //초기값을 오늘 날짜로 설정해줘야 합니다.
//     $('.datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
// });





/*-----------------------------------------------------------------------------------*/
/*   input Fields Clear - /customer/addresses/
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('.clear-all').on('click', function() {
        $('.contents input').val('');
    });
});
