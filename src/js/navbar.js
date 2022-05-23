import '../css/navbar.css';

function Navbar(){
    return(
<div className="navbar">
       <a href="" className='headtitle'><h1>Portfolio</h1></a>
        <div className="navbar_links">
            <a href="#project" className="home_link">Projets</a>
            <a href="#veil" className="home_link">Veil E4</a>
            <a href="#competences"  className="home_link">Compétences</a>
            <a href="#contact" className="contactTitle">Contact</a>
        </div> 
</div> 

    );
}
export default Navbar;