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

describe('greetingsRandom', () => {
	test('should return correct greeting for given name', () => {
		// given
		const originalRandom = random.getRandomListElement;
		const mockCallback = jest.fn(() => "Hi");

		// when
		random.getRandomListElement = mockCallback;
		const result = greetingsRandom('Joe');

		// then
		expect(result).toEqual('Hi Joe!');

		// cleanup
		random.getRandomListElement = originalRandom;
	});
});

/*jest.mock("../../utils/config", () => {
	config: { lang: "pl" };
});

jest.mock("../../utils/random", () => {
	getRandomListElement: jest.fn(() => "Siemano");
});*/
