$(function() {
	
	// # links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	});

	// homemade carousel:
	setInterval(carousel, 5000);
});

var num_images = 4;
var curr_class = 3;
(new Image()).src = '/assets/images/children_background-1.jpg';
(new Image()).src = '/assets/images/children_background-2.jpg';
(new Image()).src = '/assets/images/children_background-3.jpg';
(new Image()).src = '/assets/images/children_background-4.jpg';

function carousel() {
	var next_class = curr_class + 1;
	if (next_class > num_images) {
		next_class = 1;
	}
	$("#gardensdojo-landing-header").removeClass('landing-header-'+curr_class,'slow').addClass('landing-header-'+next_class,2000);
	curr_class = next_class;
}

function see_more(show_id, hide_id) {
	$("#" + show_id).slideDown(function(){
		if (hide_id) {
			$("#" + hide_id).hide();
		}
	});
}
