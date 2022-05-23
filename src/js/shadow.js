import '../css/shadow.css';
import darkMod from "./function";
function Shadow(){
    return(
<div className="nightMod">
    <button onClick={darkMod}><img src={require('../assets/night_mod_logo.png')} alt="night_mod_logo" id="nightmodimg"/></button>
</div> 

    );
}
export default Shadow;