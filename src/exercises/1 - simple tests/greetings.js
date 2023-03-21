/* TODO Zadanie 1 - testy jednostkowe dla poniższej funkcji.
Testy powinny sprawdzać przypadki:
- gdy nie podamy żadnych parametrów do funkcji
- gdy podamy tylko name
- gdy podamy name i język inny niż pl
 */

export const greetings = (name, lang = 'pl') => {
	const greeting = lang === 'pl' ? 'Cześć' : 'Hello';
	if (!name) {
		return `${greeting} nameless`;
	}
	return `${greeting} ${name}!`;
};
