var y, image;

function parallax () {
	console.log(document.documentElement.clientHeight);
	
	y = (event.clientY - document.documentElement.clientHeight) / 2 ;
	x = (event.clientX - document.documentElement.clientHeight) / 2;
	
	for (var i = 1; i < 8; i++){
		image = document.getElementById('image' + i);
		image.style.top = (-1) * y * i * 0.01 + 'px';
		image.style.left = (-1) * x * i * 0.01 + 'px';
		
		image.style.transform = 'translateY(' + (-1) * y * i * 0.001 + 'px)';
		image.style.transform = 'translateX(' + (-1) * x * i * 0.001 + 'px)';
	}
	image = document.getElementById('image');
}

window.addEventListener('mousemove', parallax);
