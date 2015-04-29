/*Table Initialization*/

(function() {
	var mapSize = 25;
	for(var x=0; x<mapSize; x++) {
		document.write("<tr>");
		for(var y=0; y<mapSize; y++) {
			document.write("<td><a onclick=\"myFunction(" + x + ", " + y+ ")\"><a></td>");
		}
		document.write("</tr>");
	}
})();