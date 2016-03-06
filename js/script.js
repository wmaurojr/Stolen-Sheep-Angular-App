jQuery(document).ready(function($) {

	var pD = $('a.preventDefault');

	pD.on('click', function(e){
		e.preventDefault();

	});

	var stolen = $('#stolen').airport(['Stolen']);

	setTimeout(function(){
		var sheep = $('#sheep').airport(['sheep']);
	}, 1200);
	
	setTimeout(function(){
		var design = $('#design').airport(['design']);
	}, 2400);
	

	$('#loader').delay(5000).fadeOut(1000);
	$('#logoContainer').delay(4800).fadeIn(1000);

});

