class Vecteur2D{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    
    afficher() {
     console.log(`les coordones sont x= ${this.x}  y=${this.y}`  );   
    }
    
    ajouter(vAutre){
        this.x+=vAutre.x;
        this.y+= vAutre.y;
    

    }

}

let v1 = new Vecteur2D(5,6);
let v2 =new Vecteur2D(4,7);

v1.afficher();
v2.afficher();

v1.ajouter(v2);
v1.afficher();



class Rectangle {
    constructor(longueur=1, largeur=1){
        this.longueur=longueur;
        this.largeur=largeur;
        this.nom="rectangle";
    }
    
    afficher(){
        console.log(`je suis un ${this.nom} de longueur  ${this.longueur} et de largeur ${this.largeur}  `);
    }

    surface(){
        return this.largeur * this .longueur;
    } 


}

class Carre extends Rectangle{
    constructor(cote = 1){
        super(cote , cote);
        this.nom="carre";
    }
}


const rectangle = new Rectangle(5, 10);
const carre = new Carre(4);

rectangle.afficher();
console.log(`surface du rectangle : ${rectangle.surface()}`);

carre.afficher();
console.log(`surface du carre : ${carre.surface()}`);


class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}


class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);  
        this.extrem = new Point(x2, y2); 
    }

    afficher() {
        console.log(`Segment de (${this.orig.x}, ${this.orig.y}) à (${this.extrem.x}, ${this.extrem.y})`);
    }
}

const segment1 = new Segment(0, 0, 3, 4);
segment1.afficher();