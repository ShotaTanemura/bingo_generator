const features = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J");
const colors = Array({"color": "red", "time": 0}, {"color": "blue", "time": 0}, {"color": "yellow", "time": 0}, {"color": "green", "time": 0}, {"color": "white", "time": 0});
const imagePath = "images/hand_good.png";

function setColor() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');
	
	forEach.call(cols, function (col) {
		candidates = getCandidates(colors);
		col.style.backgroundColor = candidates[Math.floor(Math.random()*candidates.length)];
		for (let color of colors) {
			if (col.style.backgroundColor == color.color) {
				color.time += 1;
				break ;
			}
		}
	});
}

function getCandidates(list) {
	var min = list[0].time;
	var candidates = [];

	for (let element of list) {
		if (min > element.time)
			min = element.time;
	}
	for (let element of list) {
		if (min == element.time)
			candidates.push(element.color);
	}
	return candidates;
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
