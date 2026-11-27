const { truncate, countWords } = require('../utils/textUtils');

describe('truncate', () => {
    it('should return the text if it is shorter than maxLength', () => {
        expect(truncate('Hello', 10)).toBe('Hello');
    });
    it('should return the text if it is equal to maxLength', () => {
        expect(truncate('Hello', 5)).toBe('Hello');
    });
    it('should truncate the text if it is longer than maxLength', () => {
        expect(truncate('Hello, world!', 5)).toBe('Hello...');
    });
    it('should not exceed maxLength when truncated', () => {
        const result = truncate('Hello, world!', 8);
        expect(result.length).toBe(8);
        expect(result.endsWith('...')).toBe(true);
    });
});

describe('countWords', () => {
    it('should count the words correctly', () => {
        expect(countWords('Hello world')).toBe(2);
    });
    it('should handle multiple spaces', () => {
        expect(countWords('Hello   world')).toBe(2);
    });
    it('should return 0 for an empty string', () => {
        expect(countWords('   ')).toBe(0);
    });
    it('should handle leading and trailing spaces', () => {
        expect(countWords('   Hello world   ')).toBe(2);
    });
});