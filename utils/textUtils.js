function truncate(text, maxLength) {
    return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
}

function countWords(text) {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
}

module.exports = { truncate, countWords };