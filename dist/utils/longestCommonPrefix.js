function longestCommonPrefix(strArr) {
    if (!strArr.length)
        return '';
    var firstStr = strArr[0].split('');
    var result = '';
    for (var i = 0; i < firstStr.length; i++) {
        var curChar = firstStr[i];
        for (var j = 1; j < strArr.length; j++) {
            var restEleChar = strArr[j].charAt(i);
            if (restEleChar === curChar) {
                if (j === strArr.length - 1) {
                    result += restEleChar;
                }
                continue;
            }
            else {
                return result;
            }
        }
    }
    return result;
}
export { longestCommonPrefix };
//# sourceMappingURL=longestCommonPrefix.js.map