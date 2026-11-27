/**
 * Truncates the given text to a specified maximum length, appending '...' if truncated.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - The maximum length of the returned string.
 * @returns {string} - The original or truncated string.
 */
function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

/**
 * Counts the number of words in a string, treating multiple spaces as a single separator.
 * @param {string} text - The text to count words in.
 * @returns {number} - The count of words in the text.
 */
function countWords(text) {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
}

module.exports = { truncate, countWords };