
var Mydinner = function (container, model) {

	this.update = function() {
	var numberOfGuests = container.find("#numberOfGuests");
	var onlynumber = container.find("#number");


	var number = model.getNumberOfGuests();

	var text = "<div class='row'><div class='col-xs-12 col-md-8'>"
	+ "<h3>My Dinner: " + number + " People</h3></div>"
	+ "<div class='col-xs-6 col-md-4'>"
	+ "<button id='backandedit' class='btn pull-right' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);'>"
	+ "Go back and edit dinner</button></div></div>";

	numberOfGuests.html(text);
	onlynumber.html(number); 

	this.backandedit = numberOfGuests.find("#backandedit");

	}
	

this.update();
model.addObserver(this);

}
