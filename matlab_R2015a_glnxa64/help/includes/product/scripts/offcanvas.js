$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
		$('#nav_toggle').toggleClass('active');
  });
});