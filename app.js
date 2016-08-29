$(document).ready(function() {
  console.log(' doc ready');

  //  -----------  prevent sending request -----------
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    // console.log('event prevent triggered');
    // console.log(event.target);
    // console.log(  $(event.target)  );
    // console.log(  $(event.target).find('#shopping-list-entry')  );

    var myValue = $(event.target).find('#shopping-list-entry').val();
    //  console.log(myValue);
    //  console.log( $('.shopping-list') );

    //  ---------- add item to bottom of list  ----------
    $('.shopping-list').append('<li>' +
      '<span class="shopping-item">' + myValue + '</span>' +
      '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
      '<span class="button-label">check</span>' +
      '</button> ' +
      '<button class="shopping-item-delete">' +
      '<span class="button-label">delete</span>' +
      '</button>' +
      '</div>' +
      '</li>');

    //   ----------- reset input ------------
    $(event.target).find('#shopping-list-entry').val('');

  });


  // ------------  remove item  -----------
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
    console.log('toggle remove item');

  });


  // ----------  toggle 'checked' items  ------------
  $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    console.log('toggle checked item');

  });



});