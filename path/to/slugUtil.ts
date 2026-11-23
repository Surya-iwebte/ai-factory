function generateSlug(input: string): string {
    if (!input) return '';
    return input
        .toLowerCase()  
        .replace(/\s+/g, '-')  
        .replace(/[!@#$%^&*()_+=\[\]{};':"\\|,.<>?]/g, '')
        .replace(/^-+|-+$/g, '');
}

export { generateSlug };
