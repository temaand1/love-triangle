/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var x = preferences;
    var gut = 0;
    var i = 0;
    while  (i < x.length) {
        if (i+1 == x[x[x[i]-1]-1] && i+1 != x[i])
        {
            gut++;
        }
        i++;
    }
    return gut / 3;
};
