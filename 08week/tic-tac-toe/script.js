'use strict'

$(document).ready(function() {
  // set the first player = to poop
  var pTurn = '💩';
  
  // click box. if empty, add character, check for a winner, and switch turn
  $('[data-cell]').on('click', function(){
    // if the space is empty
    if($(this).text() === ''){
      // set the text to whatever player is clicking
      $(this).text(pTurn);
      // run checkForWin function
      checkForWin();
      // if O played switch the turn to poop
      if(pTurn === 'O'){
        console.log('O played');
        pTurn = '💩';}    
      // poop played switch the turn to O
      else{
        console.log('poop played');
        pTurn = 'O';}
    }
  })
  
  // clear button function
  $('#clear').on('click', function(){
    $('[data-cell]').text('');   
    $('#announce-winner').text(`Oooo💩!`);
    pTurn = '💩';
  })
  
  function checkForWin(){

    // all 9 spaces filled with no winner we have two loosers
    var pooCount = $("[data-cell]:Contains('💩')").length;
    var oCount = $("[data-cell]:Contains('O')").length;
    
    if (pooCount + oCount === 9){
      $('#announce-winner').text(`LOSERS!`);    
    }    
    
    // row conditions
    if(
        $('[data-cell="0"]').text() === pTurn && 
        $('[data-cell="1"]').text() === pTurn && 
        $('[data-cell="2"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);}
    else if(
        $('[data-cell="3"]').text() === pTurn && 
        $('[data-cell="4"]').text() === pTurn && 
        $('[data-cell="5"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);}
    else if(
        $('[data-cell="6"]').text() === pTurn && 
        $('[data-cell="7"]').text() === pTurn && 
        $('[data-cell="8"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);}
    // column conditions
    else if(
        $('[data-cell="0"]').text() === pTurn && 
        $('[data-cell="3"]').text() === pTurn && 
        $('[data-cell="6"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);} 
    else if(
        $('[data-cell="1"]').text() === pTurn && 
        $('[data-cell="4"]').text() === pTurn && 
        $('[data-cell="7"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);} 
    else if(
        $('[data-cell="2"]').text() === pTurn && 
        $('[data-cell="5"]').text() === pTurn && 
        $('[data-cell="8"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);} 
    // diagonal conditions
    else if(
        $('[data-cell="0"]').text() === pTurn && 
        $('[data-cell="4"]').text() === pTurn && 
        $('[data-cell="8"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);} 
    else if(
        $('[data-cell="2"]').text() === pTurn && 
        $('[data-cell="4"]').text() === pTurn && 
        $('[data-cell="6"]').text() === pTurn){
        $('#announce-winner').text(`${pTurn} wins!`);}
    
  }
  
  
})