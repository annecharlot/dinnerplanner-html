$(function() {

	var model = new DinnerModel();
	
	var exampleView = new ExampleView($("#exampleView"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailView = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model);

});