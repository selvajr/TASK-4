const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 5];

(function () {
    const uniqueArray = [...new Set(duplicateArray)];
    console.log("Unique array:", uniqueArray);
})();
