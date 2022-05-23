import '../css/content.css';

function Competences(){
    return(

    <div className="competences">         
        <div className="content">
            <img src={require('../assets/C_logo.png')} alt="competence" />
            <p>There once lived an old man and an old woman who were peasants and had
            to work hard to earn their daily bread. The old man used to go to fix
            fences and do other odd jobs for the farmers around, and while he was
            gone the old woman, his wife, did the work of the house and worked in
            their own little plot of land</p>
        </div>

        <div className="content">
            <img src={require('../assets/javascript.png')} alt="competence" />
            <p>There once lived an old man and an old woman who were peasants and had
            to work hard to earn their daily bread. The old man used to go to fix
            fences and do other odd jobs for the farmers around, and while he was
            gone the old woman, his wife, did the work of the house and worked in
            their own little plot of land</p>
        </div>

        <div className="content">
            <img src={require('../assets/Mysql_logo.png')} alt="competence" />
            <p>
                La technologie MySQL lié à une application web ou à un logiciel
                permet de gérer et stocker une lourde quantité de données de façon
                dynamique.
                Les données peuvent alors circuler en fonction des actions des 
                utilisateurs et peuvent permettre de trier le contenue en fonction des 
                besoins de ce dernier. 
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/node_js.png')} alt="competence" />
            <p>NodeJs permet la liaison des applications web aux différents serveurs mise 
                en place par le développeur.
                Ceci permet notamment de faire la liaison entre l'application et la base de 
                donnée afin d'afficher ou de stocker des données de manière dynamique.
                Cette technologie est au coeur de l'intéraction des applications web Reactjs.
            </p>
        </div>

        <div className="content">
            <img src={require('../assets/python.png')} alt="competence" />
            <p>There once lived an old man and an old woman who were peasants and had
            to work hard to earn their daily bread. The old man used to go to fix
            fences and do other odd jobs for the farmers around, and while he was
            gone the old woman, his wife, did the work of the house and worked in
            their own little plot of land</p>
        </div>

    </div>
    );
}
export default Competences;