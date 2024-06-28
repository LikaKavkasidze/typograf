import type { TypografRule } from '../../../main';

const replacer = (_, afterMark) => `…${afterMark || ' '}`;

export const ellipsisRule: TypografRule = {
    name: 'fr/punctuation/ellipsis',
    handler(text) {
        return text.replace(/\.\.\.(\s?|$)/gm, replacer).trimEnd();
    },
};
