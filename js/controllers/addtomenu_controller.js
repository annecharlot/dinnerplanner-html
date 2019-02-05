var AddToMenuController = function(view,model, app) {
    view.addbutton.click(function(){
       model.addDishToMenu(view.dsh_id);
       view.update();
       app.selectdishagain();
    })
}