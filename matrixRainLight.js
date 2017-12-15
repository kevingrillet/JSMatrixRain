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
	init: function(idCanvas, size, fps, rnd) {
		this.canvas = document.getElementById(idCanvas);
		this.context = this.canvas.getContext('2d');
		this.canvas.style.background = 'rgb(0, 0, 0)';
		this.fontSize = size;
		this.columns = this.canvas.width / this.fontSize;
		for (var x = 0; x < this.columns; x++) {
			this.drops[x] = this.canvas.height / this.fontSize + 1;
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
		this.context.fillStyle = 'rgb(0, 255, 0)';
		for (var i = 0; i < this.drops.length; i++) {
			this.context.fillText(this.randChar(), i * this.fontSize, this.drops[i] * this.fontSize);
			if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > this.rnd)
				this.drops[i] = 0;
			this.drops[i]++;
		}
	}
});