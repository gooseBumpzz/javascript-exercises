const palindromes = function (stringName) {
    const original = stringName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed = original.split("").reverse("").join("");
    return original == reversed;
 };

// Do not edit below this line
module.exports = palindromes;
