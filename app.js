let axios = require('axios');
let Planet = require('./planet.js');

let p = new Promise((resolve, reject) => {
    let planett = [] ;
    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
        let resu= response.data.results; 
        resu.forEach(plant => {
            planett.push(new Planet(plant.name, plant.population));
        });
        resolve(planett);   
    })
    .catch(function (error) {
        console.log(error);
    })
	
});
p.then((data) => {
    console.log(data);
	
	console.log(`Population totale : ${(Planet.countPlanetsPopulation(data))}`);

     
});



