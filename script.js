
var vph = $(window).height(),
	vpw = $(window).width(),
	moreaboutme_contentHeight = null,
	i = null,
	setScale = 1516,
	scale = null;

$(window).load(function() {
		// Check container size and alignment

	var $containers = $('#splash_container, #aboutme_container, #skills_container, #experience_container, #connect_container');

	// vertically align the content within each section when the page loads
	$containers.each(function() {
		$(this).css({'margin-top':$(this).height() / -2});

		// sets minimum height of the section when the browser height is less than the content height
		$(this).parent().css({'min-height':$(this).height() + 150});
	});

	// align the moreaboutme slides
	$('#moreaboutme_content').css({'width':vpw * $('.slide').length});

	$('.slide').each(function() {
		$(this).css({'width':vpw});

		// -- create slide icons for each slide created
		$('#slide_icon_wrapper').append('<div class="ball"></div>');
	});

	// switch slides based on the slide icon clicked
	$('.ball').click(function() {
		i = $(this).index()
			slideLeftPosition = $('.slide').eq(i).position().left;

		if (slideLeftPosition > 0) {
			$('#moreaboutme_content').animate({left:-(vpw * i)+'px'}, 500);
		} 
		else if (slideLeftPosition === 0) {
			$('#moreaboutme_content').animate({left:'0px'}, 500);
		} 

	});
	
	// mouseover effects for instagram photos - must be done after load because .instagram-placeholders will not exist at $.ready
	$('.instagram-placeholder').mouseenter(function() {
		$('.instagram-placeholder').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	$('.instagram-placeholder').mouseleave(function() {
		$('.instagram-placeholder').stop().animate({'opacity':'1'}, 500);
	});
});

$(window).resize(function() {

	vph = $(window).height();
	vpw = $(window).width();

	$('section').each(function() {
		$(this).css({'height':vph+'px'});
	});

	// setting the height of the moreaboutme section

	// -- set the var once the page loads
	moreaboutme_contentHeight = $('.slide').eq(1).height();

	// -- set the container to the moreaboutme content height
	$('#moreaboutme_content').css({'height':moreaboutme_contentHeight+'px'});

	// -- realign the moreaboutme slides
	$('#moreaboutme_content').css({'width':vpw * $('.slide').length, 'left':-(vpw * i)});

	$('.slide').each(function() {
			$(this).css({'width':vpw});

	// rescale timeline map
	$('#world_map_animation').css({'-webkit-transform':'scale('+(vpw / setScale)+','+(vpw / setScale)+')'});

	});
});

$(document).ready(function() {	
	var $containers = $('#splash_container, #aboutme_container, #skills_container, #experience_container, #connect_container');

	// vertically align the content within each section when the page loads
	$containers.each(function() {
		$(this).css({'margin-top':$(this).height() / -2});

		// sets minimum height of the section when the browser height is less than the content height
		$(this).parent().css({'min-height':$(this).height() + 150});
	});

	var $projectDescription = $('.description');

	// Section resize based on the browser height - vph is established at the beginning of the doc

	$('section').each(function() {
		$(this).css({'height':vph+'px'});
	});

	// vertical and horizontal alignment of the experience section items
	$projectDescription.each(function() {
		$(this).css({'margin-top':$(this).height() / -2,'margin-left':$(this).width() / -2});
	});

	// rescale timeline map
	$('#world_map_animation').css({'-webkit-transform':'scale('+(vpw / setScale)+','+(vpw / setScale)+')'});


	// connect button animation

	// -- effect when mouse is over icon
	$('.connect_icon li').mouseenter(function() {
		$('.connect_icon li').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	// -- effect when mouse leaves the icon
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
			$('#nav').slideUp(500);
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
			$('#nav').slideDown(500);
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
		image_size: 'high_resolution',
		show: 3,
		clientId: clientId
	});

	// more about me button effect

	var x = 1;

	$('#moreaboutme').click(function() {

		if (x === 1)
		{
			$('#moreaboutme_content').slideDown(500, function() {	

				// setting the height of the moreaboutme section

				// -- set the var once the page loads
				moreaboutme_contentHeight = $('.slide').eq(0).height();

				// -- set the container to the moreaboutme content height
				$('#moreaboutme_content').css({'height':moreaboutme_contentHeight+'px'});
				console.log(moreaboutme_contentHeight);

		  		$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
				$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
			});
			$('.info').each(function() {
				$(this).fadeIn(($(this).index() + 1) * 1000);
			});
			x++;
			$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
			$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
		}

		else if (x === 2)
		{
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

