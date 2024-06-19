import type { TypografRule } from '../../../main';
export const exclamationMarkRule: TypografRule = {
    name: 'fr/punctuation/exclamationMark',
    handler(text) {
        return text.replace(/\s?!\s?/g, '\u202F! ');
    },
};
