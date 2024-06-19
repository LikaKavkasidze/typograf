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
]]);
