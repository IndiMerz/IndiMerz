const app = {
	nextIndex: 0,
	teams: [
		'royal challengers',
		'knight riders',
		'super kings',
		'sunrisers',
		'titans',
		'super giants',
	],
	next() {
		if (this.nextIndex >= this.teams.length) {
			return { done: true };
		}

		const returnValue = { value: this.teams[this.nextIndex], done: false };
		this.nextIndex++;
		return returnValue;
	},
};

console.log(app.next()); // { value: 'royal challengers', done: false }
console.log(app.next()); // { value: 'knight riders', done: false }
console.log(app.next()); // { value: 'super kings', done: false }
console.log(app.next()); // { value: 'sunrisers', done: false }
console.log(app.next()); // { value: 'titans', done: false }
console.log(app.next()); // { value: 'super giants', done: false }
console.log(app.next()); // { done: true }

// this is not iterable we can check it by for of loop, for iterable, we need to use symbol

/*
for (const team of app) {
    console.log(team);  // app is not iterable
}
*/

// Symbol.iterator

const app2 = {
	teams: [
		'royal challengers',
		'knight riders',
		'super kings',
		'sunrisers',
		'titans',
		'super giants',
	],
	[Symbol.iterator]: function () {
		let nextIndex = 0;
		return {
			next: () => {
				return nextIndex < this.teams.length
					? { value: this.teams[nextIndex++], done: false }
					: { done: true };
			},
		};
	},
};

const iterator = app2[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

for (const team of app2) {
    console.log(team);  // app is not iterable
}

/*
royal challengers
knight riders
super kings
sunrisers
titans
super giants
 */