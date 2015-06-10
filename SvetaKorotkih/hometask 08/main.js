var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
	var table = [];
	for(var i = 0; i < size; i++) {
		table[i] = [];
		for(var j = 0; j < size; j++ ) {
			table[i].push((i + 1)*(j + 1));
		}
	}
	return table;
}

function matrix (size) {
	var matrix = [];
	for(var i = 0; i < 10; i++) {
		matrix[i] = [];
		for(var j = 0; j < 10; j++) {
			if(i === j) {
				matrix[i].push(1);
			} else if(i < size && j === (size - 1) - i) {
				matrix[i].push(2);
			}else if(i < 4 && j > i && j + i < size ) {
				matrix[i].push(3);
			} else if(j < 4 && i > j && j + i < size) {
				matrix[i].push(6);
			} else if(j > 5 && j > i && j + i >= size) {
				matrix[i].push(4);
			} else {
				matrix[i].push(5);
			}
		}
	}
	return matrix;
}

function pascal (size) {
	var triangle = [];
	for(var i = 0; i < size; i++) {
		triangle[i] = [];
		for(var j = 0; j < size; j++ ) {
			if (j === 0 || i === j) {
				triangle[i].push(1);
			} else if(i > j) {
				triangle[i].push(triangle[i-1][j-1] + triangle[i-1][j]);
			}
			else {continue;}
		}
	}
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