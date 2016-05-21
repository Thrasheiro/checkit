$(document).ready(function() {
	$('.youtube').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'iframe'
  // other options


});


	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

});

