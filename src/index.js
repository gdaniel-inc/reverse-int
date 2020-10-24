module.exports = function reverse (n) {
    str = n.toString();
    res = str.split("").reverse().join("");
    if (res.slice(-1) == '-') {
        return Number(res.slice(0, -1))
    }
    else {
        return res;
    }
}
