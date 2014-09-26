function insertHeader(){
	var link = document.querySelector('link[rel = "import"]');
	var content = link.import;
	var header = content.querySelectorI('#header');
	document.body.insertBefore(header, document.body.firstChild);
}


function make_header() {
	var headerHTML = '<div id = "logo">LOGO</div>\
						<div id = "menu">\
							<ul>\
								<a href = "web.html" ><li>2 Col</li>\
								<a href = "3col.html"><li>3 Col</li></a>\
								<a href = "3box.html"><li>3 Box</li></a>\
								<a href = "5box.html"><li>5 Box</li></a>\
								<a href = "featured.html"><li>Featured</li></a>\
								<a href = "golden.html"><li>Golden</li></a>\
							</ul>\
						</div>';
	document.getElementById("header").innerHTML = headerHTML;
	var thisPage = document.getElementById("header").innerHTML;
	document.getElementById(thisPage).setAttribute("class	", "active");
}