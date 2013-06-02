
// set variables

// -- set viewport height and width when entering the page
var vph = $(window).height(),
	vpw = $(window).width();

// -- set variable to use later
var moreaboutme_contentHeight = null,
	i = 1,
	setScale = 1516,
	scale = null,
	slideIconIndex = null,
	moreAboutMeShown = false;



sidePanelOpen = function() {

// -- -- -- the moreaboutme_content element will slide right
	$('#moreaboutme_container').stop().animate({'left':'0'}, 300, function() {
		moreAboutMeShown = true;
	});


	$('section').stop().animate({'left':'33%'}, 300);

}

sidePanelClose = function() {

// -- -- -- the moreaboutme_content element will slide left
		$('#moreaboutme_container').stop().animate({'left':'-33%'}, 300, function() {
			moreAboutMeShown = false;	
		});
		$('section').stop().animate({'left':'0px'}, 300);	

}


$(window).load(function() {

	// -- set object variables
	var $containers = $('#splash_container, #aboutme_container, #skills_container, #experience_container, #connect_container');
	
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
	$('.description').each(function() {
		$(this).css({'margin-top':$(this).height() / -2,'margin-left':$(this).width() / -2});
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
	moreaboutme_contentHeight = $('.slide').eq(0).height();

	// -- set the container to the moreaboutme content height
	$('#moreaboutme_content').css({'height':moreaboutme_contentHeight+'px'});

});


$(document).ready(function() {	

	// align the moreaboutme slides
	// -- sets the moreaboutme_content width to the combined width of all slides
	$('#moreaboutme_container').css({'left':'-33%'});

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
	$('.links').mouseenter(function() {
		$(this).children().stop().fadeIn(200);
	});

	// -- effect when mouse leaves the icon
	$('.links').mouseleave(function() {
		$(this).children().stop().fadeOut(200);
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
		$(document).scrollTo('section:eq('+i+')', 800, {axis:'y', easing:'easeInOutQuart'});
		
	});

	// when you click on the link elements within the top nav...
	$('.links').click(function() {
	// -- scroll the the slide that has the same index value as the element you clicked
		$(document).scrollTo('section:eq('+($(this).index()+1)+')', 800, {axis:'y', easing:'easeInOutQuart'});
	});

	// -- when you click on the more about me button...
	$('#moreaboutme').click(function() {

		sidePanelOpen();

	});

	$('#logo_small').click(function() {
		if (moreAboutMeShown === false) {
			sidePanelOpen();		
		}

		else if (moreAboutMeShown === true) {
			sidePanelClose();	
		}
	});

	// -- when you click on the less about me button...
	$('#lessaboutme,section').click(function() {
		if (moreAboutMeShown === true) {
			sidePanelClose();
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
		sidePanelClose();
	}

	// if the top scroll position is within the first section
	else if (windowScrollTop >= splashHeight && windowScrollTop < splashHeight + aboutmeHeight - 30)
	{
		i = 2;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
	}

	// if the top scroll position is within the second section
	else if (windowScrollTop >= (splashHeight + aboutmeHeight - 30) && windowScrollTop < splashHeight + aboutmeHeight + skillsHeight)
	{
		i = 3;
		$('.links').eq(i-2).addClass('selected');
		$('.links').not($('.links').eq(i-2)).removeClass('selected');
		sidePanelClose();
		$('#projmgmt').animate({'opacity':1},500, function() {
			$('#projmgmt_container li').each(function() {
				$(this).animate({'opacity':1},500 * $(this).index());
			});
		});

		$('#webdev').delay(1500).animate({'opacity':1},500, function() {
			$('#webdev_container li').each(function() {
				$(this).animate({'opacity':1},500 * $(this).index());
			});
		});

		$('#data').delay(3000).animate({'opacity':1},500, function() {
			$('#data_container li').each(function() {
				$(this).animate({'opacity':1},500 * $(this).index());
			});
		});
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

