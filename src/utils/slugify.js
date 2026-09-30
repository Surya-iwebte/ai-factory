function slugify(input, separator = '-') {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    const normalized = input
        .normalize('NFD')
        .replace(/[^\p{L}\p{N}]+/gu, separator)
        .replace(new RegExp(`\${separator}+`, 'g'), separator)
        .toLowerCase()
        .substring(0, 50);
    return normalized;
}

module.exports = slugify;