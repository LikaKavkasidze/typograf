import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/questionMark', [
    [
        'Que faire? Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
    [
         'Que faire ?Il n’y a rien',
         'Que faire\u202F? Il n’y a rien',
    ],
    [
        'Que faire?Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
    [
        'Que faire ? Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
    [
        `Une question? En fin de ligne?
Quid d’en fin de texte ?`,
        `Une question\u202F? En fin de ligne\u202F?
Quid d’en fin de texte\u202F?`,
	],
]]);
