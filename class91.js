// Upload upazila boundary shape file of Bangladesh to GEE asset tab. Filter out your desired upazila, and
//  print the area, and perimeter of your upazila. Finally, show your upazila in the map. 
// Take a screenshot of the map. Upload the screenshot, GEE code link in your GitHub repo. Submit your repo link.



var dataset = ee.FeatureCollection('FAO/GAUL/2015/level11');

 var upazila = roi.filter(ee.Filter.eq("NAME_3","Fatikchhari"))
print(upazila)

var styleParams = {
  fillColor: 'yellowgreen',
  color: '00909F',
  width: 3.0,
};
dataset = upazila.style(styleParams);
Map.addLayer(upazila.style(styleParams),{}, "Fatikchhari")


Map.centerObject(upazila,11)

var upazila = roi.filter(ee.Filter.eq("NAME_3","Fatikchhari")).geometry().area()
print(upazila)
var upazila = roi.filter(ee.Filter.eq("NAME_3","Fatikchhari")).geometry().perimeter()
print(upazila)