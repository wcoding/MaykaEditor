
/* Clipart feature */
$(document).ready(function () {
    $('#clipart').popover(
        {
            html: true,
            title: 'Клипарт',
            content: $('#data-content #toolbar .clipart').html(),
            container: 'body',
            placement: 'right'
        }
    );

    $('#clipart').click(function () {
        $('.popover-content img').click(function () {
            var cat = $(this).attr('alt');
            var str = '#data-content #sidebar .clipart' + ' #' + cat;
            var content = $(str).html();
            $('.sidebar #var').replaceWith('<div id="var">' + content + '</div>');
        });
    });
});
