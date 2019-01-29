$(function() {

	//* Views */

	var model = new DinnerModel();
	
	var exampleView = new Mydinner($("#Mydinner"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailView = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model);

	//* Controllers */

	var welcomecontroller = new WelcomeViewController(welcomeview, model, this);

	var backandeditcontroller = new BackandEditController(ItemimgView, itemView, model, this);

	var backtosearchcontroller = new BacktoSearchController(detailView, model, this);

	var confirmdinnercontroller = new ConfirmDinnerController(sidesbarview, model, this);


	//* general state controller */

	function hideallviews(){

	$("#Mydinner").hide();
	$("#itemView").hide();
	$("#ItemimgView").hide();
	$("#detailView").hide();
	$("#sidesbarview").hide();
	$("#WelcomeView").hide();
	$("#DishSearchView").hide();
	$("#selectdish").hide();
	$("#selectdishagain").hide();

	}

	function showwelcomeview() {
		hideallviews();
		$("#WelcomeView").show();
	}

	function selectdish(){
		hideallviews();
		$("#selectdish").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	function selectdishagain(){
		hideallviews();
		$("#selectdishagain").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	function dishdetails(){
		hideallviews();
		$("#detailView").show();
		$("#sidesbarview").show();
	}

	function dinneroverview(){
		hideallviews();
		$("#Mydinner").show();
		$("#ItemimgView").show();
	}

	function dinnerprintout(){
		hideallviews();
		$("#Mydinner").show();
		$("#itemView").show();
	}

});