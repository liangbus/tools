/**
 * 无重复字符的最长子串
 * @param str
 */
function lengthOfLongestSubstring(str) {
    if (str === void 0) { str = ''; }
    // console.log('I am lengthOfLongestSubstring func!')
    var longestLen = 0;
    if (!str)
        return longestLen;
    var strArr = str.split('');
    var tmpStr = '';
    var curChar = '';
    for (var i = 0; i < strArr.length; i++) {
        tmpStr = strArr[i];
        for (var j = i + 1; j < strArr.length; j++) {
            curChar = strArr[j];
            if (tmpStr.indexOf(curChar) === -1) {
                tmpStr += strArr[j];
            }
            else {
                longestLen = tmpStr.length > longestLen ? tmpStr.length : longestLen;
                tmpStr = '';
                break;
            }
        }
        longestLen = tmpStr.length > longestLen ? tmpStr.length : longestLen;
    }
    return longestLen;
}
export { lengthOfLongestSubstring };
//# sourceMappingURL=lengthOfLongestSubstring.js.map