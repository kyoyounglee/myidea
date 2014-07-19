$(document).ready(function(){
	$(".sidemenu").square_menu({
    flyDirection: "bottom", // The direction where the menu will fly from. Available options are "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right". The default value is "bottom".
    button: false, // You can define text inside the auto-generated button here. If you want to prevent the plugin from generating a menu button, change this to false. The default value is "Menu".
    animationStyle: "vertical", // The type of animation style you will see after it flew in. Available options are "vertical" which expands vertically and "horizontal" which expands horizontally. Vertical works best with "top" or "bottom" flyDirection whereas Horizontal works best with "left" or "right" flyDirection. The default value is "vertical".
    closeButton: "x" // You can define the content of the close button appears after animates are completed here. Change this to false to hide the close button. The default value is X.
});

	$(".sm-button").click(function(){
		$my_audio = $('audio')[0];
		if($my_audio.paused==true) $my_audio.play();
	});

	$(".sidemenu").closeMenu();

	$("#home-click").click(function(){
		$('#home').show();
		$('#aboutme').hide();
		$('#travel').hide();
		$('#travel2').hide();

	});

	$("#aboutme-click").click(function(){
		$('#home').hide();
		$('#aboutme').show();
		$('#travel').hide();
		$('#travel2').hide();

	});

	$(".travel-click").click(function(){
		$('#travel').show();
		$('#aboutme').hide();
		$('#home').hide();
		$('#travel2').hide();
	});

		$("#travel2-click").click(function(){
		$('#travel2').show();
		$('#travel').hide();
		$('#aboutme').hide();
		$('#home').hide();
	});


});