/**
 * 生成指定进制的数字
 * @param radix 进制
 */
var genSpecRadixNumber = function (radix) {
    if (radix === void 0) { radix = 16; }
    return (Math.floor(Math.random() * radix)).toString(radix);
};
export default genSpecRadixNumber;
//# sourceMappingURL=genSpecRadixNumber.js.map