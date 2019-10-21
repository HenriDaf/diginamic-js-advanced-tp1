module.exports =class Planet{

	constructor(name, population){
		this.name = name;
		this.population = population;


	}


	get name(){
		return this._name;
	}

	get population(){
		return this._population;
	}

	set name(name){
		this._name=name;

	}


	set population(population){
		this._population=population;
	}




	static countPlanetsPopulation(planett){
		let counter =0;
		planett.forEach(plant => {
			
			if(plant.population !== 'unknown'){
				counter += parseInt(plant.population);

			}

		});
		return counter;
	}
	
	 display(){
		 console.log(`Planet "${this.name}" - Population : ${this.population}`)
		
	}
}


