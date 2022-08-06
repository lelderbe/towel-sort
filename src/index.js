module.exports = function towelSort(matrix = []) {
  return matrix.map((item, index) => (index % 2 == 0 ? item : item.reverse())).flat();
};
