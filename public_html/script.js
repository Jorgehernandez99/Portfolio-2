/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    /* Buttons that are added to onto my Jquery page that do different actions */
   $('#oneButton').bind('click', alertButtonClick);
   $('#twoButton').bind('click', replaceWText);
   $('#threeButton').bind('click', replaceWHtml);
   $('#fourButton').bind('click', addAPara);
   $('#fiveButton').bind('click', removeAPara);
    
   $(".hero").css("background-color", "yellow");
   $('p').css("color", "blue");
   
   $('#hide').bind('click', hideThePage);
   
   $('#show').bind('click', showThePage); 
   
   $('#superHumans').accordion({header: "h4"});
   //$$('#superHumans').css('width', '400px');//
   
   /* Changes the background color of the Jumbotron */
   $('h4').css('background', 'cyan');
   
});
/* Code that Binds the mouse to change the text when hovered over */
("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

('h1').bind('click', mouseClick);

/* Functions that adds what a certain code can do when called upon */

function alertButtonClick() {
   alert("Milestone 3"); 
}

function mouseOverMe() {
    $("h1").html("Miletone 3");
}

function mouseOutMe() {
    $('h1').html("This is a Jquery Website");
}

function mouseClick() {
    $('p').html('Clicked');
}

function replaceWHtml() {
    $('#h3Tag').html('Milestone 4');
}

function replaceWText() {
    $('#h3Tag').text('Replaced with html');
}

function addAPara() {
    $('#randPara').append('<p>Added text for Milestone 4</p>');
}

function removeAPara() {
    $('#randPara p:last' ).remove();
}

function hideThePage() {
    $('div').hide('slide', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
}