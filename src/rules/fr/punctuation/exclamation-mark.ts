import type { TypografRule } from '../../../main';

const replacer = (_, afterMark) => `\u202F!${afterMark || ' '}`;

export const exclamationMarkRule: TypografRule = {
    name: 'fr/punctuation/exclamationMark',
    handler(text) {
        return text.replace(/\s*!(\s?|$)/gm, replacer).trimEnd();
    },
};
