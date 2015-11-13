
/* Text feature */
$(document).ready(function () {
    $('#text').click(function () {
        var clas = $(this).attr('id');
        var str = '#data-content #sidebar' + ' .' + clas;
        var content = $(str).html();
        $('.sidebar #var').replaceWith('<div id="var">' + content + '</div>');
    });
});
