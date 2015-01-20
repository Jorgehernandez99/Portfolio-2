/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    
   $('#oneButton').bind('click', alertButtonClick);
   $('#twoButton').bind('click', replaceWText);
   $('#threeButton').bind('click', replaceWHtml);
   $('#fourButton').bind('click', addAPara);
   $('#fiveButton').bind('click', removeAPara);
    
   $(".hero").css("background-color", "yellow");
   $('p').css("color", "blue");
   
   $('#oneButton').bind('click', alertButtonClick);
   $('#twoButton').bind('click', replaceWHtml);
   $('#threeButton').bind('click', replaceWText);
   $('#fourButton').bind('click', addAPara);
   $('#fiveButton').bind('click', removeAPara);
   
   $('#hide').bind('click', hideThePage);
   
   $('#show').bind('click', showThePage); 
   
   $('#superHumans').accordion({header: "h4"});
   //$$('#superHumans').css('width', '400px');//
   
   $('h4').css('background', 'cyan');
   
});

("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

('h1').bind('click', mouseClick);


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