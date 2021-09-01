//TODO 队列，API/cache/track 各种接口，缓存，埋点，理论上都要由队列控制
function Queue(){
	this.items = [];
}

Queue.prototype={
	constructor:Queue,
	//入队
	enqueue:function() {
		let len = arguments.length;
		if (len == 0) {
			return;
		}
		for (let i = 0; i < len; i++) {
			this.items.push(arguments[i])
		}
	},
	//出队
	dequeue:function() {
		let result = this.items.shift();
		return typeof result != 'undefined' ? result : false;
	},
	//队列是否为空
	isEmpty:function() {
		return this.items.length == 0;
	},
	//返回队列长度
	size:function() {
		return this.items.length;
	},
	//清空队列
	clear:function() {
		this.items = [];
	},
	//返回队列
	show:function() {
		return this.items;
	}
}
