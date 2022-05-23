var a=1;
var b=1;
function darkMod(){
   if(a==1){
    document.getElementById("nightmodimg").style.display="none";
    console.log("oui");
    return a=0;
   }
   else{
    document.getElementById("nightmodimg").style.display="flex";
    console.log("non");
    return a=1;
   }
}