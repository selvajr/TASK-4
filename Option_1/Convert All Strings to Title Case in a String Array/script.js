const stringArray = ["hello", "world", "javascript", "programming"];

(function () {
    const titleCaseArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title case strings:", titleCaseArray);
})();
