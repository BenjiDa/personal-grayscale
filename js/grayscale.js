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
});


// Mapbox map geologic map and active fault map slider.
//
mapboxgl.accessToken = 'pk.eyJ1IjoiYm1lbG9zaCIsImEiOiJjamw0N2lnenYwNTd1M2tubHNneG0ydHFpIn0.MxTNGVxi4sJytIpjajrHCg';

// Create active fault map
var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/bmelosh/ck9vyezsh04we1ipbsfr346bb',
    // 'mapbox://styles/bmelosh/cjlcs7b3r290q2sphp5n4g11v',
    center: [-121, 37.8],
    zoom: 8
});

// Load fault data 
beforeMap.on('style.load', function() {
    // Fault data and colors
    beforeMap.addLayer({
        'id': 'qfaults',
        'type': 'line',
        'source': {
          type: 'vector',
          url: 'mapbox://bmelosh.ai2sxfnc'
      },
      'source-layer': 'qfaults-306owm',
      'paint':{
        'line-color':[
          "match",
              ["get", "sliprate"],
              "Greater than 5.0 mm/yr",
              "#990000",
              "Between 0.2 and 1.0 mm/yr",
              "#ef6548",
              "Between 1.0 and 5.0 mm/yr",
              "#d7301f",
              "Less than 0.2 mm/yr",
              "#fc8d59",
              "#464343"
        ]}

    });
    // Extra wide transparent faults for popup
    beforeMap.addLayer({
        'id': 'qfaults-fat',
        'type': 'line',
        'source': {
          type: 'vector',
          url: 'mapbox://bmelosh.ai2sxfnc'
      },
      'source-layer': 'qfaults-306owm',
      'paint': {
        'line-width': 7,
        'line-color': "hsla(0, 0%, 0%, 0)"
        }

    });
});

// Add new popup
var popupBefore = new mapboxgl.Popup({
    closeOnClick: false,
})

// Populate popup on hover
beforeMap.on('mouseenter', 'qfaults-fat', function(e) {
    beforeMap.getCanvas().style.cursor = 'pointer';

    popupBefore.setLngLat(e.lngLat)
        .setHTML('<strong>Name: </strong>' + e.features[0].properties.faultname + '<br>' + '<strong>Age: </strong>' + e.features[0].properties.age + '<br>' + '<strong>Rate: </strong>' + e.features[0].properties.sliprate + '<br>' + '<strong>Sense: </strong>' + e.features[0].properties.slipsense )
        .addTo(beforeMap);
});

// Remove popup on hover
beforeMap.on('mouseleave', 'qfaults-fat', function() {
      beforeMap.getCanvas().style.cursor = '';
      popupBefore.remove();
});

