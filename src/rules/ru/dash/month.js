Typograf.rule({
    name: 'ru/dash/month',
    index: 610,
    handler: function(text) {
        var part = '(' + Typograf.data('ru/month').join('|') + ')',
            re = new RegExp(part + ' ?(' + Typograf.data('common/dash') + ') ?' + part, 'gi');

        return text.replace(re, '$1' + this.setting('ru/dash/main', 'dashInterval') + '$3');
    }
});
