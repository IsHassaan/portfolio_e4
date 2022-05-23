import '../css/content.css';

function Content(){
    return(
<div className="content">

    <div className="first_column">
        <h3>Ismail Hassaan</h3>
        <p> Étudiant en BTS SIO option SLAM, je suis cette formation dans
            le but d'acquérir les compétences ainsi que les connaissances
            nécessaires à la conception et au développement de logiciels
            et applications web. Cette formation m'a permis d'en apprendre
            plus sur le métier de développeur et ses responsabilités grâce
            à des cours théoriques suivis de mises en situation à travers
            des périodes de stage en entreprises.
        </p>
    </div> 
    <p id="projets"></p>
    <div id="project">
        <img src={require('../assets/project_img.png')} alt="projet"/>
        <p>Prizm est un projet fondé sur l'idée d'une plateforme interactive.
            Il s'agit d'un blog gratuit qui permet de partager des articles
            de manière communautaire et sans modération à travers plusieurs
            catégories triées en fonction des besoins des utilisateurs autour
            d'une interface simple et intuitive.
        </p>
        <a href="https://conferred-street.000webhostapp.com" target='blank'>Visiter</a>
    </div>


    <div className="project2">
        <p>Ce site est un projet individuel comprenant une carte intéractive au format SVG
            liée à une interface dynamique.
            Une base de données vous permet de combiner vos recherche avec une API gérée en temps 
            réel qui vous permet de rester connecter au monde entier à travers des informations météorologique en direct.
        </p>
        <a href="https://treated-pine.000webhostapp.com" target='blank'>Visiter</a>
        <img src={require('../assets/project_img2.png')} alt="projet"/>
    </div>
    
    <div className="project3">
    <img src={require('../assets/project_img3.png')} alt="projet"/>
        <p>Le jeu du morpion est une manière d'appréhender les bases du C# et ses nombreuses possibilités.
            En passant par une fonction qui rempli un tableau en fonction de l'entrée de l'utilisateur, 
            nous pouvons créer une application ludique et intelligente.
        </p>
    </div>
    <h3 id="veil">Veil E4</h3>
</div>
    );
}

export default Content;