import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['ru/money/ruble', [
    ['100 руб.', '100\u00A0₽'],
    ['100руб.', '100\u00A0₽'],
    ['100р.', '100\u00A0₽'],
    ['100 р.', '100\u00A0₽'],
    ['100 р.!', '100\u00A0₽!'],
    ['100 р.?', '100\u00A0₽?'],
    ['100 р. 20 коп.', '100 р. 20 коп.'],
    ['У меня 100 р., а у тебя нет.', 'У меня 100\u00A0₽, а у тебя нет.'],
    ['У меня 100 р., а у тебя нет.', 'У меня 100\u00A0₽, а у тебя нет.'],
    ['У меня 100 р., а у тебя 200 р.', 'У меня 100\u00A0₽, а у тебя 200 р.'],
    ['У меня 100 р. У Миши 20 р.', 'У меня 100\u00A0₽. У Миши 20 р.']
]]);
