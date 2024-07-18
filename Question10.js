function toTitleCase(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(toTitleCase("convert this string to title case"));
