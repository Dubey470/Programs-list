/* Program 20:- Create a page with dynamic effect, 
Write the code to include layers and basic animation. */

function movered()
{
    document.getElementById("layer1").style.left="70px";
}
function movegreen()
{
    document.getElementById("layer2").style.left="95px";
}
function moveblue()
{
    document.getElementById("layer3").style.left="120px";
}
function showgreen(status)
{
    if(status)
        document.getElementById("layer2").style.visibility="visible";
   else  
        document.getElementById("layer2").style.visibility="hidden";    
}