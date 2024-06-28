import { Typograf } from '../../../main';

import { colonRule } from './colon';
import { ellipsisRule } from './ellipsis';
import { exclamationMarkRule } from './exclamation-mark';
import { questionMarkRule } from './question-mark';
import { semicolonRule } from './semicolon';

Typograf.addRules([
	colonRule,
	ellipsisRule,
	exclamationMarkRule,
	questionMarkRule,
	semicolonRule,
]);
