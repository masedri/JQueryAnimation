$('document').ready(function() {

	function ocultar(){
		$(this).fadeOut(1000);
	}


	$('#js').click(ocultar);


	$('#html5').click(function(){
		$(this).animate({
			width: "400px"
		}, 1000, "swing", ocultar);
	});

	$('#css3').click(function() {
		$(this).animate({
			width: "200px"
		}, 1000, "linear", ocultar);
	});

	$('#bootstrap').click(function(){
		$(this).slideUp(1000, function(){
			$(this).slideDown(1000, ocultar);
		});
	});

	$('#angular').click(function() {
		$(this).animate({
			width: "600px"
		}, 1000, "swing", function() {
			$(this).animate({
				height: "350px"
			}, 1000, "linear", ocultar);
		});
	});

	$('#polymer').click(ocultar);


	$('#jquery').click(function(){
		$(this).animate({
			width: "400px"
		}, 1000, "swing", ocultar);
	});

	$('#nodejs').click(function() {
		$(this).animate({
			width: "200px"
		}, 1000, "linear", ocultar);
	});

	$('#mongodb').click(function(){
		$(this).slideUp(1000, function(){
			$(this).slideDown(1000, ocultar);
		});
	});

	$('#react').click(function() {
		$(this).animate({
			width: "600px"
		}, 1000, "swing", function() {
			$(this).animate({
				height: "350px"
			}, 1000, "linear", ocultar);
		});
	});

});