const features = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J");
const colors = Array("red", "blue", "green", "yellow", "white");
const imagePath = "images/hand_good.png";

function setColor() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');
	
	forEach.call(cols, function (col) {
		col.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
	});
}

function setFeatures() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');

	forEach.call(cols, function (col) {
		col.firstElementChild.textContent = features[Math.floor(Math.random()*features.length)];
	});
}

function setFound() {
	var target = event.target.parentNode.parentNode;
	target.style.backgroundImage = `url(${imagePath})`;
	target.style.backgroundPosition = "center center";
	target.style.backgroundRepeat = "no-repeat";
}
