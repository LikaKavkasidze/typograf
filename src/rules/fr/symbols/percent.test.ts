import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/symbols/percent', [
    [
        'Nous sommes d’accord à 200 %, bien que 100 % soit le maximum.',
        'Nous sommes d’accord à 200\u202F%, bien que 100\u202F% soit le maximum.',
    ],
    [
        'Nous sommes d’accord à 200%, bien que 100% soit le maximum.',
        'Nous sommes d’accord à 200\u202F%, bien que 100\u202F% soit le maximum.',
    ],
    [
        'Nous sommes d’accord à 200 % , bien que 100 % soit le maximum.',
        'Nous sommes d’accord à 200\u202F% , bien que 100\u202F% soit le maximum.',
    ],
]]);
