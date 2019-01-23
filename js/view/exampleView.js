
var ExampleView = function (container, model) {

var numberOfGuests = container.find("#numberOfGuests");

model.setNumberOfGuests(3);
var number = model.getNumberOfGuests();
numberOfGuests.html(number);

}