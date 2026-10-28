function slugify(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string');
    return input
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+|_+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

module.exports = slugify;