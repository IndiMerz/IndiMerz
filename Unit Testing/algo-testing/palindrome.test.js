const palindrome = require('../../Algorithm/02 Palindrome/palindrome');

describe('Palindrome', () => {
    it('Should be a Function', () => {
        expect(typeof palindrome).toEqual('function');
    });

    it('Should return a boolean', () => {
        expect(typeof palindrome('hello')).toEqual('boolean');
        expect(typeof palindrome('wow')).toEqual('boolean');
        expect(typeof palindrome('nice')).toEqual('boolean');
    });

    it('Should return true if it is a palindrome', () => {
        expect(palindrome('wow')).toBeTruthy();
        expect(palindrome('rotator')).toBeTruthy();
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('nitin')).toBeTruthy();
    });

    it('Should return false if it is not a palindrome', () => {
        expect(palindrome('help')).toBeFalsy();
        expect(palindrome('nice')).toBeFalsy();
        expect(palindrome('what')).toBeFalsy();
        expect(palindrome('where')).toBeFalsy();
    });

    it('Should return false if it includes spaces', () => {
        expect(palindrome(' wow')).toBeFalsy();
        expect(palindrome('kayak ')).toBeFalsy();
        expect(palindrome(' rotat or ')).toBeFalsy();
    });
})