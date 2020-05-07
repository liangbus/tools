var genRandomNumber = function (min, max) {
    var r = Math.floor(Math.random() * (max + 1));
    return r + min > max ? max : r;
};
// test random result
var r = -1;
var m = 20;
while (r !== 20) {
    r = Math.floor(Math.random() * ++m);
    console.log(r);
}
export { genRandomNumber };
//# sourceMappingURL=genRandomNumber.js.map