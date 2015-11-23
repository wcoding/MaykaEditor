
/* Draw feature */
$(document).ready(function () {
	$('#draw').click(function () {
		var clas = $(this).attr('id');
		var str = '#data-content #sidebar' + ' .' + clas;
		var content = $(str).html();
		$('.sidebar #var').replaceWith('<div id="var">' + content + '</div>');

		// Minicolors init */
	    $('.demo').each( function() {
	        $(this).minicolors({
	            control: $(this).attr('data-control') || 'hue',
	            defaultValue: $(this).attr('data-defaultValue') || '',
	            format: $(this).attr('data-format') || 'hex',
	            keywords: $(this).attr('data-keywords') || '',
	            inline: $(this).attr('data-inline') === 'true',
	            letterCase: $(this).attr('data-letterCase') || 'lowercase',
	            opacity: $(this).attr('data-opacity'),
	            position: $(this).attr('data-position') || 'bottom left',
	            change: function(value, opacity) {
	                if( !value ) return;
	                if( opacity ) value += ', ' + opacity;
	                if( typeof console === 'object' ) {
	                    console.log(value);
	                }
	            },
	            theme: 'bootstrap'
	        });
	    });
	});
});
