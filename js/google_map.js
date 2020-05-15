// AIzaSyDaUZscj1hddEJ4Aw43fXuCbInPi0Jh_Yo  - платный
// AIzaSyDsY_CvOo-gONDOqY__Th2_jIKjb67RcCQ  - бесплатный

function initMap() {
	// Метка карты
	var pos = {
		lat: 50.068796,
		lng: 14.309167
	};
	// Настройки карты
	var opt = {
		center: {
			lat: 50.068796,
			lng: 14.309167
		},
		zoom: 15,
		// styles: [{
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#f5f5f5"
		// 		}]
		// 	},
		// 	{
		// 		"elementType": "labels.icon",
		// 		"stylers": [{
		// 			"visibility": "off"
		// 		}]
		// 	},
		// 	{
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#616161"
		// 		}]
		// 	},
		// 	{
		// 		"elementType": "labels.text.stroke",
		// 		"stylers": [{
		// 			"color": "#f5f5f5"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "administrative.land_parcel",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#bdbdbd"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#eeeeee"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi",
		// 		"elementType": "labels.text",
		// 		"stylers": [{
		// 			"visibility": "off"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#757575"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi.business",
		// 		"stylers": [{
		// 			"visibility": "off"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi.park",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#e5e5e5"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "poi.park",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#9e9e9e"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#ffffff"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road",
		// 		"elementType": "labels.icon",
		// 		"stylers": [{
		// 			"visibility": "off"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road.arterial",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#757575"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road.highway",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#dadada"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road.highway",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#616161"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "road.local",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#9e9e9e"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "transit",
		// 		"stylers": [{
		// 			"visibility": "off"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "transit.line",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#e5e5e5"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "transit.station",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#eeeeee"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "water",
		// 		"elementType": "geometry",
		// 		"stylers": [{
		// 			"color": "#c9c9c9"
		// 		}]
		// 	},
		// 	{
		// 		"featureType": "water",
		// 		"elementType": "labels.text.fill",
		// 		"stylers": [{
		// 			"color": "#9e9e9e"
		// 		}]
		// 	}
		// ]
	}
	// Отображение карты
	var Mymap = new google.maps.Map(document.getElementById('map'), opt);
	// Отображение маркера
	var marker = new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position: pos,
		map: Mymap,
		title: "RBMK Invest"
	});
	// Настройка всплывающего окна
	var info = new google.maps.InfoWindow({
		content: "<h4>Это мое место</h4><p>Просто описание места</p>"
	});
	// Функция всплывающего окна
	marker.addListener("click", function () {
		info.open(Mymap, marker);
	});


}