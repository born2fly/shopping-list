$(document).ready(function() {

//  -----------  prevent sending request -----------
 $('#js-shopping-list-form').submit(function(event) {
   event.preventDefault();
   console.log('event prevent triggered');


     // ------------  remove item  -----------
     $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
       $(this).closest('li').remove();
        console.log('toggle remove item');

       });


      // ----------  toggle 'checked' items  ----------
       $("shopping-list").on('click', 'shopping-item-toggle', (function(event) {
        $(this).closest('li').toggleClass("shopping-item-checked");
        console.log('toggle checked item');

       });
  



 });