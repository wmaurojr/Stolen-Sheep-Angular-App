jQuery(document).ready(function($){

	var logo = $('#logo');
	var logoContainer = $('#logoContainer');
	var logoMask = $('#logoColorMask');
	var nav = $('.nav');
	var navUl = $('.nav ul');

	logo.mouseenter(function(){
		logoMask.stop().animate({
			width: 0
		}, 400);
		setTimeout(function(){
			nav.stop().animate({
				width: '175px'
			}, 300);
			navUl.show();
		}, 400);
	})
	.mouseleave(function(){
		logoMask.stop().animate({
			width: '125px'
		}, 200);
	});

	logo.on('click', function(){
		nav.stop().animate({
			width: 0
		}, 300);
		setTimeout(function(){
			navUl.hide();
		}, 280);
	});

	// logo.mousedown(function(){
	// 	logoContainer.css({'background-color': '#58b6ff'});
	// })
	// .mouseup(function(){
	// 	logoContainer.css({'background-color': '#eee'});
	// });

});