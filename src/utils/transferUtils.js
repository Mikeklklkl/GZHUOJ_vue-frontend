// 存放转换约定的工具函数


// contest
/**
 * 数字转英文字母
 * @param {string} letter 
 * @returns {number} 
 */
export function letterToNumber(letter) {
    return letter.charCodeAt(0) - 'A'.charCodeAt(0);
}

/**
 * 英文字母转数字
 * @param {number} number 
 * @returns {string}}
 */
export function numberToLetter(number) {
    return String.fromCharCode('A'.charCodeAt(0) + number);
}