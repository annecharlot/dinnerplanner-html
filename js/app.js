$(function() {

	var model = new DinnerModel();
	
	var exampleView = new Mydinner($("#Mydinner"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailView = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model);


/** $("#Mydinner").hide();
$("#itemView").hide();
$("#ItemimgView").hide();
$("#detailView").hide();
$("#sidesbarview").hide();
$("#WelcomeView").hide();
$("#DishSearchView").hide();
$("#selectdish").hide();
$("#selectdishagain").hide();


function showwelcomeview() {
	$("#WelcomeView").show();
}

function selectdish(){
	$("#selectdish").show();
	$("#sidesbarview").show();
	$("#DishSearchView").show();
}

function selectdishagain(){
	$("#selectdishagain").show();
	$("#sidesbarview").show();
	$("#DishSearchView").show();
}

function dishdetails(){
	$("#detailView").show();
	$("#sidesbarview").show();
}

function dinneroverview(){
	$("#Mydinner").show();
	$("#ItemimgView").show();
}

function dinnerprintout(){
	$("#Mydinner").show();
	$("#itemView").show();
}

selectdishagain();*/

});