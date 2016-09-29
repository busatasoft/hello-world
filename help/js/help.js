$('.section-link').click(function (evt) {
    var selectorOfSection = $(this).attr('href');
    selectSection(selectorOfSection);
    evt.preventDefault();
});
selectSection('#section01');

function selectSection(selectorOfSection) {
    var parentSelector = selectorOfSection
            .replace(/#section/, '.list');
    $('#section-link-list > li').removeClass('selected');
    $(parentSelector).addClass('selected');

    $('.section-item').css('display', 'none');
    $(selectorOfSection).toggle();
}
