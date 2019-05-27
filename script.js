var ajax = new XMLHttpRequest();

ajax.open("GET", "https://api.exchangeratesapi.io/latest", true);

ajax.send();

ajax.onreadystatechange = function(){
	if(ajax.readyState == 4 && ajax.status == 200){
		var data = ajax.responseText;
	}

		console.log(data);
}