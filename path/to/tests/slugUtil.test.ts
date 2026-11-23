import { generateSlug } from '../slugUtil';

describe('generateSlug', () => {
    test('Normal string input', () => {
        expect(generateSlug('Expected Slug')).toBe('expected-slug');
    });
    test('String with spaces', () => {
        expect(generateSlug('Expected    Slug')).toBe('expected-slug');
    });
    test('String with special characters', () => {
        expect(generateSlug('Expected Slug!@#')).toBe('expected-slug');
    });
    test('Empty string input', () => {
        expect(generateSlug('')).toBe('');
    });
    test('String with leading/trailing dashes', () => {
        expect(generateSlug('--Expected Slug--')).toBe('expected-slug');
    });
    test('Invalid characters in the middle', () => {
        expect(generateSlug('Expec!ted-Slu@g')).toBe('expected-slug');
    });
    test('Hello World!', () => {
        expect(generateSlug('Hello World!')).toBe('hello-world');
    });
    test('Leading and trailing spaces', () => {
        expect(generateSlug('   Leading and trailing spaces   ')).toBe('leading-and-trailing-spaces');
    });
});
