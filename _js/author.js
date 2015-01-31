$(document).ready(function() {
	// function link_click(event) {
	// 	event.preventDefault(); //thanks we'll take it from here

	// 	$('#mainmenu a').removeClass('selected');
	// 	$(this).addClass('selected');
	// }
		
	// $('#mainmenu a').click(link_click);


	/*

	function load_page(path, callback) {
	$('#theTarget .nest').load(path, callback);

	}
	//Slideshow
	$(' #mainmenu a:eq(0)').click(function() {
		load_page('1-slideshow.html  #slideshow', slideme);
	});
		
	//Lightbox
	$(' #mainmenu a:eq(1)').click(function() {
		load_page('2-lightbox.html  #lightbox', lightme);
	});

	//Rollover
	$(' #mainmenu a:eq(2)').click(function() {
		load_page('3-rollovers.html  #rollovers');
	});

	//Swap
	$(' #mainmenu a:eq(3)').click(function() {
		load_page('4-swap.html  #swap');
	});

	//Tabbed
	$(' #mainmenu a:eq(4)').click(function() {
		load_page('5-tabbed.html  #tabbed');
	}); 

	*/

	/*/////////////////SLIDESHOW*/////////////////////

	function slideme() {
	var slideshow = $('#slideshow');

	function slideshow_fade() 
	{
		lastimg = slideshow.find('img:last');

		lastimg.delay(2000).animate({'opacity':'0'},1000, function()
		{
			lastimg.prependTo(slideshow).css({'opacity':'1'});
			slideshow_fade();
		});
	}

	slideshow_fade();
}

	/*/////////////////LIGHTBOX*/////////////////////

	function lightme() {

	var lightbox = $('#lightbox');

	lightbox.find('.images img').click(function(){
		var theSrc = $(this).attr('src');
		lightbox.find('.light img').attr('src',theSrc);
		lightbox.find('.light').show();
		lightbox.find('.dark').show();
	});

	lightbox.find('.dark, .light button').click(function(){
		lightbox.find('.light').hide();
		lightbox.find('.dark').hide();
	});
}


}); /* this is where doc ready ends*/