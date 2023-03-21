/* TODO Zadanie 2 - mockowanie
Dopisać testy do pierwszej funkcji greetings
Napisać testy dla funkcji greetingsRandom

Każda z funkcji powinna mieć oddzielny describe w pliku z testami.

Mockowanie - czyli pozorowanie jakiegoś elementu, żeby przetestować powiązania między kodem poprzez zastąpienie rzeczywistej implementacji funkcji.
https://jestjs.io/docs/mock-functions
Może się przydać - jest.fn(() => {})
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
