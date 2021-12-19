
function initMap(){

  // Map option
  var options = {
      center: {lat: 28.644800 , lng: 77.216721 },
      zoom: 6
  }

  //New Map
  map = new google.maps.Map(document.getElementById("map"),options)

  //listen for click on map location
  google.maps.event.addListener(map, "click", (event) => {
      //add Marker
      addMarker({location:event.latLng});
  })

  //Creating an array of lacations that need to be marked
  let MarkerArray = [ { location: {lat: 22.978624, lng: 87.747803}, 
    imageIcon: "https://img.icons8.com/nolan/2x/marker.png", 
    content: `<h2>West Bengal</h2>`},

    {location: {lat: 26.2006043, lng: 92.9375739},
    imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
    content: `<h2>Assam</h2>`},

    {location: {lat: 27.532972, lng: 88.512218},
      imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
      content: "<h3>Sikkim<h3>"},

    {location: {lat: 27.532972, lng: 88.512218},
          imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
          content: "<h3>Sikkim<h3>"}, //Sikkim

    {location: {lat: 25.467031, lng: 91.366216},
          imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
          content: "<h3>Meghalaya<h3>"}, //Meghalaya

    {location: {lat: 26.158435 , lng: 94.562443},
          imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
          content: "<h3>Nagaland<h3>"},  //Nagaland
    {location: {lat: 24.226772, lng: 92.677750},
          imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
          content: "<h3>Mizoram<h3>"} //Mizoram
]

// loop through marker
for (let i = 0; i < MarkerArray.length; i++){
    addMarker(MarkerArray[i]);

}
  //Add marker
   function addMarker(property){
    const marker = new google.maps.Marker({
        position: property.location,
        map: map
      });

        if(property.imageIcon){
          marker.setIcon(property.imageIcon)
        }

        const detailWindow = new google.maps.InfoWindow({
          content: property.content
        });
        marker.addListener("click", ()=>{
          detailWindow.open(map, marker);
        })
  }
}
