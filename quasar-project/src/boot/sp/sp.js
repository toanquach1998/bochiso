function toMoney( money) { 
    return parseFloat(money).toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}


function toSwap( money) { 
    return parseFloat(money).toLocaleString('vi-VN');
}
export default { 
    toMoney,
    toSwap
}