import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/ellipsis', [
    [
        'Elle se retourna et vit dans l’ombre deux oreilles toutes droites...C’était le loup.',
        'Elle se retourna et vit dans l’ombre deux oreilles toutes droites… C’était le loup.',
    ],
    [
        'Elle se retourna et vit dans l’ombre deux oreilles toutes droites... C’était le loup.',
        'Elle se retourna et vit dans l’ombre deux oreilles toutes droites… C’était le loup.',
    ],
    [
        `Elle se retourna et vit dans l’ombre deux oreilles toutes droites...
C’était le loup.`,
        `Elle se retourna et vit dans l’ombre deux oreilles toutes droites…
C’était le loup.`,
    ],
]]);
