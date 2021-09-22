
$( document ).ready(function() {
	$(window).on("resize", function () {
		if ($(window).width() > 974) {		
			$(".header-images").css("height",$(".header-text").height());
			$(".man-feet-container").css("height",$(".battle-height").height());
		}else{
			$(".header-images").removeAttr("style");
			$(".man-feet-container").removeAttr("style");
		}
		
	}).resize();
	
	$('.menu-item').on('click', function(event) { 
		$('#navbar-collapse-1').collapse('hide');
	});
	
});