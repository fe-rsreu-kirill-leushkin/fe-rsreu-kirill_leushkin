var y, image;

function parallax () {
	y = event.clientY / 2;
	x = event.clientX / 2;
	
	
	for (var i = 1; i < 8; i++){
		//src="images/layer-07.png"
		image = document.getElementById('image' + i);
		console.log('image' + i);
		image.style.top = y * i * 0.01 + 'px';
		image.style.left = x * i * 0.01 + 'px';
		console.log(image);
	}
	
	
	image = document.getElementById('image');
	
	//console.log(image.style.top += 10 + 'px');
}

window.addEventListener('mousemove', parallax);