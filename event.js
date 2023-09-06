const features = Array(
	{"feature":"windows派", "time": 0}, {"feature":"mac派", "time": 0}, {"feature":"vscoder", "time": 0}, {"feature":"vimmer", "time": 0}, {"feature":"社会人", "time": 0}, {"feature":"qiitaに投稿している", "time": 0}, 
	{"feature":"空のレポジトリ提出経験あり", "time": 0}, {"feature":"libft終わってない", "time": 0}, {"feature":"海外経験あり", "time": 0}, {"feature":"second circle", "time": 0}, 
	{"feature":"Philanthropist 称号保有者", "time": 0}, {"feature":"動物と暮らしている", "time": 0}, {"feature":"1か月以上校舎PCにログインしていない", "time": 0}, {"feature":"atcoder青色以上", "time": 0}, 
	{"feature":"上京してきました", "time": 0}, {"feature":"TIG 経験者", "time": 0}, {"feature":"Rush reviewer", "time": 0}, {"feature":"A.G.U 未使用", "time": 0}, {"feature":"自作 PC 持ってます", "time": 0});
const colors = Array({"color": "rgb(196, 10, 10)", "time": 0}, {"color": "rgb(38, 70, 120)", "time": 0}, {"color": "rgb(222, 164, 4)", "time": 0}, {"color": "rgb(30, 120, 30)", "time": 0});
// const colors = Array({"color": "red", "time": 0}, {"color": "blue", "time": 0}, {"color": "yellow", "time": 0}, {"color": "green", "time": 0});
const imagePath = "images/42tokyo_square.png";

function setColor() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');
	
	forEach.call(cols, function (col) {
		candidates = getColorCandidates(colors);
		if (col.getAttribute('id') != "center") {
			col.style.backgroundColor = candidates[Math.floor(Math.random()*candidates.length)];
			col.style.opacity = 0.9
			for (let color of colors) {
				if (col.style.backgroundColor == color.color) {
					color.time += 1;
					break ;
				}
			}
		} else {
			col.style.backgroundColor = "white";
			col.style.opacity = 0.9
		}
	});
}

function getColorCandidates(list) {
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

function getFeatureCandidates(list) {
	var min = list[0].time;
	var candidates = [];

	for (let element of list) {
		if (min > element.time)
			min = element.time;
	}
	for (let element of list) {
		if (min == element.time)
			candidates.push(element.feature);
	}
	return candidates;
}

function setFeatures() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');

	forEach.call(cols, function (col) {
		candidates = getFeatureCandidates(features);
		col.firstElementChild.textContent = candidates[Math.floor(Math.random()*candidates.length)];
		for (let feature of features) {
			if (col.firstElementChild.textContent == feature.feature) {
				feature.time += 1;
				break ;
			}
		}
	});
}

function resetCells() {
	const forEach = Array.prototype.forEach;
	var cols = document.getElementsByClassName('col');

	forEach.call(cols, function (col) {
		col.style.backgroundImage = '';
	});
}

function setFound() {
	var target = event.target.parentNode.parentNode;
	target.style.backgroundColor = "black";
	target.style.backgroundImage = `url(${imagePath})`;
	target.style.backgroundPosition = "center center";
	target.style.backgroundRepeat = "no-repeat";
	target.style.backgroundSize = "contain";
}
