// trouve la liste de sélection de localisation
                const choixlocalisation = document.getElementById("localisation");
                // écoute les changements (sélections) dans la liste de sélection de localisation
                choixlocalisation.addEventListener("change", () =>{
                    // définition d'une const qui correspond à la localisation sélectionnée dans la liste par l'user
                    const localisation = choixlocalisation.value;
                    // d'abord on vérifie si gps est selectionné pour appeler la fonction qui récupère les coordonnées du user. si c'est autre chose qui est séléctionné, on part dans la fonction qui affiche les localisations fixées à l'avance
                     if (localisation === "gps") {
                     requestLocation();} 
                     else {
                      afficherMeteo(localisation);
                         }
                });
            // définition d'une fonction qui affiche les données de l'api en fonctione de la const localisation 
                async function afficherMeteo(localisation) {
                 console.log(`recherche de la météo pour ${localisation}`) 
                 //requete api est faite mais pour lausanne spécifiquement pour le moment
                 // il faudrait fetch avec un lien qui adapte lat et lon en fonction de la localisation : quand la valeur est Lausanne, fetch le lien actuel et même chose avec Louvain-la-Neuve (c'est très manuel mais ça va pour le moment)
                 if(localisation == "Lausanne") {
                  document.querySelector("img").setAttribute("id", "weathericon")
                    // fetch the data from the api (what weather: clouds, sunny, rain, ect)
                     // takes the response from the api and turns it into json (javascript) and then checks the first weather in the list and logs it in the console
                     fetch("https://api.openweathermap.org/data/2.5/forecast?lat=46.516&lon=6.63282&units=metric&lang=fr&appid=cc9ff53426af862d3e856f52b06f95df")
                    .then (response => response.json())
                    .then (data => {
                
                     // looks for the icon code in the api   response and puts the code in the generic image url of openweather to get the complete url of the image
                    const iconcode = data.list[0].weather[0].icon;
                    const icon = "https://openweathermap.org/img/wn/"+iconcode+"@2x.png";
                     //changed data.list[0].weather[0].main to .description to test the language parameters of the api
                    const weather = data.list[0].weather[0].description;
                    const temp = data.list[0].main.temp;
                    // rounds up the number (1=1 après la virgule, 0=0 après la virgule)
                    const formattedtemp = Number(temp).toFixed(0).replace('.', ',');
                    // selects the <img> and changes its source with the const icon we defined earlier
                    document.querySelector("img").src = icon 
                    // finds the paragraph (with the id "textblock" we defined) and changes its text from loading... to the const weather)
                    document.getElementById("description").textContent = weather;
                    document.getElementById("tempblock").textContent = formattedtemp + "°";
                    document.getElementById("cityname").textContent=""
                    })
                 }
                 if(localisation == "Louvain-la-Neuve") {
                  // trouve la balise image dans l'html et remplace son id par "weathericon". un seul id admis par balise. il faut repeter la ligne pour chaque if (sinon c'est celui qui a été set la dernière fois qui est utilisé, ne reviendra pas par défaut à l'id de base dans l'html)
                  document.querySelector("img").setAttribute("id", "weathericon")
                    // fetch the data from the api (what weather: clouds, sunny, rain, ect)
                     // takes the response from the api and turns it into json (javascript) and then checks the first weather in the list and logs it in the console
                     fetch("https://api.openweathermap.org/data/2.5/forecast?lat=50.66829&lon=4.61443&units=metric&lang=fr&appid=cc9ff53426af862d3e856f52b06f95df")
                    .then (response => response.json())
                    .then (data => {
                
                     // looks for the icon code in the api response and puts the code in the generic image url of openweather to get the complete url of the image
                    const iconcode = data.list[0].weather[0].icon;
                    const icon = "https://openweathermap.org/img/wn/"+iconcode+"@2x.png";
                     //changed data.list[0].weather[0].main to .description to test the language parameters of the api
                     const weather = data.list[0].weather[0].description;
                    const temp = data.list[0].main.temp;
                    // rounds up the number (1=1 après la virgule, 0=0 après la virgule)
                    const formattedtemp = Number(temp).toFixed(0).replace('.', ',');
                    // selects the <img> and changes its source with the const icon we defined earlier
                    document.querySelector("img").src = icon 
                    // finds the paragraph (with the id "textblock" we defined) and changes its text from loading... to the const weather)
                    document.getElementById("description").textContent = weather;
                    document.getElementById("tempblock").textContent = formattedtemp + "°";
                    document.getElementById("cityname").textContent=""
                    })
                 }
                 if(localisation == "Neuchâtel") {
                  // trouve la balise image dans l'html et remplace son id par "weathericon". un seul id admis par balise. il faut repeter la ligne pour chaque if (sinon c'est celui qui a été set la dernière fois qui est utilisé, ne reviendra pas par défaut à l'id de base dans l'html)
                  document.querySelector("img").setAttribute("id", "weathericon")
                    // fetch the data from the api (what weather: clouds, sunny, rain, ect)
                     // takes the response from the api and turns it into json (javascript) and then checks the first weather in the list and logs it in the console
                     fetch("https://api.openweathermap.org/data/2.5/forecast?lat=46.99179&lon=6.931&units=metric&lang=fr&appid=cc9ff53426af862d3e856f52b06f95df")
                    .then (response => response.json())
                    .then (data => {
                
                     // looks for the icon code in the api response and puts the code in the generic image url of openweather to get the complete url of the image
                    const iconcode = data.list[0].weather[0].icon;
                    const icon = "https://openweathermap.org/img/wn/"+iconcode+"@2x.png";
                     //changed data.list[0].weather[0].main to .description to test the language parameters of the api
                     const weather = data.list[0].weather[0].description;
                    const temp = data.list[0].main.temp;
                    // rounds up the number (1=1 après la virgule, 0=0 après la virgule)
                    const formattedtemp = Number(temp).toFixed(0).replace('.', ',');
                    // selects the <img> and changes its source with the const icon we defined earlier
                    document.querySelector("img").src = icon 
                    // finds the paragraph (with the id "textblock" we defined) and changes its text from loading... to the const weather)
                    document.getElementById("description").textContent = weather;
                    document.getElementById("tempblock").textContent = formattedtemp + "°";
                    document.getElementById("cityname").textContent=""
                    })
                 }
                 if (localisation ==""){
                  document.querySelector("img").setAttribute("id", "loadicon")
                    document.querySelector("img").src="assets/9.gif"
                    document.getElementById("description").textContent=""
                    document.getElementById("tempblock").textContent=""
                 }
                }
                //fonction qui recupère la géolocalisation du user
                function requestLocation() {
                // changer l'image ici pour avoir une image de chargement
                document.querySelector("img").setAttribute("id", "loadicon")
                document.querySelector("img").src="assets/Cat Kitty GIF.gif"
                document.getElementById("description").textContent="je réflechis..."
                document.getElementById("tempblock").textContent=""
                document.getElementById("cityname").textContent=""


                  // navigator.geolocation est une fonctionnalité du browser qu'on appelle
                  navigator.geolocation.getCurrentPosition(
                    // la forme ()=> est une définition de fonction. ça revient à écrire function(position){console.log ect}
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;

                        console.log(lat, lon);
                        
                      // fonction qui fetch l'url modifié
                        function meteogps(lat, lon){
                          const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=cc9ff53426af862d3e856f52b06f95df`;
                           fetch (url)
                    .then (response => response.json())
                    .then (data => {
                      // looks for the icon code in the api   response and puts the code in the generic image url of openweather to get the complete url of the image
                    const iconcode = data.list[0].weather[0].icon;
                    const icon = "https://openweathermap.org/img/wn/"+iconcode+"@2x.png";
                     //changed data.list[0].weather[0].main to .description to test the language parameters of the api
                    const weather = data.list[0].weather[0].description;
                    const temp = data.list[0].main.temp;
                    // rounds up the number (1=1 après la virgule, 0=0 après la virgule)
                    const formattedtemp = Number(temp).toFixed(0).replace('.', ',');
                    // selects the <img> and changes its source with the const icon we defined earlier
                    document.querySelector("img").src = icon 
                    document.querySelector("img").setAttribute("id", "weathericon")
                    // finds the paragraph (with the id "textblock" we defined) and changes its text from loading... to the const weather)
                    document.getElementById("description").textContent = weather;
                    document.getElementById("tempblock").textContent = formattedtemp + "°";
                    }
                    )
                    fetch (url)
                    .then (response => response.json())
                    .then (locationdata =>{
                      // locationdata.city.name describes a path: it says "store in "city" whatever you found in name under city under locationdata (we defined locationdata juste above, a parameter that stores the response we fetched from the api)
                    const city = locationdata.city.name;
                    document.getElementById("cityname").textContent = city;
                    })
                        }
                      meteogps(lat, lon);
                     })
                }