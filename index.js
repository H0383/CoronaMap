function updateMap() {
    console.log("Updating map with real time data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if(cases>50){
                    color = "rgb(255,0,0)";
                }

                else{
                    color = "rgb(${cases},0,0)";
                }

                people = element.sick;
                if(people>50){
                    color = "red";
                }
                else{
                    color = "blue";
                }


                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);

            });
        })
}
let interval = 3000;
setInterval(updateMap, interval);

