import '../css/rss.css';

function Rss(){
    return(
<div className="rss">
    <div className="articles">
            <div className="article">
                <a href="https://www.bleepingcomputer.com/news/security/malicious-pypi-package-opens-backdoors-on-windows-linux-and-macs/" target='blank'>
                    <h3 className='article_title'>Malicious PyPI package opens backdoors on Windows, Linux, and Macs</h3>
                    <img src='https://www.bleepstatic.com/content/hl-images/2021/05/20/bg_pypi_smaller.png?rand=863321293' alt="article picture" className='article_img'/>
                    <p className='article_description'>Yet another malicious Python package has been
                    spotted in the PyPI registry performing supply chain attacks to drop Cobalt Strike
                    beacons and backdoors on Windows, Linux, and macOS systems.</p>
                </a>
            </div>

            <div className="article">
                <a href="https://www.bleepingcomputer.com/news/security/elon-musk-deep-fakes-promote-new-cryptocurrency-scam/" target='blank'>
                    <h3 className='article_title'>Elon Musk deep fakes promote new cryptocurrency scam</h3>
                    <img src='https://www.bleepstatic.com/content/hl-images/2022/05/22/elon-musk-space-bright.jpg' alt="article picture" className='article_img'/>
                    <p className='article_description'>Cryptocurrency scammers are using deep fake videos
                    of Elon Musk and other prominent cryptocurrency advocates to promote a BitVex trading
                    platform scam that steals deposited currency.</p>
                </a>
            </div>

            <div className="article">
                <a href="https://www.cyberscoop.com/ed-tech-ftc-coppa/" target='blank'>
                    <h3 className='article_title'>FTC warns it will go after ed tech companies misusing children's data</h3>
                    <img src='https://www.cyberscoop.com/wp-content/uploads/sites/3/2022/05/GettyImages-1218865781.jpg' alt="article picture" className='article_img'/>
                    <p className='article_description'>The Federal Trade Commission voted 5-0
                    on Thursday to issue a policy statement warning education tech companies
                    against using data collected from children via education services.</p>
                </a>
            </div>

            <div className="article">
                <a href="https://www.tripwire.com/state-of-security/security-data-protection/multi-factor-authentication-key-cyber-risk-insurance/" target='blank'>
                    <h3 className='article_title'>Multi-Factor Authentication: A Key to Cyber Risk Insurance Coverage</h3>
                    <img src='https://3b6xlt3iddqmuq5vy2w0s5d3-wpengine.netdna-ssl.com/state-of-security/wp-content/uploads/sites/3/Multi-Factor-Authentication-A-Key-to-Cyber-Risk-Insurance-Coverage.jpg' alt="article picture" className='article_img'/>
                    <p className='article_description'>Cybersecurity is not bullet-proof. Buying a cyber risk insurance program can help outsource residual risk, and deploying multi-factor authentication is a prerequisite not only for getting coverage but also for lowering premiums.</p>
                </a>
            </div>
    </div>
    <h3 id="competences">Compétences</h3>
</div>
 

    );
}
export default Rss;