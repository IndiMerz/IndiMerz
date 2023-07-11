function* createTeamIterator (teams) {
    for (let i = 0; i<teams.length; i++){
        yield teams[i];
    }
}

const teams = [
    'royal challengers',
    'knight riders',
    'super kings',
    'sunrisers',
    'titans',
    'super giants',
];

const iterators = createTeamIterator(teams);
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

// for of loop

for (const team of createTeamIterator(teams)) {
    console.log(team);
}

// spread operator

console.log([...createTeamIterator(teams)]);

// destructure

const [first, second, third] = createTeamIterator(teams)
console.log(first, second, third);
// royal challengers knight riders super kings
