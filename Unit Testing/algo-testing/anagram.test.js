const anagram = require('../../Algorithm/04 Anagram/anagram');

describe('Anagram', () => {
    it('Should be a Function', () => {
        expect(typeof anagram).toEqual('function');
    });
    it('Should return a boolean', () => {
        expect(typeof anagram('ram', 'arm')).toEqual('boolean');
    });

    it('Should return true if it is an anagram', () => {
        expect(anagram('cinema', 'iceman')).toBeTruthy();
        expect(anagram('ram', 'arm')).toBeTruthy();
        expect(anagram('dog', 'god')).toBeTruthy();
    });

    it('Should return false if it is not an anagram', () => {
        expect(anagram('lost', 'cost')).toBeFalsy();
        expect(anagram('hello', 'fellow')).toBeFalsy();
        expect(anagram('nice', 'mice')).toBeFalsy();
    });

})