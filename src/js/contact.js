import '../css/contact.css';

function Contact(){
    return(
<div className="contact">
    <p id="contact">Contact</p>
    <div className="bottom_contact">
    
        <div className="nom">
            <h1>Portfolio</h1>
            <p>A propos de moi</p>
            <div className="img_contact">
            <a href="https://www.linkedin.com/in/hassaan-i-a20b24219/" target="blank"><img src={require('../assets/linkedin.png')} alt="projet"/></a>
            <a href="https://github.com/IsHassaan" target="blank" ><img src={require('../assets/github.png')} alt="projet"/></a>            </div>
        </div>

        <div className="infos">
            <h1>Contactez moi</h1>
            <p>E-mail : is.hassaan27@gmail.com</p>
            <p>Paris, France</p>
        </div>
        <div className="bottom_links">
            <h1>Pages</h1>
            <a href="#competences">Competences</a>
            <a href="#project">Projets</a>
            <a href="#veil">Veil</a>
        </div>
    </div>

    <div className="copyright">
        <p>@2022 Ismail Hassaan</p>
        <a href="">Mention légale</a>
    </div>

</div>

    );
}
export default Contact;