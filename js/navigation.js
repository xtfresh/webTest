function insertNavigation(){
	var link = document.querySelector('link[rel="import"]');
	var content = link.import;
	var navigation = content.querySelector('#ddm');
	// document.body.insertBefore(header, document.body.firstChild);
	document.getElementById("header").appendChild(navigation);
}

function showSubMenu(obj){
	var sub = obj.getElementsByTagName('div')[1];	
	sub.style.visibility = "visible";
	sub.style.height = "100%";
}

function hideSubMenu(obj){
	var sub = obj.getElementsByTagName('div')[1];		
	sub.style.visibility = "hidden";
	sub.style.height = 0;	
}