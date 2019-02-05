var ItemButtonController = function(itembutton, id, app /**, id = dsh.id som vi klicka på */) {
    console.log(itembutton);
    itembutton.addEventListener("click", function(){
       app.dishdetails(id);
       
    })
}