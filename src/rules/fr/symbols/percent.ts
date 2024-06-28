import type { TypografRule } from '../../../main';
export const percentSymbolRule: TypografRule = {
    name: 'fr/symbols/percent',
    handler(text) {
        return text.replace(/\s?%/g, '\u202F%');
    },
};
