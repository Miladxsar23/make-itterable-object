
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

//add [Symbol.iterator] method to my Matrix
Matrix.prototype[Symbol.iterator] = function* () {
	for(let y = 0; y < this.height; y++) {
		for(let x = 0; x < this.width; x++) {
			yield {x, y, value : this.get(x, y)}
		}
	}
}



//test
let mx = new Matrix(4, 4, (x, y) => x * y);

for(let {x, y, value} of mx) {
	console.log("x : " + x + "," + "y : " + y + "," + "value : " + value)
}
