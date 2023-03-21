/* TODO Zadanie 3 - mockowanie modułu
Napisać testy dla funkcji greetingsRandom

Może się przydać - jest.mock('src')
 */

import { config } from '../../utils/config';
import { random } from '../../utils/random';

export const greetings = name => {
	const greeting = config.lang === 'pl' ? 'Cześć' : 'Hello';
	if (!name) {
		return `${greeting} nameless`;
	}
	return `${greeting} ${name}!`;
};

export const greetingsRandom = name => {
	const greeting = random.getRandomListElement('Hi', 'Hello', 'Whats up');
	if (!name) {
		return `${greeting} nameless`;
	}
	return `${greeting} ${name}!`;
};
