(function(){
    'use strict'
    $(document).ready(function() {

        function convertDay(dt) {
            let dateTime = new Date(dt).toDateString();
            return dateTime
        }

        function renderForecast(locationName, forecast ,index) {
            const {dt, dt_txt, main, pop, rain, sys, visiblility, weather, wind} = forecast
            return `
             <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${convertDay(dt_txt)}</h5>
                    <h5 class="card-title">${weather[0].description}</h5>
                    <div><img src="http://openweathermap.org/img/wn/${weather[0].icon}.png"></div> 
                    <h6 class="card-subtitle mb-2 text-muted">${main.temp_max} / ${main.temp_min}</h6>
                    <p class="card-text">${wind.speed}</p>
                    <p class="card-text">${main.pressure}</p>
                </div>
            </div>
        `
        }

        function renderForecasts(locationName, forecasts){
            let html = ' '
            for(let forecast of forecasts) {
                html += renderForecast(locationName, forecast)
            }
            $('#forecast').html(html)
            $('#location').html(`${locationName} Weather`)
        }

        function mapCoords(lon, lat) {
            var longitude = `${lon}`
            var latitude = `${lat}`
            var lonLat = [longitude, latitude]
            return lonLat
        }

        function placeMarker(map, lonlat) {
            let marker = new mapboxgl.Marker({draggable: true})
                .setLngLat(lonlat)
                .addTo(map);
            return marker.getLngLat()
        }
        let currentLocation = "" || "San Antonio";

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            q: "longLat.lat ",
            units: "imperial",
            cnt: 5

        }).done(function (data) {
            console.log(data);
            console.log(data.list)
            renderForecasts(data.city.name, data.list)

            mapboxgl.accessToken = key;
            const latLong = [data.city.coord.lon, data.city.coord.lat]
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: latLong,
                zoom: 9
            });

            placeMarker(map, latLong)
            let geocoder = new MapboxGeocoder({
                accessToken: key,
                mapboxgl: mapboxgl
            });

            document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
            //renderGeocoderInput(map, key)


        }).fail(function(jqXhr, status ,error) {
            console.error(error)
        })
        // function reverseGeocode(coordinates, token) {
        //     var baseUrl = 'https://api.mapbox.com';
        //     var endPoint = '/geocoding/v5/mapbox.places/';
        //     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        //         .then(function(res) {
        //             return res.json();
        //         })
        //         // to get all the data from the request, comment out the following three lines...
        //         .then(function(data) {
        //             for(var i = 0; i < data.features.length; i++){
        //                 if(data.features[i].place_type[0] === "place"){
        //                     return data.features[i].place_name;
        //                 }
        //             }
        //             return data.features[0].place_name;
        //         });
        // }
    })
})()