// Get the video element with id="myVideo"
var vid = document.getElementById("myVideo");
var correct = -1;
var correcto = -1;
//Para dar saltos en el video según una opción elegida
var goodChoicePart = 40;
var badChoicePart = 20;
var goodChoiceChosen = false;


// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function () { myFunction() };

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;

    if ((vid.currentTime >= 0) && (vid.currentTime <= 4)) {
        document.getElementById('ov3').style.display = 'block';
    } else {
        document.getElementById('ov3').style.display = 'none';
    }

    
    if ((vid.currentTime >= 11) && (vid.currentTime <= 17)) {
        document.getElementById('ov1').style.display = 'block';
        

    } else {
        document.getElementById('ov1').style.display = 'none';
    }

    if ((vid.currentTime >= 50) && (vid.currentTime <= 55) && (correct == -1)) {
        vid.pause();
        document.getElementById('ov2').style.display = 'block';
        
    } else {
        document.getElementById('ov2').style.display = 'none';
    }

    if ((vid.currentTime >= 117) && (vid.currentTime <= 124)) {
        document.getElementById('ov0').style.display = 'block';
    } else {
        document.getElementById('ov0').style.display = 'none';
    }

    if ((vid.currentTime >= 36) && (vid.currentTime <= 42) && (correcto == -1)) {
        vid.pause();
        document.getElementById('ov4').style.display = 'block';
    } else {
        document.getElementById('ov4').style.display = 'none';
    }

}

$(document).ready(function(){
         
    $('button.account').click(function() {
        $('button.btn-correcto').removeClass('btn-correcto');
        $(this).removeClass("account");
        $(this).addClass("btn-correcto");
    });
    
 });

$(document).ready(function(){ 
    $('#ingredientes').on('click',function(){
       $('#respuestaIngre').toggle('slow');
    });
 });

 $(document).ready(function(){ 
    $('#toppings').on('click',function(){
       $('#respuestaTopping').toggle('slow');
    });
 });


 var cerraranuncio = overlay => {
    correct =document.ov2.question1.value;
    document.getElementById(overlay).style.display = "none";
    vid.play();
  
}

var cerraranuncio1 = overlay => {
    correcto =document.ov4.question1.value;
    document.getElementById(overlay).style.display = "none";
    vid.play();
  
}
function check(){
    var question1=document.ov2.question1.value;
    var correct;
    var messages1=["¡Buen trabajo!","¡Inténtalo de nuevo!","¡No es correcto!"];
    

    if(question1== "Cacao en polvo"){
       correct = 1;
    }
    if(question1== "Vainilla"){
        correct = 0;
    }
    if(question1== "Huevos"){
        correct = 2;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages").innerHTML=messages1[correct];

}

function check1(){
    var question1=document.getElementById('textbox1').value;;
    var question2=document.getElementById('textbox2').value;
    var question3=document.getElementById('textbox3').value;
    var correcto = 0;
    var messages1=["¡Buen trabajo!","Inténtalo de nuevo!","¡No es correcto!"];
    

    if(question1== "huevos"){
       correcto++;
    }
    if(question2== "leche"){
        correcto++;
    }
    if(question3== "aceite"){
        correcto++;
    }

    var rango;
    
    if((correcto==0) || (correcto==1) || (correcto==2)){
        rango=2;
     }
     
     if(correcto==3){
         rango=0;
     }


    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages1").innerHTML=messages1[rango];

}