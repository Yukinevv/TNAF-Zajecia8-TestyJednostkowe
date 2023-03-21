import { greetings } from './greetings';
import { config } from '../../utils/config';

describe('greetings', () => {
	test('should return correct greeting for given name', () => {
		// given
		const originalConfig = config.lang;

		// when
		config.lang = 'en';
		const result = greetings('Joe');

		// then
		expect(result).toEqual('Hello Joe!');

		// cleanup
		config.lang = originalConfig;
	});
});
