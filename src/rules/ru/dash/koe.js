Typograf.rule({
    name: 'ru/dash/koe',
    index: 38,
    handler: function(text) {
        var ruDash = Typograf.data('ru/dash'),
            re = new RegExp(ruDash.before + '([Кк]о[ей])\\s([а-яё]{3,})' + ruDash.after, 'g');

        return text.replace(re, '$1$2-$3$4');
    }
});
