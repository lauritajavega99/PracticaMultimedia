// Get the video element with id="myVideo"
var vid = document.getElementById("myVideo");
var correct = -1;

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

    
    if ((vid.currentTime >= 10) && (vid.currentTime <= 16)) {
        document.getElementById('ov1').style.display = 'block';

    } else {
        document.getElementById('ov1').style.display = 'none';
    }

    if ((vid.currentTime >= 23) && (vid.currentTime <= 26) && (correct == -1)) {
        vid.pause();
        document.getElementById('ov2').style.display = 'block';
    } else {
        document.getElementById('ov2').style.display = 'none';
    }



    if ((vid.currentTime >= 80) && (vid.currentTime <= 87)) {
        document.getElementById('ov0').style.display = 'block';
    } else {
        document.getElementById('ov0').style.display = 'none';
    }

}

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

$(document).ready(function(){
         
    $('button.account').click(function() {
        $('button.btn-correcto').removeClass('btn-correcto');
        $(this).removeClass("account");
        $(this).addClass("btn-correcto");
    });
    
});

var cerraranuncio = overlay => {
    correct =document.ov2.question1.value;
    document.getElementById(overlay).style.display = "none";
    vid.play();
  
}

function check(){
    var question1=document.ov2.question1.value;
    var correct;
    var messages1=["¡Buen trabajo!","¡Inténtalo de nuevo!","¡No es correcto"];
    

    if(question1== "Cacao en polvo"){
       correct = 1;
    }
    if(question1== "Azúcar"){
        correct = 0;
    }
    if(question1== "Nata"){
        correct = 2;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages").innerHTML=messages1[correct];

}