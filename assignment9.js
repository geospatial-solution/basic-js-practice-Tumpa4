// {

//     "name":"Your_name",
  
//     "hobby":"reading",
  
//     "numList":[2,3,4,5,6,7,9]
  
//   }
  
//   Convert above key-value pair into a GEE Dictionary object. Get the numList from the dictionary.
//  Apply reducer to the list and print the sum of the numList. Upload the GEE code link in your github repo. Submit your repo link.
var dict = ee.Dictionary({
    "name":"Tumpa",
    "hobby":"reading",
    "numList":[2,3,4,5,6,7,9]
  })
  print(dict)
  print(dict.get("numList"))
  var numList = ee.List([2,3,4,5,6,7,9])
  var sumNum = numList.reduce(ee.Reducer.sum())
  print(sumNum)
  