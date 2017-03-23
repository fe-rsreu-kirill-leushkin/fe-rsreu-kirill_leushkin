var y, image;

function parallax () {
	y = event.clientY / 2;
	x = event.clientX / 2;
	
	for (var i = 1; i < 8; i++){
		image = document.getElementById('image' + i);
		image.style.top = y * i * 0.01 + 'px';
		image.style.left = x * i * 0.01 + 'px';
	}
	image = document.getElementById('image');
}

window.addEventListener('mousemove', parallax);
