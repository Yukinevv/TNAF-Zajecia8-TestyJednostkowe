import { greetings, greetingsRandom } from './greetings';

jest.mock('../../utils/config', () => ({
	config: { lang: 'en' },
}));

describe('greetings', () => {
	test('should return correct greeting for given name', () => {
		// when
		const result = greetings('Joe');

		// then
		expect(result).toEqual('Hello Joe!');
	});

	test('should return correct greeting for given name', () => {
		// when
		const result = greetings('Joe');

		// then
		expect(result).toEqual('Hello Joe!');
	});
});
