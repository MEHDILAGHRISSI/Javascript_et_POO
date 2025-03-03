class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

let ListeVoiture = []; 

class Hyundai extends Voiture {
    constructor(model, annee, type, carburant, serie, hybride) {
        super(model, "Hyundai", annee, type, carburant); 
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        return `Je suis Hyundai ${this.serie} de type ${this.type}, carburant=${this.carburant}`;
    }
}

class Ford extends Voiture {
    constructor(model, annee, type, carburant, options) {
        super(model, "Ford", annee, type, carburant); 
        this.options = options;
    }
}

function TrierVoiture(ListeVoiture) {
    return ListeVoiture.sort((a, b) => a.annee - b.annee); 
}

ListeVoiture.push(new Hyundai("Ioniq", 2022, "Berline", "Hybride", "Ioniq 5", true));
ListeVoiture.push(new Ford("Mustang", 2020, "Coupé", "Essence", ["Climatisation", "Radar de recul"]));
ListeVoiture.push(new Hyundai("Kona", 2021, "SUV", "Hybride", "Kona Hybrid", true));
ListeVoiture.push(new Ford("Focus", 2021, "Hatchback", "Essence", ["Volant chauffant", "GPS"]));
ListeVoiture.push(new Voiture("A1", "Audi", 2018, "Berline", "Essence"));


console.log("Avant le tri :");
ListeVoiture.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model} (${voiture.annee})`);
});

ListeVoiture = TrierVoiture(ListeVoiture);

console.log("\nAprès le tri par année (croissant) :");
ListeVoiture.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model} (${voiture.annee})`);
});
