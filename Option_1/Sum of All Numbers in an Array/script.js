const nums = [10, 20, 30, 40, 50];

(function () {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of numbers:", sum);
})();
