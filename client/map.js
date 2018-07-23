ymaps.ready(init);

function init() {
 var centerCoords = [
  55.76, 37.64
 ];
 var map = new ymaps.Map("map", {
  center: centerCoords,
  zoom: 7
 });

 var placemark = new ymaps.Placemark(centerCoords, {

 });
 map.geoObjects.add(placemark);

 objectManager = new ymaps.ObjectManager({
  //для кластеризации
  clusterize: true,
  // ObjectManager принимает те же опции, что и кластеризатор.
  gridSize: 32,
  clusterDisableClickZoom: true
 });

 // objectManager.objects.options.set('preset', 'islands#greenDotIcon');
 // objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
 map.geoObjects.add(objectManager);

 let socket = io();

 function pushBounds() {
  let coords = map.getBounds();
  socket.emit('coordinates have been changed', coords);
 };

 socket.on('data have been passed', function(data) {
  console.log(data);
  objectManager.add(data);
 });

 window.onload = function() {
  pushBounds();
 };

 map.events.add('boundschanged', function() {
  pushBounds();
 });

 pushBounds();
};