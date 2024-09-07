// 存放转换约定的工具函数
// contest
/**
 * 数字转英文字母
 * @param {string} letter
 * @returns {number}
 */
export function letterToNumber(letter) {
  if (letter === null) return null;
  return letter.charCodeAt(0) - "A".charCodeAt(0);
}

/**
 * 英文字母转数字
 * @param {number} number
 * @returns {string}}
 */
export function numberToLetter(number) {
  return String.fromCharCode("A".charCodeAt(0) + number);
}

/**
 * 状态代码到状态信息转换
 * TODO 多增加集中状态
 */
export function getStatusMessage(code) {
  switch (code) {
    case 0:
      return "Accepted";
    case 1:
      return "Presentation Error";
    case 2:
      return "Wrong Answer";
    case 3:
      return "Time Limit Exceed";
    case 4:
      return "Memory Limit Exceed";
    case 5:
      return "Output Limit Exceed";
    case 6:
      return "Runtime Error";
    case 7:
      return "Compile Error";
    case 8:
      return "Pending";
    case 9:
      return "Status Submitted Failed";
    case 10:
      return "Status System Error";
    case 11:
      return "Status Cancelled";
    case 12:
      return "Status Compiling";
    case 13:
      return "Nonzero Exit Status";
    case 14:
      return "Internal Error";
    case 15:
      return "File Error";
    case 16:
      return "Signalled";
    default:
      return "Unknown Status";
  }
}


/**
 * 字母符号到颜色转换
 * TODO 多增加集中颜色
 */
export function getProblemColor(problemLetter) {
  switch (problemLetter) {
    case "A":
      return "rgb(209,86,86)";
    case "B":
      return "rgb(181,98,228)";
    case "C":
      return "rgb(87,98,143)";
    case "D":
      return "rgb(103,226,118)";
    case "E":
      return "rgb(244,228,82)";
    case "F":
      return "rgb(247,138,90)";
    case "G":
      return "rgb(84,129,173)";
    case "H":
      return "rgb(186,185,185)";
    case "I":
      return "rgb(79,184,157)";
    case "J":
      return "rgb(150,211,255)";
    default:
      return "gray";
  }
}

/**
 * 状态 -> 颜色转换 (RGB 格式)
 */
export function getStatusColor(status) {
  console.log(status);
  switch (status) {
    case "Accepted":
      return "rgb(0, 128, 0)"; // Accepted (Green)
    case "Presentation Error":
      return "rgb(255, 0, 0)"; // Presentation Error (Red)
    case "Wrong Answer":
      return "rgb(255, 0, 0)"; // Wrong Answer (Red)
    case "Time Limit Exceeded":
      return "rgb(0, 0, 0)"; // Time Limit Exceeded (Black)
    case "Memory Limit Exceeded":
      return "rgb(128, 0, 128)"; // Memory Limit Exceeded (Purple)
    case "Output Limit Exceeded":
      return "rgb(255, 192, 203)"; // Output Limit Exceeded (Pink)
    case "Runtime Error":
      return "rgb(128, 0, 128)"; // Runtime Error (Purple)
    case "Compile Error":
      return "rgb(255, 0, 0)"; // Compile Error (Red)
    case "Pending":
      return "rgb(128, 128, 128)"; // Pending (Gray)
    case "Status Submitted Failed":
      return "rgb(169, 169, 169)"; // Status Submitted Failed (Dark Gray)
    case "Status System Error":
      return "rgb(139, 0, 0)"; // Status System Error (Dark Red)
    case "Status Cancelled":
      return "rgb(240, 128, 128)"; // Status Cancelled (Light Coral)
    case "Status Compiling":
      return "rgb(255, 215, 0)"; // Status Compiling (Gold)
    case "Nonzero Exit Status":
      return "rgb(255, 140, 0)"; // Nonzero Exit Status (Dark Orange)
    case "Internal Error":
      return "rgb(75, 0, 130)"; // Internal Error (Indigo)
    case "File Error":
      return "rgb(255, 182, 193)"; // File Error (Light Pink)
    case "Signalled":
      return "rgb(0, 255, 255)"; // Signalled (Cyan)
    default:
      return "rgb(0, 0, 0)"; // Unknown Status (Black)
  }
}

