const stringArray = ["hello", "world", "javascript", "programming"];

const convertToTitleCase = () => {
    const titleCaseArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log("Title case strings:", titleCaseArray);
};

convertToTitleCase();
