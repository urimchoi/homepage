
// set variables

// -- set viewport height and width when entering the page
var vph = $(window).height(),
	vpw = $(window).width();

// -- set variable to use later
var moreaboutme_contentHeight = null,
	i = 1,
	setScale = 1516,
	scale = null,
	slideIconIndex = null;



$(window).load(function() {

	// -- set object variables
	var $containers = $('#splash_container, #aboutme_container, #skills_container, #experience_container, #connect_container'),
		$projectDescription = $('.description');
	
	// Check container size and alignment
	// -- vertically align the content within each section when the page loads
	$containers.each(function() {
		$(this).css({'margin-top':$(this).height() / -2});

	// -- sets minimum height of the section when the browser height is less than the content height
		$(this).parent().css({'min-height':$(this).height() + 150});
	});

	// vertically align the content within each section when the page loads
	$containers.each(function() {
		$(this).css({'margin-top':$(this).height() / -2});

		// sets minimum height of the section when the browser height is less than the content height
		$(this).parent().css({'min-height':$(this).height() + 150});
	});

	// Section resize based on the browser height - vph is established at the beginning of the doc

	$('section').each(function() {
		$(this).css({'height':vph+'px'});
	});

	// vertical and horizontal alignment of the experience section items
	$projectDescription.each(function() {
		$(this).css({'margin-top':$(this).height() / -2,'margin-left':$(this).width() / -2});
	});
	
	// mouseover effects for instagram photos - must be done after load because .instagram-placeholders will not exist at $.ready
	$('.instagram-placeholder').mouseenter(function() {

	// -- for all items with in this class that isn't the one you moused over, reduce their opacity to 60%
		$('.instagram-placeholder').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	$('.instagram-placeholder').mouseleave(function() {

	// -- when the mouse leaves the element, return all other elements within the class to 100% opacity
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
	$('#moreaboutme_content').css({'width':vpw * $('.slide').length, 'left':-(vpw * slideIconIndex)});

	$('.slide').each(function() {
			$(this).css({'width':vpw});

	// rescale timeline map
	$('#world_map_animation').css({'-webkit-transform':'scale('+(vpw / setScale)+','+(vpw / setScale)+')'});

	});
});


$(document).ready(function() {	

	// align the moreaboutme slides
	// -- sets the moreaboutme_content width to the combined width of all slides
	$('#moreaboutme_content').css({'width':vpw * $('.slide').length});

	// sets the formatting for each slide within the moreaboutme section
	$('.slide').each(function() {

	// -- each slide's width is changed to fit the screen from side to side
		$(this).css({'width':vpw});

	// -- create slide icons for each slide created
		$('#slide_icon_wrapper').append('<div class="ball"></div>');
	});

	// switch slides based on the slide icon clicked
	$('.ball').click(function() {
		slideIconIndex = $(this).index();
		slideLeftPosition = $('.slide').eq(slideIconIndex).position().left;

		// if you click on a slide icon other than the first one then...
		if (slideLeftPosition > 0) {

		// -- shift the moreaboutme_content box to the left by the product of the screen width and the icon's index number
			$('#moreaboutme_content').animate({left:-(vpw * slideIconIndex)+'px'}, 500);
		} 
		// if you click on the first slide icon then...
		else if (slideLeftPosition === 0) {

		// -- shift the moreaboutme_content box back to its initial state
			$('#moreaboutme_content').animate({left:'0px'}, 500);
		} 

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


	// about me items hover effect

	// -- effect when mouse is over icon
	$('#publications li').mouseenter(function() {
		$('#publications li').not($(this)).stop().animate({'opacity':'0.6'}, 100);
	});

	// -- effect when mouse leaves the icon
	$('#publications li').mouseleave(function() {
		$('#publications li').stop().animate({'opacity':'1'}, 500);
	});

	// scrollTo plugin setup

	// if you click on the page_down element
	$('#page_down').click(function() {

	// -- and if you're at the last slide of the website...
		if (i === $('section').length)
		{
	// -- -- reset the var i to 1
			i = 1;
		}
	// -- take the page back to the first slide
		$(document).scrollTo('section:eq('+i+')', 800, {easing:'easeInOutQuart'});
		
	});

	// when you click on the link elements within the top nav...
	$('.links').click(function() {
	// -- scroll the the slide that has the same index value as the element you clicked
		$(document).scrollTo('section:eq('+($(this).index()+1)+')', 800, {easing:'easeInOutQuart'});
	});

	// instagram jQuery plugin

	var clientId = '535977850dd04208a6a1c0bc2a2e37ec';
	$(".instagram").instagram({
		hash: 'urimchoi',
		image_size: 'high_resolution',
		show: 3,
		clientId: clientId
	});

	// more about me button effect

	var x = 1;


	// -- when you click on the more about me button...
	$('#moreaboutme').click(function() {

	// -- -- if in the initial state
		if (x === 1)
		{

	// -- -- -- the moreaboutme_content element will slide down
			$('#moreaboutme_content').slideDown(500, function() {	

	// -- -- -- after the slide down is complete

	// -- -- -- -- change the + to a -
				$('#moreaboutme .description').html('&#8212;');

	// -- -- -- -- set the var once the page loads
				moreaboutme_contentHeight = $('.slide').eq(0).height();

	// -- -- -- -- set the moreaboutme_content height to the to match the height of the first slide element
				$('#moreaboutme_content').css({'height':moreaboutme_contentHeight+'px'});

	// -- -- -- -- for the section element aboutme, set the min height to match the height of acoutme_container
		  		$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
	// -- -- -- -- for aboutme_container, vertically align the element in the middle using negative margins
				$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
			});

	// -- -- -- increase the value of x
			x++;
		}


	// -- -- if in the on state
		else if (x === 2)
		{
	// -- -- -- the moreaboutme_content element will slide up
			$('#moreaboutme_content').slideUp(500, function() {

	// -- -- -- -- change the - to a +
				$('#moreaboutme .description').html('+');
	// -- -- -- -- for the section element aboutme, set the min height to match the height of acoutme_container
		  		$('#aboutme_container').parent().animate({'min-height':$('#aboutme_container').height() + 150}, 500);
	// -- -- -- -- for aboutme_container, vertically align the element in the middle using negative margins
				$('#aboutme_container').animate({'margin-top':$('#aboutme_container').height() / -2}, 500);
			});
	// -- -- -- decrease the value of x back to 1
			x--;
		}

	});

});

$(window).scroll(function() {

	// at each croll event, update the values of these variables
	var windowScrollTop = $(window).scrollTop(),
		splashHeight = $('#splash').height(),
		aboutmeHeight = $('#aboutme').height(),
		skillsHeight = $('#skills').height(),
		experienceHeight = $('#skills').height();

	// if the top scroll position is within the splash section
	if (windowScrollTop < splashHeight)
	{
		i = 1;
		$('#nav').slideUp(500);
	}

	// if the top scroll position is within the first section
	else if (windowScrollTop >= splashHeight && windowScrollTop < splashHeight + aboutmeHeight)
	{
		i = 2;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
	}

	// if the top scroll position is within the second section
	else if (windowScrollTop >= splashHeight + aboutmeHeight && windowScrollTop < splashHeight + aboutmeHeight + skillsHeight)
	{
		i = 3;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
	}

	// if the top scroll position is within the third section
	else if (windowScrollTop >= splashHeight + aboutmeHeight + skillsHeight && windowScrollTop < splashHeight + aboutmeHeight + skillsHeight + experienceHeight)
	{
		i = 4;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
	}

	// if the top scroll position is within the fourth section
	else if (windowScrollTop >= splashHeight + aboutmeHeight + skillsHeight + experienceHeight)
	{
		i = 5;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
	}

	// if the top scroll position is outside of the splash section, bring down the nav bar
	if (windowScrollTop >= splashHeight)
	{
		$('#nav').slideDown(500);
	}

	// if the top scroll position is within the last section
	if (i === 5)
	{
	// -- switch the arrow to the page_up icon
		$('#page_down').attr('id', 'page_up');
	}
	// otherwise
	else
	{
	// -- show the page_down icon
		$('#page_up').attr('id', 'page_down');
	}

});

