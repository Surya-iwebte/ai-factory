function generateSlug(input: string): string {
    if (!input) return '';
    return input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export { generateSlug };