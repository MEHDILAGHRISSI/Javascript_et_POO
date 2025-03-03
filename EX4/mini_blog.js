// Classe User
class User {
    constructor(nom, email) {
        this.nom = nom;
        this.email = email;
    }

    // Convertir l'objet User en JSON
    toJSON() {
        return JSON.stringify({
            nom: this.nom,
            email: this.email
        });
    }

    // Convertir un JSON en objet User
    static fromJSON(jsonString) {
        const data = JSON.parse(jsonString);
        return new User(data.nom, data.email);
    }
}

// Classe Post
class Post {
    constructor(titre, contenu, auteur) {
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;  // Instance de la classe User
        this.date = new Date().toISOString();  // Date de création du post
    }

    // Convertir l'objet Post en JSON
    toJSON() {
        return JSON.stringify({
            titre: this.titre,
            contenu: this.contenu,
            auteur: this.auteur.toJSON(),  // On convertit l'auteur en JSON
            date: this.date
        });
    }

    // Convertir un JSON en objet Post
    static fromJSON(jsonString) {
        const data = JSON.parse(jsonString);
        const auteur = User.fromJSON(data.auteur);  // Convertir l'auteur en objet User
        return new Post(data.titre, data.contenu, auteur);
    }
}

// Classe Blog
class Blog {
    constructor() {
        this.posts = [];  // Tableau de posts
        this.users = [];  // Tableau d'utilisateurs
    }

    // Ajouter un utilisateur
    ajouterUtilisateur(user) {
        this.users.push(user);
    }

    // Ajouter un post
    ajouterPost(post) {
        this.posts.push(post);
    }

    // Lister les posts
    listerPosts() {
        console.log("Liste des posts :");
        this.posts.forEach((post, index) => {
            console.log(`${index + 1}. Titre: ${post.titre} - Auteur: ${post.auteur.nom} - Date: ${post.date}`);
        });
    }

    // Convertir le Blog en JSON (posts et utilisateurs)
    toJSON() {
        return JSON.stringify({
            posts: this.posts.map(post => JSON.parse(post.toJSON())),  // Convertir chaque post en JSON
            users: this.users.map(user => JSON.parse(user.toJSON()))   // Convertir chaque utilisateur en JSON
        });
    }

    // Convertir un JSON en Blog
    static fromJSON(jsonString) {
        const data = JSON.parse(jsonString);
        const blog = new Blog();

        // Reconstituer les utilisateurs
        data.users.forEach(userData => {
            blog.ajouterUtilisateur(User.fromJSON(JSON.stringify(userData)));
        });

        // Reconstituer les posts
        data.posts.forEach(postData => {
            blog.ajouterPost(Post.fromJSON(JSON.stringify(postData)));
        });

        return blog;
    }
}

// Programme principal

// Création d'utilisateurs
const user1 = new User("Jean Dupont", "jean@example.com");
const user2 = new User("Marie Martin", "marie@example.com");

// Création du blog
const blog = new Blog();

// Ajouter les utilisateurs au blog
blog.ajouterUtilisateur(user1);
blog.ajouterUtilisateur(user2);

// Création de posts
const post1 = new Post("Premier Post", "C'est le contenu du premier post.", user1);
const post2 = new Post("Deuxième Post", "C'est le contenu du deuxième post.", user2);

// Ajouter des posts au blog
blog.ajouterPost(post1);
blog.ajouterPost(post2);

// Lister les posts
blog.listerPosts();

// Convertir le blog en JSON
const blogJSON = blog.toJSON();
console.log("\nBlog en JSON :");
console.log(blogJSON);

// Convertir le JSON en objet Blog
const newBlog = Blog.fromJSON(blogJSON);
console.log("\nBlog reconstitué depuis JSON :");
newBlog.listerPosts();
