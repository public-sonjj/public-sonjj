const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://temp-gmail.p.rapidapi.com/get?id=1&type=alias",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "temp-gmail.p.rapidapi.com",
		"x-rapidapi-key": "cac8ceba55msh0f0d8c5391ab425p1c06c0jsn188422f70bc6"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});