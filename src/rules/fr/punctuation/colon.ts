import type { TypografRule } from '../../../main';
export const colonRule: TypografRule = {
    name: 'fr/punctuation/colon',
    handler(text) {
        return text.replace(/\s?:\s?/g, '\u00A0: ');
    },
};
