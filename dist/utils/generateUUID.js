var genUUID = function (uuidLen) {
    var sourceChar = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var sLen = sourceChar.length;
    var uuidArr = [];
    for (var i = 0; i < uuidLen; i++) {
        uuidArr.push(sourceChar.charAt(Math.floor(Math.random() * sLen)));
    }
    return uuidArr.join('');
};
export { genUUID };
//# sourceMappingURL=generateUUID.js.map