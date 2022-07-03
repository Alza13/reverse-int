module.exports = function reverse(n) {
    n = Math.abs(n);
    n = String(n);
    let array = [...n];
    return Number(array.reverse().join(""));
};
