/* gmap */

$(function(){
		   
	$('#gmap').show();
	
	google.maps.event.addDomListener(window, 'load', function() {
		var mapdiv = document.getElementById('gmap');
		var myOptions = {
			zoom: 17,
			center: new google.maps.LatLng(35.699477, 139.647562),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scaleControl: true,
			mapTypeControl: false
		};
		var map = new google.maps.Map(mapdiv, myOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(35.699477, 139.647562),
			map: map
		});
		/*var infowindow = new google.maps.InfoWindow({
			content: "居酒屋　平土 （ひらつち）",
			size: new google.maps.Size(50, 50)
		});
		infowindow.open(map, marker);*/
		google.maps.event.addListener(marker, 'click', function() {
			//infowindow.open(map, marker);
		});
		google.maps.event.trigger(marker, 'click');
	});	

});