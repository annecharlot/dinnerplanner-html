var ItemButtonController = function(view,model, app /**, id = dsh.id som vi klicka på */) {
    view.itembutton.click(function(){
       //* model.setactivedish(id),  model.getactivedish()

       app.dishdetails();
    })
}