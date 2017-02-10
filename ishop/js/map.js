function initMap() {
						// Create a map object and specify the DOM element for display.
						var map = new google.maps.Map(document.getElementById('map'), {
							center: {lat: 53.912931, lng: 27.769528},
							scrollwheel: false,
							zoom: 15
						});
			 var image = 'img/header_logo.png';
			var beachMarker = new google.maps.Marker({
				position: {lat: 53.912931, lng: 27.769528},
				map: map,
				icon: image
			});

		}