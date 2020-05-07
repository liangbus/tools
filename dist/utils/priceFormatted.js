var priceFormatted = function (price) {
    if (!price || typeof price !== 'number') {
        return '0';
    }
    var numArr = price.toString().split('');
    if (numArr.length < 3)
        return "" + price;
    var resArr = [];
    var tmp = '';
    for (var i = numArr.length - 1; i >= 0; i--) {
        tmp = numArr[i] + tmp;
        if (tmp.length === 3) {
            resArr.unshift(tmp);
            tmp = '';
        }
    }
    tmp && resArr.unshift(tmp);
    console.log('formatted array: ', resArr);
    return resArr.join(',');
};
export { priceFormatted };
//# sourceMappingURL=priceFormatted.js.map