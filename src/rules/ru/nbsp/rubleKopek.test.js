import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['ru/nbsp/rubleKopek', [
    [
        '10руб.',
        '10\u00A0руб.'
    ],
    [
        '10 руб.',
        '10\u00A0руб.'
    ],
    [
        '10 руб',
        '10 руб'
    ],
    [
        '10руб',
        '10руб'
    ],
    [
        '10.5 руб.',
        '10.5\u00A0руб.'
    ],
    [
        '10.5 руб.\n20.7 руб.',
        '10.5\u00A0руб.\n20.7\u00A0руб.'
    ],
    [
        '10,5 руб.',
        '10,5\u00A0руб.'
    ],
    [
        '10руб.',
        '10\u00A0руб.'
    ],
    [
        '10 руб.',
        '10\u00A0руб.'
    ],
    [
        '10 руб',
        '10 руб'
    ],
    [
        '10руб',
        '10руб'
    ],
    [
        '1 коп.',
        '1\u00A0коп.'
    ],
    [
        '1коп.',
        '1\u00A0коп.'
    ]
]]);
