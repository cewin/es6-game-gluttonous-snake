class Snake {
	constructor(width = 20, height = 20, direction = 'right') {
		this.width = width;
		this.height = height;

		this.body = [ { x: 3, y: 2, color: 'red' }, { x: 2, y: 2, color: 'red' }, { x: 1, y: 2, color: 'red' } ];
		this.direction = direction;
	}
	render(map) {
		for (var i = 0; i < this.body.length; i++) {
			var obj = this.body[i];
			var div = document.createElement('div');
			map.appendChild(div);
			div.style.left = obj.x * this.width + 'px';
			div.style.top = obj.y * this.height + 'px';
			div.style.position = `position`;
			div.style.backgroundColor = obj.color;
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';
		}
	}
	move(food, map) {
		let i = this.body.length - 1;
		for (; i > 0; i--) {
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
		switch (this.direction) {
			case 'left':
				this.body[0].x -= 1;
				break;
			case 'right':
				this.body[0].x += 1;
				break;
			case 'top':
				this.body[0].y -= 1;
				break;
			case 'left':
				this.body[0].y += 1;
				break;
		}
		// 在Snake的move方法中
		// 在移动的过程中判断蛇是否吃到食物
		// 如果蛇头和食物的位置重合代表吃到食物
		// 食物的坐标是像素，蛇的坐标是几个宽度，进行转换
		var headX = this.body[0].x * this.width;
		var headY = this.body[0].y * this.height;
		if (headX === food.x && headY === food.y) {
			// 吃到食物，往蛇节的最后加一节
			var last = this.body[this.body.length - 1];
			this.body.push({
				x: last.x,
				y: last.y,
				color: last.color
			});
			// 把现在的食物对象删除，并重新随机渲染一个食物对象
			food.render(map);
		}
	}
	remove() {
		// 删除渲染的蛇
		var i = elements.length - 1;
		for (; i >= 0; i--) {
			// 删除页面上渲染的蛇
			elements[i].parentNode.removeChild(elements[i]);
			// 删除elements数组中的元素
			elements.splice(i, 1);
		}
	}
}
export default Snake;
