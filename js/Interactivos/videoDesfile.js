// Get the video element with id="myVideo"
var vid = document.getElementById("myVideo");
var correct = -1;

//Para dar saltos en el video según una opción elegida
var goodChoicePart = 60;
var badChoicePart = 149;
var goodChoiceChosen = false;

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
vid.ontimeupdate = function () { myFunction() };

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;

    if ((vid.currentTime >= 2) && (vid.currentTime <= 8)) {
        document.getElementById('ov0').style.display = 'block';
    } else {
        document.getElementById('ov0').style.display = 'none';
    }

    
    if ((vid.currentTime >= 63) && (vid.currentTime <= 70)) {
        document.getElementById('ov1').style.display = 'block';
        

    } else {
        document.getElementById('ov1').style.display = 'none';
    }

    if ((vid.currentTime >= 153) && (vid.currentTime <= 160)) {
        document.getElementById('ov1').style.display = 'block';
        

    } else {
        document.getElementById('ov1').style.display = 'none';
    }

    if ((vid.currentTime >= 12) && (vid.currentTime <= 16)) {
        vid.pause();
        document.getElementById('ov2').style.display = 'block';
        
    } else {
        document.getElementById('ov2').style.display = 'none';
    }

    if ((vid.currentTime >= 163) && (vid.currentTime <= 168) && (correct == -1)) {
        vid.pause();
        document.getElementById('ov3').style.display = 'block';
        
    } else {
        document.getElementById('ov3').style.display = 'none';
    }

}


//Para dar saltos cuando se eligen (video desfile)
$('.goodChoice').on('click', function(){
    vid.currentTime = goodChoicePart;
    vid.play();
})

$('.badChoice').on('click', function(){
    video.currentTime = badChoicePart;
    vid.play();
})

var cerraranuncio = overlay => {
    correct =document.ov3.question1.value;
    document.getElementById(overlay).style.display = "none";
    vid.play();
  
}

function check(){
    var question1=document.ov3.question1.value;
    var correct;
    var messages1=["¡Buen trabajo!","Inténtalo de nuevo!","¡No es correcto!"];
    

    if((question1== "Gianni Versace")||(question1== "Gianni versace")||(question1== "gianni versace")){
       correct = 0;
    } else{
        correct = 1;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages").innerHTML=messages1[correct];

}