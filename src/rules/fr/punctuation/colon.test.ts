import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/colon', [
    [
        'Mon nom: Dartagnan',
        'Mon nom\u00A0: Dartagnan'
    ],
    [
        'Mon nom :Dartagnan',
        'Mon nom\u00A0: Dartagnan'
    ],
    [
        'Mon nom:Dartagnan',
        'Mon nom\u00A0: Dartagnan'
    ],
    [
        'Mon nom : Dartagnan',
        'Mon nom\u00A0: Dartagnan'
    ],
]]);
