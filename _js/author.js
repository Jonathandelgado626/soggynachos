
// Schedules a local notification to be triggered after 5 seconds
window.plugins.localNotification.add({
    fireDate        : Math.round(new Date().getTime()/1000 + 5),
    alertBody       : "This is a local notification.",
    action          : "View",
    repeatInterval  : "daily",
    soundName       : "beep.caf",
    badge           : 0,
    notificationId  : 123,
    foreground      : function(notificationId){ 
        alert("Hello World! This alert was triggered by notification " + notificationId); 
    },
    background  : function(notificationId){
        alert("Hello World! This alert was triggered by notification " + notificationId);
    }           
});

// cancel notificationId = 1234
window.plugins.localNotification.cancel(1234, callback);

// cancel all notifications
window.plugins.localNotification.cancelAll(callback);

// set badge number to 3
window.plugins.localNotification.setBadgeNumber(3);



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