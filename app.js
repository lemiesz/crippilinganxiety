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
		if(randomChance<2 && randomChance>10){
			newElement.innerHTML = "why do i have no friends???";
		} else if (randomChance < 15){
			newElement.innerHTML = "fuck normies";
		} else {
			newElement.innerHTML = "end my life";
		}
		newElement.className = "sadText";
		newElement.style.position = "absolute";
		// newElement.style.position = "absolute"; 
		newElement.style.right = (Math.random() * width);
		newElement.style.top = (Math.random() * height);
		body.appendChild(newElement);
	}, 500);
	
}