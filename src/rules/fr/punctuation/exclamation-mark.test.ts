import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/exclamationMark', [
    [
        'Impressionnant! Ou plutôt exceptionnel',
        'Impressionnant\u202F! Ou plutôt exceptionnel',
    ],
    [
        'Impressionnant !Ou plutôt exceptionnel',
        'Impressionnant\u202F! Ou plutôt exceptionnel',
    ],
    [
        'Impressionnant ! Ou plutôt exceptionnel',
        'Impressionnant\u202F! Ou plutôt exceptionnel',
    ],
    [
        'Impressionnant!Ou plutôt exceptionnel',
        'Impressionnant\u202F! Ou plutôt exceptionnel',
    ],
    [
        `Attention! Un point d’exclamation en fin de ligne !
Et un autre en fin de texte!`,
        `Attention\u202F! Un point d’exclamation en fin de ligne\u202F!
Et un autre en fin de texte\u202F!`,
	],
]]);
