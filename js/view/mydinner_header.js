
var Mydinner = function (container, model) {

	this.update = function() {
	var numberOfGuests = container.find("#numberOfGuests");
	var onlynumber = container.find("#number");


	var number = model.getNumberOfGuests();

	var text = "<div class='row'><div class='col-xs-12 col-md-8'>"
	+ "<h3>My Dinner: " + number + " People</h3></div>"
	+ "<div class='col-xs-6 col-md-4'>";

	numberOfGuests.html(text);
	onlynumber.html(number); 

	this.backandedit = container.find("#backandedit");

	}
	

this.update();
model.addObserver(this);

}
