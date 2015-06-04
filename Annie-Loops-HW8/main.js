var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));



function multiplicationTable(size) {
	var table = [];
		for (var i = 0; i<size; i++){
			table[i] = [];
			for (var j = 0; j<size;){
				j++;
				table[i][j] = j*(i+1);
			}
		}
    return table;
}

function matrix (size) {
    var matrix = [];
	for (var i = 0; i<size; i++){
		matrix[i]=[];
		matrix[i][i] = 1;
		for (var j = 0; j < size; j++){
				if (j===(size-2)-i+1){
					matrix[i][j] = 2;
				}
		};
		for (var j = i+1; j < (size-1)-i; j++){
			matrix[i][j] = 3;
		};
		for (var j = size-i; j < i; j++){
			matrix[j][i] = 4;
		};
		for (var j = size-i; j < i; j++){
			matrix[i][j] = 5;
		};
	}
	for (var i = 0; i<size; i++){
		for (var j = i+1; j < (size-1)-i; j++){
			matrix[j][i] = 6;
		};
	}
    return matrix;
}

function pascal (size) {
    var triangle = [];
	var n = 0;
    for (var i = 0; i <= (size-1); i++){
		triangle[i] = [];
		triangle[i][n] = triangle[i][i] =1;
		for (var j = 1; j < i; j++){
			triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
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