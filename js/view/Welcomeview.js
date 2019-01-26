
var WelcomeView = function (container, model) {
	
	var welcome = container.find("#welcome");

	var view = "<div class='row'><div class='col-md-4 col-md-offset-4 col-xs-12' style='padding:40px 0 40px 0;'>"
	+ "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
	+ "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
	+ "nisi ut aliquip ex ea commodo consequat.</p>"
	+ "<button class='btn' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);'>"
	+ "Create new dinner</button></div>";

	welcome.html(view);
}
 
