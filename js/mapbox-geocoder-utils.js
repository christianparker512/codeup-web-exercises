"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search"46 westerleigh, san antonio, texas", mapboxToken) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + mapboxToken)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;

            map.addControl(new mapboxgl.NavigationControl());
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */

// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }
// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//         })
//         // to get all the data from the request, comment out the following three lines...
//         .then(function(data) {
//             return data.features[0].place_name;
//         });
// }

// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function (res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function (data) {
//             return data.features[0].center;
//         });
// }

geocode("3703 19th Street, Lubbock, TX", mapboxToken)
    .then(function (result) {
        console.log('Jazz...A Louisiana Kitchen! ' + result);
        map.setCenter(result);
        map.setZoom(15);

        new mapboxgl.Marker()
        .setLngLat(result)
        .addTo(map);
    });

geocode("401 S Alamo St, San Antonio, TX, 78205", mapboxToken)
    .then(function (result) {
        console.log('Love me some Pasta at Nonna Osteria! ' + result);
        map.setCenter(result);
        map.setZoom(15);

        new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);
    });

geocode("3714 Broadway, San Antonio, TX", mapboxToken)
    .then(function (result) {
        console.log('Best BBQ in town! ' + result);
        map.setCenter(result);
        map.setZoom(15);

        new mapboxgl.Marker()
            .setPopUp
            .setLngLat(result)
            .addTo(map);
    });

//Reverse Geocode
// function reverseGeocode(coordinates, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
//         .then(response => response.json())
//         .then(data => {
//             return data
//         })
// };

// var clementine ={lng: -98.5219, lat: 29.5330}
//
// reverseGeocode(clementine, mapboxToken)
//     .then(function (result) {
//         console.log("Clementine and their tasting menu! " + result)
//
//         new mapboxgl.Marker()
//             .setLngLat(result)
//             .addTo(map);
//     })
