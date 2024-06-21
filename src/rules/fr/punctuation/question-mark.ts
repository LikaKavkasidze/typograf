import type { TypografRule } from '../../../main';

const replacer = (_, afterMark) => `\u202F?${afterMark || ' '}`;

export const questionMarkRule: TypografRule = {
    name: 'fr/punctuation/questionMark',
    handler(text) {
        return text.replace(/\s*\?(\s?|$)/gm, replacer).trimEnd();
    },
};
