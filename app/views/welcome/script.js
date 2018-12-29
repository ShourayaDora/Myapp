var btnmenu=document.getElementById("btn-menu");
var icon=document.getElementById("icon");
btnmenu.addEventListener("click",toggleMenu);
function toggleMenu(event)
{   
	var divoverlay=document.getElementsByClassName("overlay")[0];
var speed=10;
	if(icon.className=="fas fa-bars"){
		icon.className="fas fa-times";
		fadeIn(divoverlay,speed);
	}
	else
		{
		icon.className="fas fa-bars";
			fadeOut(divoverlay,speed);
		}


}
function fadeIn(elem,speed)
{
	var c=setInterval(function(){
		elem.style.opacity=Number(elem.style.opacity)+0.02;
		if(elem.style.opacity==1)
			clearInterval(c);
	},speed);
}
function fadeOut(elem,speed)
{
	var c=setInterval(function(){
		elem.style.opacity=Number(elem.style.opacity)-0.02;
		if(elem.style.opacity<=0)
			{
				elem.style.opacity=0;
		   clearInterval(c);
			}
	},speed);
}
