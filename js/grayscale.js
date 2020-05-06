/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if ($anchor.attr('href')=='#page-top')
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        else
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top +100
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

// Google Maps Scripts
// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 15,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(40.6700, -73.9400), // New York

//         // Disables the default Google Maps UI components
//         disableDefaultUI: true,
//         scrollwheel: false,
//         draggable: false,

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "landscape",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }]
//         }, {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 29
//             }, {
//                 "weight": 0.2
//             }]
//         }, {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 18
//             }]
//         }, {
//             "featureType": "road.local",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 21
//             }]
//         }, {
//             "elementType": "labels.text.stroke",
//             "stylers": [{
//                 "visibility": "on"
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 16
//             }]
//         }, {
//             "elementType": "labels.text.fill",
//             "stylers": [{
//                 "saturation": 36
//             }, {
//                 "color": "#000000"
//             }, {
//                 "lightness": 40
//             }]
//         }, {
//             "elementType": "labels.icon",
//             "stylers": [{
//                 "visibility": "off"
//             }]
//         }, {
//             "featureType": "transit",
//             "elementType": "geometry",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 19
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.fill",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 20
//             }]
//         }, {
//             "featureType": "administrative",
//             "elementType": "geometry.stroke",
//             "stylers": [{
//                 "color": "#000000"
//             }, {
//                 "lightness": 17
//             }, {
//                 "weight": 1.2
//             }]
//         }]
//     };

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
//     var image = 'img/map-marker.png';
//     var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
//     var beachMarker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: image
//     });
// }


// Mapbox map

// var mapContainer = document.getElementById('map');
// var beforeDiv = document.createElement('div');
// beforeDiv.id = "before";
// beforeDiv.className = 'map';
// var afterDiv = document.createElement('div');
// afterDiv.id = "after";
// afterDiv.className = 'map';
// mapContainer.appendChild(beforeDiv);
// mapContainer.appendChild(afterDiv);



mapboxgl.accessToken = 'pk.eyJ1IjoiYm1lbG9zaCIsImEiOiJjamw0N2lnenYwNTd1M2tubHNneG0ydHFpIn0.MxTNGVxi4sJytIpjajrHCg';

var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/bmelosh/cjlcs7b3r290q2sphp5n4g11v',
    center: [-121, 37.8],
    zoom: 8
});

var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-121, 37.8],
    zoom: 8
});

beforeMap.scrollZoom.disable();
afterMap.scrollZoom.disable();

// A selector or reference to HTML element
// var container = document.getElementById('comparison-container');
var container = '#comparison-container';

var map  = new mapboxgl.Compare(beforeMap, afterMap, container, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});




// afterMap.addControl(new mapboxgl.NavigationControl());

/*Cannot figure out FullscreenControl for both maps*/
/*afterMap.addControl(new mapboxgl.FullscreenControl());
beforeMap.addControl(new mapboxgl.FullscreenControl(), "top-left");*/





    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    // var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    // var map = new google.maps.Map(mapElement, mapOptions);
// }





