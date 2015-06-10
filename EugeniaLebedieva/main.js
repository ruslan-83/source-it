var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  // @todo
  return table;
}

function matrix(size) {
  var matrix = [];
  for (var i = 0; i < size; i++) {
    matrix[i] = [];
    for (var j = 0; j < size; j++) {
      if (i == j) {
        matrix[i][j] = 1;
      }
      if (j + 1 == size - i) {
        matrix[i][j] = 2;
      }
      if (j + 1 > i + 1 && j < size - (i + 1)) {
        matrix[i][j] = 3;
      }
      if (j + 1 < i + 1 && j > size - (i + 1)) {
        matrix[i][j] = 5;
      }
      if (i + 1 < j + 1 && i > size - (j + 1)) {
        matrix[i][j] = 4;
      }
      if (i + 1 > j + 1 && i < size - (j + 1)) {
        matrix[i][j] = 6;
      }
    }
  }
  return matrix;
}

function pascal (size) {
  var triangle = [];
  // @todo
  return triangle;
}

function render (array) {
  var rowsQty = array.length;
  var result = [];
  for (var i = 0; i < rowsQty; i++) {
    var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
    result.push(row);
  }
  return result.join('');
}