module.exports = function toReadable (number) {
    const numToWords = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    
    const tensWords = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    
    if (number < 20) {
        return numToWords[number];
    } else if (number < 100) {
        const tens = Math.floor(number / 10);
        const ones = number % 10;
        return tensWords[tens] + (ones > 0 ? " " + numToWords[ones] : "");
    } else {
        const hundreds = Math.floor(number / 100);
        const remaining = number % 100;
        return numToWords[hundreds] + " hundred" + (remaining > 0 ? " " + toReadable(remaining) : "");
    }
}
