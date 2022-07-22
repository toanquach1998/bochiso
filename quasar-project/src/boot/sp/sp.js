function toMoney( money) {
    return parseFloat(money).toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}


function toSwap( money) {
    return parseFloat(money).toLocaleString('vi-VN');
}


function toLength(arr) {
  return arr.length;
}
export default {
    toMoney,
    toSwap,
    toLength,
}
