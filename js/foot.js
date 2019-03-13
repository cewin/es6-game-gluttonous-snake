class Food {
	constructor(x = 0, y = 0, width = 20, height = 20, color = 'green') {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}
	render(map) {
		this.map = map;
		this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
		this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;

		this.draw();
	}

	draw() {
		let div = document.createElement('div');
		div.style.position = `position`;
		div.style.left = `${this.x}px`;
		div.style.top = `${this.y}px`;
		div.style.width = `${this.width}px`;
		div.style.height = `${this.height}px`;
		div.style.backgroundColor = this.color;
		map.appendChild(div);
	}
}
export default Food;
