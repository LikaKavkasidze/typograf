import type { TypografRule } from '../../../main';
export const semicolonRule: TypografRule = {
    name: 'fr/punctuation/semicolon',
    handler(text) {
        return text.replace(/\s?;\s?/g, '\u202F; ');
    },
};
