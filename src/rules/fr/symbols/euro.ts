import type { TypografRule } from '../../../main';
export const euroSymbolRule: TypografRule = {
    name: 'fr/symbols/euro',
    handler(text) {
        return text.replace(/\s?€/g, '\u202F€');
    },
};
