module.exports = function reverse (n) {
    var string=n.toString().split("").reverse().join("");
    return parseInt(string);
}
