//= partials/helper.js
$('.sh-menu').on('click', function(){
	$('.menu').toggleClass('wmin');
	$('.submenu').hide();
})
$('.sub').on('click', function () {
	var sm = $(this).siblings('.submenu')
	if ($('.menu').hasClass('wmin')) {
		$('.menu').removeClass('wmin');
		sm.show();
	}else{
		if (sm.is(":hidden")){
			sm.slideDown('fast');
		} else {
		    sm.slideUp('fast');
		}
	}
})