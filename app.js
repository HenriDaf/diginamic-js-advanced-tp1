const axios = require('axios');
let Planet = require('./planet.js');

let p = new Promise((resolve, reject) => {
	let planett = [] ;
	axios.get('https://swapi.co/api/planets/')
		.then((response) => {
		let resu= response.data.results; 
		resu.forEach(plant => {
			planett.push(new Planet(plant));
		});
			
		resolve(planett);   
	})
		.catch(function (error) {
		console.log(error);
	})

});
p.then((data) => {
	

	

data.forEach(dat=> {
	console.log(dat.display());
})
	
	console.log("");
	console.log(`Population totale : ${(Planet.countPlanetsPopulation(data))}`);
	


});



