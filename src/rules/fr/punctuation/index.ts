import { Typograf } from '../../../main';

import { colonRule } from './colon';
import { exclamationMarkRule } from './exclamation-mark';
import { questionMarkRule } from './question-mark';
import { semicolonRule } from './semicolon';

Typograf.addRules([
	colonRule,
	exclamationMarkRule,
	questionMarkRule,
	semicolonRule,
]);
