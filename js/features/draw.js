
/* Draw feature */
$(document).ready(function () {
	$('#draw').click(function () {
		var clas = $(this).attr('id');
		var str = '#data-content #sidebar' + ' .' + clas;
		var content = $(str).html();
		$('.sidebar #var').replaceWith('<div id="var">' + content + '</div>');
	});
});
