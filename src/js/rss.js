import '../css/rss.css';

function Rss(){
    return(
<div className="rss">
    <div className="articles">
            <div className="article">
                <a href="https://www.nouvelles-du-monde.com/le-navigateur-firefox-pirate-en-8-secondes-a-laide-de-2-failles-de-securite-critiques/" target='blank'>
                    <h3 className='article_title'>Le navigateur Firefox piraté en 8 secondes à l’aide de 2 failles de sécurité critiques</h3>
                    <img src='https://imageio.forbes.com/specials-images/imageserve//6289fc4ac1dc9247c96b3953/0x0.jpg?format=jpg&width=1200' alt="article picture" className='article_img'/>
                    <p className='article_description'>Avec Windows 11, Microsoft Teams, Ubuntu
                    Desktop et le Tesla Model 3 qui sont tous victimes de pirates en une semaine,
                    vous pourriez être pardonné de ne pas avoir remarqué que Mozilla Firefox a
                    également été piraté. En seulement huit secondes en utilisant deux vulnérabilités
                    de sécurité critiques.</p>
                </a>
            </div>

            <div className="article">
                <a href="https://thepressfree.com/les-contrefacons-profondes-delon-musk-font-la-promotion-dune-nouvelle-arnaque-a-la-crypto-monnaie/" target='blank'>
                    <h3 className='article_title'>Les deep fakes d’Elon Musk font la promotion d’une nouvelle arnaque à la crypto-monnaie </h3>
                    <img src='https://www.bleepstatic.com/content/hl-images/2022/05/22/elon-musk-space-bright.jpg' alt="article picture" className='article_img'/>
                    <p className='article_description'>Les escrocs de crypto-monnaie utilisent
                     de fausses vidéos d'Elon Musk et d’autres éminents défenseurs
                    de la crypto-monnaie pour promouvoir une escroquerie sur la plateforme
                    de trading BitVex qui vole la monnaie déposée.
                    </p>
                </a>
            </div>

            <div className="article">
                <a href="https://www.clubic.com/antivirus-securite-informatique/actualite-414321-bientot-la-fin-des-mots-de-passe.html" target='blank'>
                    <h3 className='article_title'>Bientôt la fin des mots de passe ?</h3>
                    <img src='https://pic.clubic.com/v1/images/1814161/raw.webp?fit=max&width=1200&hash=e096ca524b7e86b8e383539e9a919e982742efef' alt="article picture" className='article_img'/>
                    <p className='article_description'>Un monde sans mot de passe , ce n'est plus de
                    l'utopie, mais une réalité qui pourrait bien devenir, d'ici quelques années, la
                    norme en matière de protection et d'identification.
                    </p>
                </a>
            </div>

            <div className="article">
                <a href="https://www.lemondeinformatique.fr/actualites/lire-la-gestion-des-comptes-a-privileges-centrale-chez-casden-banque-populaire-86787.html" target='blank'>
                    <h3 className='article_title'>GitHub imposera le 2FA à tous les contributeurs de code en 2023</h3>
                    <img src='https://images.itnewsinfo.com/lmi/articles/grande/000000085495.jpg' alt="article picture" className='article_img'/>
                    <p className='article_description'>Afin de renforcer la sécurité de la chaîne
                    d'approvisionnement des logiciels, Github exigera de tous les utilisateurs
                    contribuant au code qu'ils acceptent de recourir à l'authentification double
                    facteur d'ici fin 2023.</p>
                </a>
            </div>
    </div>
    <h3 id="competences">Compétences</h3>
</div>
 

    );
}
export default Rss;