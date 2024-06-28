import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/symbols/euro', [
    [
        'Tom a 100 €, et Anna 200 €',
        'Tom a 100\u202F€, et Anna 200\u202F€',
    ],
    [
        'Tom a 100€, et Anna 200€',
        'Tom a 100\u202F€, et Anna 200\u202F€',
    ],
    [
        'Tom a 100 € , et Anna 200 €',
        'Tom a 100\u202F€ , et Anna 200\u202F€',
    ],
]]);
