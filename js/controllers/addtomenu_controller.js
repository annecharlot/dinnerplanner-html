var AddToMenuController = function(view,model, app) {
    view.addbutton.click(function(){
       /** Lägg till i menu model.addDishToMenu(dsh_id)*/
       model.addDishToMenu(view.dsh_id);
       app.selectdishagain();
    })
}