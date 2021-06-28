var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-94.578331, 39.099724]),
    zoom: 14,
  }),
});

var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      // brussles
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([4.35247, 50.84673])),
      }),
      // houston
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-95.35842, 29.7499])),
      }),
      // richmond
      new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([-77.434769, 37.54129])),
      }),
      // tempe
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-111.939896, 33.427204])
        ),
      }),
      // bloomington
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-93.298279, 44.840797])
        ),
      }),
      // redwood city
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-122.236115, 37.487846])
        ),
      }),
      // kansas city
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-94.578331, 39.099724])
        ),
      }),
      // Green Bay
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-88.015831, 44.513332])
        ),
      }),
      // Fargo
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-96.789803, 46.877186])
        ),
      }),
      // springfield
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-83.806694, 39.925751])
        ),
      }),
      // longmont
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-122.032616, 47.530102])
        ),
      }),
    ],
  }),
});
map.addLayer(layer);

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var overlay = new ol.Overlay({
  element: container,
  autoPan: true,
  autoPanAnimation: {
    duration: 250,
  },
});
map.addOverlay(overlay);

closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

map.on('singleclick', function (event) {
  if (map.hasFeatureAtPixel(event.pixel) === true) {
    var coordinate = event.coordinate;

    content.innerHTML = 'SALES OFFICE';
    overlay.setPosition(coordinate);
  } else {
    overlay.setPosition(undefined);
    closer.blur();
  }
});
