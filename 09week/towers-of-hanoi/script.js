'use strict';

$(document).ready(function() {

  $('.dragMe').draggable({
    revert: "invalid"
  });

  $('#dropArea1, #dropArea2, #dropArea3').droppable({
    drop: function(event, ui) {
      let drag = $(ui.draggable).data('block');
      let last = $(this).children().last().data('block');
      if ((drag) > (last)) {
        $(ui.draggable).draggable('option', 'revert', true);
      } else {
        $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      }
    }
  });



});
