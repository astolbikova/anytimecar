function filter(data, bounds) {

 console.log("PARSE");

 let features = [];

 data.forEach(function(item, index, array) {

   let feature = {
    "type": "Feature",
    "id": item.id,
    "geometry": {
     "type": "Point",
     "coordinates": [item.coords[0], item.coords[1]]
    },
    "prorerties": {
     "balloonContent": "имя: " + item.name,
     "clusterCaption": "Метка 1",
     "hintContent": "модель:" + item.model,
     "myDescription": "Произвольное описание",
     "name": item.name,
     "number": item.number,
     "brand": item.brand,
     "model": item.model,
     "color": item.color,
     "course": item.course,
     "fuel": item.fuel,
     "fluid": item.fluid,
     "parking": item.parking
    }
    //"options":
   };

   features.push(feature);
  },

 );

 console.log("FILTER");
 console.log(bounds);

 // while (typeof data === 'undefined' || typeof _bounds === 'undefined') {
 //  setTimeout(function() {
 //   throw new Error("We have uncorrect data!");
 //  }, 1);
 // }

 let carsInside = [];
 let topLeft = bounds[0];
 let bottomRight = bounds[1];

 features.forEach(function(item, index, array) {

  //if car is not in between
  let lat = item.geometry.coordinates[0];
  let lng = item.geometry.coordinates[1];

  if (lng > parseInt(topLeft[1].toFixed(4)) && lng < parseInt(bottomRight[1].toFixed(4)) &&
   lat > parseInt(topLeft[0].toFixed(4)) && lat < parseInt(bottomRight[0].toFixed(4))
  ) {
   carsInside.push(item);
  }
 });

 return {
  "type": "FeatureCollection",
  "features": carsInside
 };
}

module.exports = {
 filter: filter,
};