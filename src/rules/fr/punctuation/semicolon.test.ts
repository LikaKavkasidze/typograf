import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/semicolon', [
    [
        'Aucun soucis; serais là dans une heure',
        'Aucun soucis\u202F; serais là dans une heure',
    ],
    [
        'Aucun soucis ;serais là dans une heure',
        'Aucun soucis\u202F; serais là dans une heure',
    ],
    [
        'Aucun soucis;serais là dans une heure',
        'Aucun soucis\u202F; serais là dans une heure',
    ],
    [
        'Aucun soucis ; serais là dans une heure',
        'Aucun soucis\u202F; serais là dans une heure',
    ],
]]);
