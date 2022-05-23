import '../css/content.css';

function Competences(){
    return(

    <div className="competences">         
        <div className="content">
            <img src={require('../assets/C_logo.png')} alt="competence" />
            <p>
                <li>Création d'application console</li>
                <li>Gestion de fonctions et procédures</li>
                <li>développement en POO</li>
                <li>Gestion de base de données SQL</li>
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/javascript.png')} alt="competence" />
            <p>
                <li>Création éléments front-end</li>
                <li>Gestion de fonctions et procédures</li>
                <li>Liaison back-end (NodeJS)</li>
                <li>Proprety binding</li>
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/Mysql_logo.png')} alt="competence" />
            <p>
                <li>Création de base de données</li>
                <li>Gestion de requêtes inter-table</li>
                <li>Mise en place de paramètres de confidentialité</li>
                <li>Liaison multi-plateformes</li>
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/node_js.png')} alt="competence" />
            <p>
                <li>Liasion front-end</li>
                <li>Liaison base de données SQL</li>
                <li>Lecture de requêtes SQL</li>
                <li>Méthode POST/GET des données SQL</li>
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/python.png')} alt="competence" />
            <p>
                <li>Création application console</li>
                <li>Création projet mathématique</li>
                <li>Gestion de fonctions et procédures</li>
                <li>Import de bibliothèques externes</li>
            </p>
        </div>

    </div>
    );
}
export default Competences;