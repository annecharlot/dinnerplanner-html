
var ItemView = function (container, model) {

	this.update = function() {

	var fullitem = container.find("#fullitem");
	
	var menu = model.getFullMenu();

	var full="";

	for (let dsh of menu) { 
		
		var source= "<img src='" + dsh.image + "' height='200' width='200' style='outline: 1px solid black;'/>" ; 

		var text="<h3>" + dsh.title + "</h3>";
		
		full += "<div class='row'><div class='col-xs-12 col-md-6' style='padding: 5px;'>" + source + text + "</div>"
		+ "<div class='col-xs-12 col-md-6'><h4>Preparation</h4>"
		+ dsh.instructions
		+ "</div><br/></div>";
		
	};
	fullitem.html(full);
}

this.update();
model.addObserver(this);
}
 
