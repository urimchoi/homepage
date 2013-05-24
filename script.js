$(window).load(function() {
		// Check container size and alignment

	var $containers = $('#aboutme_container, #skills_container, #experience_container, #connect_container'),
		$projectDescription = $('.description');
	$containers.each(function() {
		$(this).css({'margin-top':$(this).height() / -2});
		$(this).parent().css({'min-height':$(this).height() + 150});
	});
	$projectDescription.each(function() {
		$(this).css({'margin-top':$(this).height() / -2,'margin-left':$(this).width() / -2});
	});


	
	$('.instagram-placeholder').mouseenter(function() {
		$('.instagram-placeholder').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	$('.instagram-placeholder').mouseleave(function() {
		$('.instagram-placeholder').stop().animate({'opacity':'1'}, 500);
	});
});

$(window).resize(function() {
	var vph = $(window).height();

	$('section').each(function() {
		$(this).css({'height':vph+'px'});
	});
});

$(document).ready(function() {

	// Section resize

	var vph = $(window).height();

	$('section').each(function() {
		$(this).css({'height':vph+'px'});
	});

	// Skills section arrow animation

	arrowBlink('#arrow_down div');
	arrowBlink('#arrow_left div');
	arrowBlink('#arrow_right div');

	function arrowBlink(elem) {
		$(elem+':first-child').animate({'background-position-y':'-64px'}, 1, function(){
			$(elem+':first-child').delay(1000).animate({'background-position-y':'-25px'}, 1);
			$(elem+':nth-child(2)').delay(1000).animate({'background-position-y':'-64px'}, 1, function(){
				$(elem+':nth-child(2)').delay(1000).animate({'background-position-y':'-25px'}, 1);
				$(elem+':nth-child(3)').delay(1000).animate({'background-position-y':'-64px'}, 1, function(){
					$(elem+':nth-child(3)').delay(1000).animate({'background-position-y':'-25px'}, 1, function(){
						arrowBlink(elem);
					});
				});
			});
		});
	}

	// connect button animation

	$('.connect_icon li').mouseenter(function() {
		$('.connect_icon li').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	$('.connect_icon li').mouseleave(function() {
		$('.connect_icon li').stop().animate({'opacity':'1'}, 500);
	});

	// scrollTo plugin setup

	var i=1;

	$('#page_down').click(function() {
		if (i === $('section').length)
		{
			i = 1;
		}
		$(document).scrollTo('section:eq('+i+')', 800, {easing:'easeInOutQuart'});
		
	});

	$('.links').click(function() {
		$(document).scrollTo('section:eq('+($(this).index()+1)+')', 800, {easing:'easeInOutQuart'});
	});

	$(window).scroll(function() {

		var windowScrollTop = $(window).scrollTop(),
			splashHeight = $('#splash').height(),
			aboutmeHeight = $('#aboutme').height(),
			skillsHeight = $('#skills').height(),
			experienceHeight = $('#skills').height();

		if (windowScrollTop < splashHeight)
		{
			i = 1;
			$('#nav').css({'border-bottom':'none'}).slideUp(500);
		}
		else if (windowScrollTop >= splashHeight && windowScrollTop < splashHeight + aboutmeHeight)
		{
			i = 2;
			$('.links').eq(i-2).addClass('selected');
			$('.links').not($('.links').eq(i-2)).removeClass('selected');
		}

		else if (windowScrollTop >= splashHeight + aboutmeHeight && windowScrollTop < splashHeight + aboutmeHeight + skillsHeight)
		{
			i = 3;
			$('.links').eq(i-2).addClass('selected');
			$('.links').not($('.links').eq(i-2)).removeClass('selected');
		}

		else if (windowScrollTop >= splashHeight + aboutmeHeight + skillsHeight && windowScrollTop < splashHeight + aboutmeHeight + skillsHeight + experienceHeight)
		{
			i = 4;
			$('.links').eq(i-2).addClass('selected');
			$('.links').not($('.links').eq(i-2)).removeClass('selected');
		}

		else if (windowScrollTop >= splashHeight + aboutmeHeight + skillsHeight + experienceHeight)
		{
			i = 5;
			$('.links').eq(i-2).addClass('selected');
			$('.links').not($('.links').eq(i-2)).removeClass('selected');
		}

		if (windowScrollTop >= splashHeight && windowScrollTop <= $(document).height())
		{
			$('#nav').css({'border-bottom':'2px solid rgba(169,169,169,1)'}).slideDown(500);
		}

		if (i === 5)
		{
			$('#page_down').attr('id', 'page_up');
		}
		else
		{
			$('#page_up').attr('id', 'page_down');
		}

	});

	// instagram

	var clientId = '535977850dd04208a6a1c0bc2a2e37ec';
	$(".instagram").instagram({
		hash: 'urimchoi',
		image_size: 'low_resolution',
		show: 5,
		clientId: clientId
	});

	// more about me button effect

	var x = 1;

	$('#moreaboutme').click(function() {

		if (x === 1)
		{
			$(this).text('close');
			$('#moreaboutme_content').css({'display':'block'});
			$('.info').each(function() {
				$(this).fadeIn(($(this).index() + 1) * 1000);
			});
			x++;
			$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
			$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
		}

		else if (x === 2)
		{
			$(this).text('more about me');
			$('.info').stop().fadeOut(200);
			$('#moreaboutme_content').slideUp(500, function() {
		  		$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
				$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
			});
			x--;
		}

	});

	// about me items hover effect

	$('#publications li').mouseenter(function() {
		$('#publications li').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	$('#publications li').mouseleave(function() {
		$('#publications li').stop().animate({'opacity':'1'}, 500);
	});

});

