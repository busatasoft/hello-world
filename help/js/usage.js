$('.section-link').click(function (evt) {
    var selectorOfSection = $(this).attr('href');
    selectSection(selectorOfSection);
    evt.preventDefault();
});
selectSection('#section01');

function selectSection(selectorOfSection) {
    $('#section-link-list > li').removeClass('selected');
    var parentSelector = selectorOfSection
            .replace(/#section/, '.list');
    $(parentSelector).addClass('selected');

    $('.section-item').css('display', 'none');
    $(selectorOfSection).css('display', 'block');

    $(selectorOfSection + " img").lazyload();
}
