export function parseToDashSeparated(pathname: string): string {
    return pathname.replace(/_/g, '-');
}

export function parseToUnderscoreSeparated(pathname: string): string {
    return pathname.replace(/-/g, '_');
}