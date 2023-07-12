const reverseStr = require('../../Algorithm/01 Reverse String/reverse-str');

describe('Reverse String', () => {
    it('Should be a Function', () => {
        expect(typeof reverseStr).toEqual('function');
    });

    it('Should return a String', () => {
        expect(typeof reverseStr('hello')).toEqual('string');
        expect(typeof reverseStr('99store')).toEqual('string');
        expect(typeof reverseStr('100')).toEqual('string');
    });

    it('Should return the reversed string', () => {
        expect(reverseStr('hello')).toEqual('olleh');
        expect(reverseStr('never')).toEqual('reven');
        expect(reverseStr('wow')).toEqual('wow');
        expect(reverseStr('hello world')).toEqual('dlrow olleh');
    });
})