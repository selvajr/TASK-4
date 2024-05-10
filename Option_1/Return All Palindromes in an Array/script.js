function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

const wordsArray = ["level", "hello", "madam", "world"];

(function () {
    const palindromes = wordsArray.filter(isPalindrome);
    console.log("Palindromes:", palindromes);
})();
