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

it("shoul not be null", () => {
	// arrange
	let name = "Adrian";
	let lang = "pl";

	// act
	let result = greetings(name, lang);

	// assert
	//expect(name).to.not.equal(null);
	//expect(lang).to.not.equal(null);

	expect(result).toBe(`Cześć ${name}`);
});

it("only name parameter was passed", () => {
	// arrange
	let name = "Adrian";

	// act
	let result = greetings(name);

	// assert

	expect(result).toBe(`Cześć ${name}`);
});