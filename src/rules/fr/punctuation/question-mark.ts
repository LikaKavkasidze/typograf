import type { TypografRule } from '../../../main';
export const questionMarkRule: TypografRule = {
    name: 'fr/punctuation/questionMark',
    handler(text) {
        return text.replace(/\s?\?\s?/g, '\u202F? ');
    },
};
