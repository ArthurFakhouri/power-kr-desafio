const options = {
    notation: "compact",
    compactDisplay: "short",
} as Intl.NumberFormatOptions;

export function formatCmpctNumber(number: number) {
    const usformatter = Intl.NumberFormat("en-US", options);
    return usformatter.format(number);
}