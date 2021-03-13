const hasNestedArr = (arr) => arr.some(item => Array.isArray(item));

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1;
        if(hasNestedArr(arr)) {
            const newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
            return depth + this.calculateDepth(newArr);
        }
        return depth
    }
};
