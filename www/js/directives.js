angular.module('app.directives', [])

  .directive('blankDirective', [function () {

  }])

  .directive('map', function () {
      return {

        restrict: 'A',
        link: function (scope, element, attrs) {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 0, lng: 0},
            zoom: 18,
            styles: [{
              featureType: 'poi',
              stylers: [{visibility: 'off'}]  // Turn off points of interest.
            }, {
              featureType: 'transit.station',
              stylers: [{visibility: 'off'}]  // Turn off bus stations, train stations, etc.
            }],
            disableDoubleClickZoom: true
          });


          var infoWindow = new google.maps.InfoWindow({map: map});

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('Posição Não encontrada.');
              map.setCenter(pos);
            }, function () {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }

          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
              'Error: Localização Falhou.' :
              'Error: Seu Browser não suporta localização');
          }


          var infoBoxDiv = document.createElement('div');
          makeInfoBox(infoBoxDiv, map);
          map.controls[google.maps.ControlPosition.TOP_CENTER].push(infoBoxDiv);

          // Listen for clicks and add the location of the click to firebase.
          map.addListener('click', function (e) {
            data.lat = e.latLng.lat();
            data.lng = e.latLng.lng();
            addToFirebase(data);
          });

          // Create a heatmap.
          var heatmap = new google.maps.visualization.HeatmapLayer({
            data: [],
            map: map,
            radius: 16
          });

          initAuthentication(initFirebase.bind(undefined, heatmap));

        }

      }


    }
  );