// Add geologic map
var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/bmelosh/ck9vyezsh04we1ipbsfr346bb',
    center: [-121, 37.8],
    zoom: 8
});
// Load geologic data
afterMap.on('style.load', function() {
    // Geology polygons with colors
    afterMap.addLayer({
      'id': 'geology-polys',
      'type': 'fill',
      'source': {
          type: 'vector',
          url: 'mapbox://bmelosh.9v4tc1tu'
      },
      'source-layer': 'cageol_poly',
      'paint':{
        'fill-color':[
          "match",
              ["get", "ORIG_LABEL"],
              ["Qs"],
              "rgba(231, 231, 217, 0.5)",
              ["Q"],
              "rgba(233, 230, 184, 0.5)",
              ["Qoa"],
              "rgba(235, 227, 134, 0.5)",
              ["P"],
              "rgba(229, 209, 172, 0.5)",
              ["QPc"],
              "rgba(208, 189, 108, 0.5)",
              ["M"],
              "rgba(225, 191, 35, 0.5)",
              ["Mc"],
              "rgba(216, 188, 68, 0.5)",
              ["O"],
              "rgba(208, 190, 138, 0.5)",
              ["Oc"],
              "rgba(201, 186, 149, 0.5)", 
              ["E"], 
              "rgba(223, 178, 116, 0.5)",
              ["Ec"], 
              "rgba(213, 164, 116, 0.5)",
              ["Ep"], 
              "rgba(189, 150, 105, 0.5)",
              ["Qls"],
              "rgba(224, 214, 35, 0.5)",
              ["Qg"],
              "rgba(195, 196, 198, 0.5)",
              ["Tc"],
              "rgba(231, 175, 110, 0.5)",
              ["Qrv"], 
              "rgba(236, 165, 62, 0.5)",
              ["Qrvp"],
              "rgba(231, 149, 64, 0.5)",
              ["Qv"],
              "rgba(231, 123, 67, 0.5)",
              ["Qvp"], 
              "rgba(197, 118, 75, 0.5)",
              ["Tv"],
              "rgba(232, 139, 118, 0.5)",
              ["Tvp"],
              "rgba(195, 132, 118, 0.5)",
              ["Ti"], 
              "rgba(220, 61, 93, 0.5)",
              ["grCz","grCz?"],
              "rgba(237, 205, 221, 0.5)",
              ["TK"], 
              "rgba(183, 189, 126, 0.5)",
              ["Ku"],
              "rgba(145, 188, 132, 0.5)",
              ["Kl"],
              "rgba(137, 182, 80, 0.5)",
              ["K"],
              "rgba(185, 206, 77, 0.5)",
              ["KJf"],
              "rgba(143, 177, 126, 0.5)",
              ["KJfm"],
              "rgba(125, 165, 137, 0.5)",
              ["KJfs"],
              "rgba(139, 185, 155, 0.5)",
              ["J"],
              "rgba(63, 171, 147, 0.5)",
              ["Tr"],
              "rgba(98, 185, 196, 0.5)",
              ["Pm"],
              "rgba(76, 178, 215, 0.5)",
              ["C"], 
              "rgba(143, 180, 211, 0.5)",
              ["D"],
              "rgba(141, 152, 191, 0.5)",
              ["SO"],
              "rgba(180, 164, 193, 0.5)",
              ["Ca"],
              "rgba(199, 137, 130, 0.5)",
              ["pC"],
              "rgba(184, 133, 121, 0.5)",
              ["sch"],
              "rgba(135, 172, 194, 0.5)",
              ["ls"],
              "rgba(106, 145, 181, 0.5)",
              ["Pz", "PZ"],
              "rgba(115, 176, 192, 0.5)",
              ["gr-m"],
              "rgba(203, 140, 155, 0.5)",
              ["m"],
              "rgba(183, 150, 167, 0.5)",
              ["pCc"],
              "rgba(180, 143, 134, 0.5)",
              ["Mzv"],
              "rgba(87, 167, 83, 0.5)",
              ["mv"],
              "rgba(191, 117, 154, 0.5)",
              ["Pzv"],
              "rgba(116, 166, 205, 0.5)",
              ["grMz", "grMz?",],
              "rgba(221, 173, 167, 0.5)",
              ["um"],
              "rgba(146, 103, 157, 0.5)",
              ["gb"],
              "rgba(166, 149, 187, 0.5)",
              ["gr"], 
              "rgba(220, 158, 159, 0.5)",
              ["grPz"],
              "rgba(225, 137, 144, 0.5)",
              ["grpC"],
              "rgba(214, 114, 151, 0.5)",

              ["water"],
              "hsla(0, 0%, 0%, 0)",

              "hsla(0, 0%, 0%, 0)"
            ],
        }
    });
    // Geologic contacts
    afterMap.addLayer({
      'id': 'geology-lines',
      'type': 'line',
      'source': {
          type: 'vector',
          url: 'mapbox://bmelosh.coth06ii'
      },
      'source-layer': 'cageol_arc',
      'paint':{
        'line-color': "hsl(0, 0%, 0%)",
        'line-width': 0.1
      }
  });
    // Faults
    afterMap.addLayer({
      'id': 'faults',
      'type': 'line',
      'source': {
          type: 'vector',
          url: 'mapbox://bmelosh.6zri3uya'
      },
      'source-layer': 'cafaults',
      'paint':{
        'line-color': "hsl(0, 0%, 0%)",
        'line-width': 0.5
      }
  });

    // Add popup and populate it for geology polygons
    afterMap.on('click', 'geology-polys', function(e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<strong>Label: </strong>' + e.features[0].properties.ORIG_LABEL + '<br>' + '<strong>Rock type: </strong>' + e.features[0].properties.ROCKTYPE1 + '<br>' + '<strong>Age: </strong>' + e.features[0].properties.UNIT_AGE )
            .addTo(afterMap);
    });

    // Change the cursor to a pointer when the mouse is over the geology layer.
    afterMap.on('mouseenter', 'geology-polys', function() {
        afterMap.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    afterMap.on('mouseleave', 'geology-polys', function() {
        afterMap.getCanvas().style.cursor = '';
    });
});

// Disable zoom scroll
beforeMap.scrollZoom.disable();
afterMap.scrollZoom.disable();


// A selector or reference to HTML element
var container = '#comparison-container';

var map  = new mapboxgl.Compare(beforeMap, afterMap, container, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});

// Set the initial position of the slider
map.setSlider(600);











