//create Matrix class

class Matrix {
	constructor(width, height, element = (x, y) => undefined){
		this.width = width;
		this.height = height;
		this.elements = [];

		for(let y = 0; y < height; y ++) {
			for(let x = 0; x < width; x++) {
				this.elements[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.elements[y * this.height + x];
	}

	set(x, y, value) {
		this.elements[y * this.width + x] = value;
	}
}


//create a object for return of [Symbol.iterator] method
class MatrixIterate {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;
	}
	//must be have next() method which return {value, done}<Object>
	next() {
		if(this.y === this.matrix.height) return {done : true};
		this.value = {
			x : this.x,
			y : this.y,
			value : this.matrix.get(this.x, this.y)
		}
		this.x++;
		if(this.x === this.matrix.width) {
			this.y++;
			this.x = 0;
		}
		return {value : this.value, done : false}
	}
}


//add [Symbol.iterator] method to my Matrix
Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterate(this);
}



//test
let mx = new Matrix(4, 4, (x, y) => x * y);

for(let {x, y, value} of mx) {
	console.log("x : " + x + "," + "y : " + y + "," + "value : " + value)
}












