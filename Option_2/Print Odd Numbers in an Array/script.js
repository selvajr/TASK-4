const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = () => {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log("Odd numbers:", oddNumbers);
};

printOddNumbers();
