class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }

    etudier() {
        console.log(`${this.prenom} ${this.nom} étudie.`);
    }
}


class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }

    enseigner() {
        console.log(`${this.nom} enseigne.`);
    }
}

let etudiant1 = new Etudiant("Dupont", "Jean", 20, "CNE123");
let etudiant2 = new Etudiant("Martin", "Marie", 22, "CNE456");
let etudiant3 = new Etudiant("Durand", "Lucie", 19, "CNE789");

let professeur1 = new Professeur("Lemoine", 45, "CIN001");
let professeur2 = new Professeur("Bernard", 50, "CIN002");


let listeEtudiants = [etudiant1, etudiant2, etudiant3];


function trierEtudiants(liste) {
    return liste.sort((a, b) => {
        if (a.nom === b.nom) {
            return a.prenom.localeCompare(b.prenom); 
        }
        return a.nom.localeCompare(b.nom); 
    });
}


let etudiantsTries = trierEtudiants(listeEtudiants);
console.log("Etudiants triés par nom et prénom :");
etudiantsTries.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}`);
});