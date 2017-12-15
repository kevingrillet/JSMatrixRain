"use strict";
var matrixRain = new Object({
	canvas: false,
	context: false,
	interval: false,
	fontSize: 0,
	columns: 0,
	rnd: 0,
	chars: 'abcdefghijklmnopqrstuvwxyz',
	drops: [],
	first: [],
	init: function(idCanvas, size, fps, rnd) {
		this.canvas = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');
		this.canvas.style.background = 'rgb(0, 0, 0)';
		this.fontSize = size;
		this.columns = this.canvas.width / this.fontSize;
		for (var i = 0; i < this.columns; i++) {
			this.drops[i] = this.canvas.height / this.fontSize + 1;
			this.first[i] = '';
		}
		this.rnd = rnd || 0.975;
		clearInterval(this.interval);
		this.interval = setInterval(function() {
			matrixRain.draw();
		}, ((typeof fps === 'undefined') ? 30 : fps) < 0 ? 30 : fps) / 1000;
	},
	randChar: function() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	},
	draw: function() {
		this.context.fillStyle = 'rgba(0, 0, 0, 0.15)';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.font = this.fontSize + 'px MatrixCode';
		for (var i = 0; i < this.drops.length; i++) {
			this.context.fillStyle = 'rgb(0, 255, 0)';
			this.context.fillText(this.first[i], i * this.fontSize, (this.drops[i] - 1) * this.fontSize);
			this.context.fillStyle = 'rgb(255, 255, 255)';
			this.context.fillText(this.first[i] = this.randChar(), i * this.fontSize, this.drops[i] * this.fontSize);
			if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > this.rnd)
				this.drops[i] = 0;
			this.drops[i]++;
		}
	}
});