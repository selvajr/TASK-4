function rotateArray(arr, k) {
    const n = arr.length;
    const rotations = k % n;
    return [...arr.slice(n - rotations), ...arr.slice(0, n - rotations)];
}

const originalArray = [1, 2, 3, 4, 5];
const k = 2;

(function () {
    const rotatedArray = rotateArray(originalArray, k);
    console.log("Rotated array:", rotatedArray);
})();
