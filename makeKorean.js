module.exports = len => {
    let ko = ``;
    for (let i = 0; i < len; i++) {
        ko += String.fromCharCode(44031 + Math.ceil(11172 * Math.random()));
    }
    return ko;
};
