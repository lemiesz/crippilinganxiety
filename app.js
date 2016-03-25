window.onload = function() {
	var element = document.getElementById("para1");
	var body = document.body;
	console.log(body)
	console.log(element)

	var width = body.offsetWidth;
	var height = body.offsetHeight;

	
	window.setInterval(function(){
		var newElement = document.createElement("H1");
		var randomChance = Math.random() *100;
		if(randomChance === 1) {
			newElement.innerHTML = "Bernice Sander loves cream pies"
		} else if(randomChance>2 && randomChance<10){
			newElement.innerHTML = "why does no one love me;"
		} else if (randomChance < 15){
			newElement.innerHTML = "fuck normies";
			newElement.style.color = "red";
		} else if(randomChance < 30 && randomChance >=25) {
			newElement.innerHTML = "end my life";
		} else {
			newElement.innerHTML = "good vibes only";
		}
		newElement.className = "sadText";
		newElement.style.position = "absolute";
		// newElement.style.position = "absolute"; 
		newElement.style.right = (Math.random() * width);
		newElement.style.top = (Math.random() * height);
		body.appendChild(newElement);
	}, 500);
	
}
