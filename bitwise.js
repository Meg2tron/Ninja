
function getMaxLessThanK(n, k) {

    if(length===undefined || width===undefined || isNaN(n) || isNaN(k))
        throw (new Error('Provide valid inputs'))

    let max_anb = 0;
    for (let b = n; b > 0; b--) {
        for (let a = b-1; a > 0; a--) {
            if ((a & b) < k && (a & b) > max_anb){
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}
