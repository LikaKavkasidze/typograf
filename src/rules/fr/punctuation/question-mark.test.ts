import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['fr/punctuation/questionMark', [
    /*[
        'Que faire? Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
    [
        'Que faire ?Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
    [
        'Que faire ? Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],*/
    [
        'Que faire?Il n’y a rien',
        'Que faire\u202F? Il n’y a rien',
    ],
]]);
